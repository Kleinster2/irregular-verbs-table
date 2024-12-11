
import React from 'react';

export default function IrregularVerbRow({ verb }) {
  const playAudio = (text) => {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const cleanText = text.split('\n')[0];
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voices = window.speechSynthesis.getVoices();
    
    // Try to find a female voice
    const femaleVoice = voices.find(voice => 
      voice.name.includes('Google US English Female') ||
      voice.name.includes('Microsoft Zira Desktop') ||
      voice.name.includes('Samantha') ||
      voice.name.includes('Victoria') ||
      voice.name.includes('Karen') ||
      voice.name.includes('Moira') ||
      voice.name.includes('Samantha') ||
      (voice.lang === 'en-US' && voice.name.includes('Female'))
    ) || voices.find(voice => voice.lang === 'en-US');  // Fallback to any US voice
    
    if (femaleVoice) {
      console.log('Selected voice:', femaleVoice.name);
      utterance.voice = femaleVoice;
    }
    
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1.2;  // Slightly higher pitch
    
    window.speechSynthesis.speak(utterance);
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
