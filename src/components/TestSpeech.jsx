
import React, { useState } from 'react';

export default function TestSpeech() {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = () => {
    if (!window.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance('Test speech');
    utterance.rate = 0.8;
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      disabled={isPlaying}
    >
      {isPlaying ? 'Speaking...' : 'Test Speech'}
    </button>
  );
}
