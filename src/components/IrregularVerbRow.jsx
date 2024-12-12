
import React, { useState, useEffect } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [playingStates, setPlayingStates] = useState({
    present: false,
    past: false
  });
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    function loadVoices() {
      const availableVoices = window.speechSynthesis?.getVoices() || [];
      setVoices(availableVoices);
    }

    loadVoices();
    window.speechSynthesis?.addEventListener('voiceschanged', loadVoices);

    return () => {
      window.speechSynthesis?.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  const playAudio = (text, tense) => {
    if (!window.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return;
    }

    try {
      let cleanText = text.split('\n')[0];
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        cleanText = 'red';
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1;

      const englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.onend = () => setPlayingStates(prev => ({ ...prev, [tense]: false }));
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        setPlayingStates(prev => ({ ...prev, [tense]: false }));
      };

      setPlayingStates(prev => ({ ...prev, [tense]: true }));
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Speech synthesis error:', error);
      setIsPlaying(false);
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-pre-line">{verb.english}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.spanish}</td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.present}
        <button 
          onClick={() => playAudio(verb.present, 'present')}
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={playingStates.present}
          aria-label="Play present tense pronunciation"
        >
          🔊
        </button>
      </td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.past}
        <button 
          onClick={() => playAudio(verb.past, 'past')}
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={playingStates.past}
          aria-label="Play past tense pronunciation"
        >
          🔊
        </button>
      </td>
    </tr>
  );
}
