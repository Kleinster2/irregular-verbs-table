
import React from 'react';

export default function IrregularVerbRow({ verb }) {
  const playAudio = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-pre-line">{verb.english}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.spanish}</td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.present}
        {verb.presentAudio && (
          <button 
            onClick={() => playAudio(verb.present.split('\n')[0])}
            className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            aria-label="Play present tense pronunciation"
          >
            🔊
          </button>
        )}
      </td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.past}
        {verb.pastAudio && (
          <button 
            onClick={() => playAudio(verb.pastAudio)}
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
