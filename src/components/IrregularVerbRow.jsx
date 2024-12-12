
import React, { useState, useEffect } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [speechEnabled, setSpeechEnabled] = useState(true);

  const playAudio = (text) => {
    if (!('speechSynthesis' in window)) {
      setSpeechEnabled(false);
      return;
    }

    try {
      window.speechSynthesis.cancel();
      
      let cleanText = text.split('\n')[0];
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        cleanText = 'red';
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;

      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Speech synthesis error:', error);
      setSpeechEnabled(false);
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-pre-line">{verb.english}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.spanish}</td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.present}
        {speechEnabled && (
          <button 
            onClick={() => playAudio(verb.present)}
            className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            aria-label="Play present tense pronunciation"
          >
            🔊
          </button>
        )}
      </td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.past}
        {speechEnabled && (
          <button 
            onClick={() => playAudio(verb.past)}
            className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            aria-label="Play past tense pronunciation"
          >
            🔊
          </button>
        )}
      </td>
    </tr>
  );
}
