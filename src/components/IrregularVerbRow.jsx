
import React from 'react';

export default function IrregularVerbRow({ verb }) {
  const playAudio = (text) => {
    // Create an audio element
    const audio = new Audio();
    
    // Get clean text without IPA notation
    let cleanText = text.split('\n')[0].toLowerCase();
    
    // Special handling for 'read' in past tense
    if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
      cleanText = 'red';
    }
    
    // Set audio source
    audio.src = `https://api.dictionaryapi.dev/media/pronunciations/en/${cleanText}.mp3`;
    
    // Play audio
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });
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
