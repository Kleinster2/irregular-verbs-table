
import React, { useState, useEffect } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [synth, setSynth] = useState(null);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    // Initialize speech synthesis
    const speechSynth = window.speechSynthesis;
    setSynth(speechSynth);

    // Function to set the voice
    const setVoice = () => {
      const voices = speechSynth.getVoices();
      const englishVoice = voices.find(voice => 
        voice.lang.startsWith('en') && voice.name.includes('Female')
      ) || voices.find(voice => 
        voice.lang.startsWith('en')
      );
      
      if (englishVoice) {
        setSelectedVoice(englishVoice);
      }
    };

    // Set voice immediately if available
    setVoice();

    // Handle async voice loading
    speechSynth.onvoiceschanged = setVoice;

    return () => {
      speechSynth.cancel();
    };
  }, []);

  const playAudio = (text) => {
    if (!synth || !selectedVoice) return;

    // Cancel any ongoing speech
    synth.cancel();

    // Get clean text without IPA notation
    let cleanText = text.split('\n')[0];
    
    // Special handling for 'read' in past tense
    if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
      cleanText = 'red';
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.voice = selectedVoice;
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

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
