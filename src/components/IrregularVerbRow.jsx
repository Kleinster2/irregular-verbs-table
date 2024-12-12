
import React, { useState, useEffect } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [synth, setSynth] = useState(null);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    // Initialize speech synthesis
    const speechSynth = window.speechSynthesis;
    setSynth(speechSynth);

    // Load voices
    const loadVoices = () => {
      const availableVoices = speechSynth.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    speechSynth.onvoiceschanged = loadVoices;

    return () => {
      if (speechSynth) {
        speechSynth.onvoiceschanged = null;
      }
    };
  }, []);

  const playAudio = (text) => {
    if (!synth) return;

    try {
      // Cancel any ongoing speech
      synth.cancel();
      
      let cleanText = text.split('\n')[0];
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        cleanText = 'red';
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;

      if (voices.length > 0) {
        const englishVoice = voices.find(voice => voice.lang.includes('en-')) || voices[0];
        utterance.voice = englishVoice;
      }

      synth.speak(utterance);
    } catch (error) {
      console.error('Speech synthesis error:', error);
    }
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
