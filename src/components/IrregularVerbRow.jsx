
import React, { useState, useEffect } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    setSynth(window.speechSynthesis);
  }, []);

  const playAudio = (text) => {
    if (!synth) return;
    
    // Cancel any ongoing speech
    synth.cancel();
    
    // Get clean text without IPA notation
    let cleanText = text.split('\n')[0];
    
    // Special handling for 'read' in past tense
    if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
      cleanText = 'red';
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1.0;

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
