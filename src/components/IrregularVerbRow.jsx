
import React, { useState } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [audioError, setAudioError] = useState(false);

  const playAudio = async (text) => {
    try {
      if (!window.speechSynthesis) {
        throw new Error('Speech synthesis not supported');
      }

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      // Get just the English word, before the IPA notation
      let cleanText = text.split('\n')[0];
      
      // Special handling for 'read' in past tense
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        cleanText = 'red';
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      // Set voice synchronously
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.lang = 'en-US';
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      utterance.rate = isMobile ? 0.5 : 0.7;
      utterance.pitch = 1.2;

      // Add error handling
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        setAudioError(true);
        setTimeout(() => setAudioError(false), 3000);
      };

      window.speechSynthesis.speak(utterance);
      setAudioError(false);
    } catch (error) {
      console.error('Speech synthesis error:', error);
      setAudioError(true);
      setTimeout(() => setAudioError(false), 3000);
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
