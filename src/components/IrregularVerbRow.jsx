import React, { useState } from 'react';

export default function IrregularVerbRow({ verb }) {
  const [audioError, setAudioError] = useState(false);

  const playAudio = async (text) => {
    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Get just the English word, before the IPA notation
      let cleanText = text.split('\n')[0];
      
      // Special handling for 'read' in past tense
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        cleanText = 'red'; // Force pronunciation of past tense 'read'
      }
      
      // Add minimal pause between words
      if (cleanText.includes('it is')) {
        cleanText = cleanText.replace('it is', 'it' + String.fromCharCode(8203) + 'is');
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.8; // Faster rate for shorter pauses
      
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
      
      // First try to find a female voice
      let selectedVoice = voices.find(voice => 
        (voice.name.includes('Female') && voice.lang.startsWith('en')) ||
        voice.name.includes('Microsoft Zira') ||
        voice.name.includes('Google US English Female')
      );
      
      // If no female voice found, use any English voice
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('en'));
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      utterance.lang = 'en-US';
      // Slower rate and add word boundaries for natural pauses
      utterance.rate = 0.6;
      utterance.pitch = 1.2;
      // Add word boundary markers
      if (cleanText.includes('it is')) {
        cleanText = cleanText.replace('it is', 'it\u2008is');
      }
      
      // Add error handling
      utterance.onerror = () => {
        setAudioError(true);
        setTimeout(() => setAudioError(false), 3000);
      };

      window.speechSynthesis.speak(utterance);
      setAudioError(false);
    } catch (error) {
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