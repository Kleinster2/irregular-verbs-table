
import React, { useState, useEffect } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [audioError, setAudioError] = useState(false);
  const [synth, setSynth] = useState(null);
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const initSpeech = () => {
      const synthesis = window.speechSynthesis;
      setSynth(synthesis);
      const voices = synthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith('en'));
      if (englishVoice) setVoice(englishVoice);
    };

    if (window.speechSynthesis) {
      if (window.speechSynthesis.getVoices().length > 0) {
        initSpeech();
      } else {
        window.speechSynthesis.onvoiceschanged = initSpeech;
      }
    }
  }, []);

  const playAudio = (text) => {
    if (!synth || !voice) {
      setAudioError(true);
      setTimeout(() => setAudioError(false), 3000);
      return;
    }

    // Cancel any ongoing speech
    synth.cancel();

    // Get just the English word, before the IPA notation
    let cleanText = text.split('\n')[0];
    
    // Special handling for 'read' in past tense
    if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
      cleanText = 'red';
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.voice = voice;
    utterance.lang = 'en-US';
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    utterance.rate = isMobile ? 0.5 : 0.7;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      synth.cancel();
    };

    utterance.onerror = () => {
      setAudioError(true);
      setTimeout(() => setAudioError(false), 3000);
    };

    synth.speak(utterance);
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-pre-line">{verb.english}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.spanish}</td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.present}
        <button 
          onClick={() => playAudio(verb.present)}
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          aria-label="Play present tense pronunciation"
        >
          🔊
        </button>
      </td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.past}
        <button 
          onClick={() => playAudio(verb.past)}
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          aria-label="Play past tense pronunciation"
        >
          🔊
        </button>
      </td>
    </tr>
  );
}
