
import React from 'react';

export default function TestSpeech() {
  const handleTestSpeech = () => {
    // Wait for speech synthesis to be ready
    const waitForSynth = () => {
      return new Promise((resolve) => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          const voices = window.speechSynthesis.getVoices();
          if (voices.length > 0) {
            resolve(voices);
          } else {
            window.speechSynthesis.addEventListener('voiceschanged', () => {
              resolve(window.speechSynthesis.getVoices());
            }, { once: true });
          }
        }
      });
    };

    // Try to speak
    waitForSynth().then(() => {
      const utterance = new SpeechSynthesisUtterance('Test speech');
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    });
  };

  return (
    <button
      onClick={handleTestSpeech}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Test Speech
    </button>
  );
}
