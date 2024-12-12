
import React, { useState } from 'react';

export default function IrregularVerbRow({ verb }) {
  const playAudio = (text) => {
    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Get just the English word, before the IPA notation
      const cleanText = text.split('\n')[0];
      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      // Configure utterance
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      // Special handling for 'read' in past tense
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        utterance.text = 'red';
      }

      window.speechSynthesis.speak(utterance);
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
