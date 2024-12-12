import React, { useState } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [audioError, setAudioError] = useState(false);

  const playAudio = async (text) => {
    try {
      if (!window.speechSynthesis) {
        throw new Error('Speech synthesis not supported');
      }
      
      // Initialize speech synthesis
      window.speechSynthesis.cancel();
      
      // Get just the English word, before the IPA notation
      let cleanText = text.split('\n')[0];
      
      // Special handling for 'read' in past tense
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        cleanText = 'red'; // Force pronunciation of past tense 'read'
      }
      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      // Get voices
      const getVoices = () => {
        return new Promise((resolve) => {
          let voices = window.speechSynthesis.getVoices();
          if (voices.length) {
            resolve(voices);
          } else {
            window.speechSynthesis.onvoiceschanged = () => {
              voices = window.speechSynthesis.getVoices();
              resolve(voices);
            };
          }
        });
      };
      
      const voices = await getVoices();
      
      // Use any available English voice
      const selectedVoice = voices.find(voice => voice.lang.startsWith('en')) || voices[0];
      
      if (!selectedVoice) {
        throw new Error('No voice available');
      }
      
      utterance.voice = selectedVoice;
      
      utterance.lang = 'en-US';
      // Check if device is mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      utterance.rate = isMobile ? 0.5 : 0.7;
      utterance.pitch = 1.2;
      
      // Add error handling
      utterance.onerror = () => {
        setAudioError(true);
        setTimeout(() => setAudioError(false), 3000);
      };

      window.speechSynthesis.speak(utterance);
      
      // Cleanup after speech ends
      utterance.onend = () => {
        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();
      };
      
      setAudioError(false);
    } catch (error) {
      console.error('Speech synthesis error:', error);
      setAudioError(true);
      setTimeout(() => setAudioError(false), 3000);
      window.speechSynthesis.resume();
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