
import React, { useState, useEffect } from 'react';

export default function TestSpeech() {
  const handleTestSpeech = () => {
    const synth = window.speechSynthesis;
    if (!synth) {
      console.error('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    synth.cancel();

    // Create and configure utterance
    const utterance = new SpeechSynthesisUtterance('Test speech');
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    utterance.volume = 1;

    // Check if browser is Chrome
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (isChrome) {
      // Chrome requires a slight delay
      setTimeout(() => {
        synth.speak(utterance);
      }, 100);
    } else {
      synth.speak(utterance);
    }
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
