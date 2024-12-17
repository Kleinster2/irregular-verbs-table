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
      if (activeTimeout) {
        clearTimeout(activeTimeout);
        activeTimeout = null;
      }
      window.speechSynthesis.cancel();
      
      let cleanText = text.split('\n')[0];
      if (cleanText === 'read' && verb.english === 'read' && text === verb.past) {
        cleanText = 'red';
      }
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.6;
      utterance.pitch = 1.2;
      utterance.lang = 'en-US';
      
      const voices = await new Promise((resolve) => {
        const voiceList = window.speechSynthesis.getVoices();
        if (voiceList.length) {
          resolve(voiceList);
        } else {
          window.speechSynthesis.onvoiceschanged = () => {
            resolve(window.speechSynthesis.getVoices());
          };
        }
      });
      
      const selectedVoice = voices.find(voice => 
        (voice.name.includes('Female') && voice.lang.startsWith('en')) ||
        voice.name.includes('Microsoft Zira') ||
        voice.name.includes('Google US English Female')
      ) || voices.find(voice => voice.lang.startsWith('en'));
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      if (cleanText.includes('it is')) {
        cleanText = cleanText.replace('it is', 'it\u2008is');
      }
      if (cleanText.includes('they are')) {
        cleanText = cleanText.replace('they are', 'they\u2008are');
      }

      utterance.text = cleanText;
      
      utterance.onend = () => {
        //window.speechSynthesis.cancel();   // Remove the cancel call so that the next utterance can play
      };

      utterance.onerror = () => {
        setAudioError(true);
        setTimeout(() => setAudioError(false), 3000);
      };

      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Audio playback error:', error);
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
          onMouseEnter={() => {
            activeTimeout = setTimeout(() => playAudio(verb.present), 500);
          }}
          onMouseLeave={() => {
            if (activeTimeout) {
              clearTimeout(activeTimeout);
              activeTimeout = null;
            }
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
          onMouseEnter={() => {
            activeTimeout = setTimeout(() => playAudio(verb.past), 500);
          }}
          onMouseLeave={() => {
            if (activeTimeout) {
              clearTimeout(activeTimeout);
              activeTimeout = null;
            }
          }}
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-110 transform transition-all duration-200 hover:shadow-md cursor-pointer"
          aria-label="Play past tense pronunciation"
        >
          🔊
        </button>
      </td>
      <td className="px-6 py-4 whitespace-pre-line text-center">
        <button 
          onMouseEnter={() => {
            activeTimeout = setTimeout(async () => {
              const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
              
              if (verb.present.includes("he is")) {
                await playAudio("he is, he was,, she is, she was,, it is, it was");
              } else if (verb.present.includes("you are")) {
                await playAudio("we are, we were,, you are, you were,, they are, they were");

              } else if (verb.english === "understand") {
              await playAudio("Understand!");
              await delay(800);
              await playAudio("understood.");
       
              } else {
                await playAudio(verb.present);
                await delay(800);
                await playAudio(verb.past);
              }
            }, 500);
          }}
          onMouseLeave={() => {
            if (activeTimeout) {
              clearTimeout(activeTimeout);
              activeTimeout = null;
            }
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
