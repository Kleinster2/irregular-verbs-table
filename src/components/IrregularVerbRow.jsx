
import React from 'react';

export default function IrregularVerbRow({ verb }) {
  const playAudio = (text) => {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const cleanText = text.split('\n')[0];
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voices = window.speechSynthesis.getVoices();
    
    // Try to find a female voice
    // Wait for voices to be loaded
    if (voices.length === 0) {
      voices = speechSynthesis.getVoices();
    }
    
    // First try to find a female voice
    let femaleVoice = voices.find(voice => 
      (voice.name.includes('Female') && voice.lang.startsWith('en')) ||
      voice.name.includes('Microsoft Zira') ||
      voice.name.includes('Google US English Female')
    );
    
    // If no female voice found, use any English voice
    if (!femaleVoice) {
      femaleVoice = voices.find(voice => voice.lang.startsWith('en'));
    }
    
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
