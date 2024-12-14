import React, { useState } from 'react';

let activeTimeout = null;

export default function IrregularVerbRow({ verb, language = 'spanish' }) {
  const [audioError, setAudioError] = useState(false);
  
  const clearActiveAudio = () => {
    if (activeTimeout) {
      clearTimeout(activeTimeout);
      activeTimeout = null;
    }
    window.speechSynthesis.cancel();
  };

  const playAudio = async (text) => {
    try {
      clearActiveAudio();
      await new Promise(resolve => setTimeout(resolve, 100));
      
      let cleanText = text.split('\n')[0];
      
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        cleanText = 'red';
      }
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.6;
      
      utterance.onend = () => {
        window.speechSynthesis.cancel();
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
        }
      };
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        window.speechSynthesis.cancel();
        setAudioError(true);
      };
      
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
      
      let selectedVoice = voices.find(voice => 
        (voice.name.includes('Female') && voice.lang.startsWith('en')) ||
        voice.name.includes('Microsoft Zira') ||
        voice.name.includes('Google US English Female')
      );
      
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('en'));
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      utterance.lang = 'en-US';
      utterance.rate = 0.6;
      utterance.pitch = 1.2;

      if (cleanText.includes('it is')) {
        cleanText = cleanText.replace('it is', 'it\u2008is');
      }
      if (cleanText.includes('they are')) {
        cleanText = cleanText.replace('they are', 'they\u2008are');
      }

      utterance.text = cleanText;

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
    <tr className="border-b even:bg-gray-50 hover:bg-blue-50 transition-colors duration-150">
      <td className="px-2 sm:px-6 py-2 sm:py-4 text-sm sm:text-base whitespace-pre-line">{verb.english}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb[language] ?? verb.spanish}</td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.present}
        <button 
          onMouseEnter={(e) => {
            const button = e.currentTarget;
            button.dataset.timeout = setTimeout(() => playAudio(verb.present), 500);
          }}
          onMouseLeave={(e) => {
            clearTimeout(e.currentTarget.dataset.timeout);
          }}
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-110 transform transition-all duration-200 hover:shadow-md cursor-pointer"
          aria-label="Play present tense pronunciation"
        >
          🔊
        </button>
      </td>
      <td className="px-6 py-4 whitespace-pre-line">
        {verb.past}
        <button 
          onMouseEnter={(e) => {
            const button = e.currentTarget;
            button.dataset.timeout = setTimeout(() => playAudio(verb.past), 500);
          }}
          onMouseLeave={(e) => {
            clearTimeout(e.currentTarget.dataset.timeout);
          }}
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-110 transform transition-all duration-200 hover:shadow-md cursor-pointer"
          aria-label="Play past tense pronunciation"
        >
          🔊
        </button>
      </td>
      <td className="px-6 py-4 whitespace-pre-line text-center">
        <button 
          onMouseEnter={(e) => {
            const button = e.currentTarget;
            button.dataset.timeout = setTimeout(async () => {
              const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
              
              if (verb.present.includes("he is")) {
                await playAudio("he is he was, she is she was, it is it was");
              } else if (verb.present.includes("you are")) {
                const sequence = [
                  ["you are", "you were"],
                  ["we are", "we were"],
                  ["they are", "they were"]
                ];
                for (const [pres, past] of sequence) {
                  await playAudio(pres);
                  await delay(800);
                  await playAudio(past);
                  await delay(1200);
                }
              } else {
                await playAudio(verb.present);
                await delay(800);
                await playAudio(verb.past);
              }
            }, 500);
          }}
          onMouseLeave={(e) => {
            clearTimeout(e.currentTarget.dataset.timeout);
          }}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 hover:scale-110 transform transition-all duration-200 hover:shadow-md"
          aria-label="Play present and past tense contrast"
        >
          Present → Past
        </button>
      </td>
    </tr>
  );
}