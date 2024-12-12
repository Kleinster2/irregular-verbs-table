
import React, { useState, useEffect } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return;
    }

    try {
      setIsPlaying(true);
      window.speechSynthesis.cancel();

      let cleanText = text.split('\n')[0];
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        cleanText = 'red';
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.volume = 1;

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => {
        console.error('Speech synthesis error');
        setIsPlaying(false);
      };

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
          onClick={() => playAudio(verb.present)}
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={isPlaying}
          aria-label="Play present tense pronunciation"
        >
          🔊
        </button>
      </td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.past}
        <button 
          onClick={() => playAudio(verb.past)}
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={isPlaying}
          aria-label="Play past tense pronunciation"
        >
          🔊
        </button>
      </td>
    </tr>
  );
}
