
import React from 'react';

export default function IrregularVerbRow({ verb }) {
  const playAudio = (text) => {
    // Remove IPA notation if present by taking first line
    const cleanText = text.split('\n')[0];
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;

    // Wait for voices to be loaded
    window.speechSynthesis.onvoiceschanged = () => {
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Google US English Female') ||
        voice.name.includes('Samantha') ||
        (voice.lang === 'en-US' && voice.name.includes('Female'))
      );
      utterance.voice = preferredVoice || voices[0];
      speechSynthesis.speak(utterance);
    };

    // Trigger initial voice load if already available
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      window.speechSynthesis.onvoiceschanged();
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
