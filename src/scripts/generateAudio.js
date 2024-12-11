
import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';

const client = new textToSpeech.TextToSpeechClient();

async function generateSpeechFile(text, outputFile) {
  const request = {
    input: {text: text},
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    audioConfig: {audioEncoding: 'MP3'},
  };

  const [response] = await client.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(outputFile, response.audioContent, 'binary');
}

// Generate for each verb
generateSpeechFile("I am", "public/audio/i-am.mp3");
generateSpeechFile("was", "public/audio/was.mp3");
generateSpeechFile("is", "public/audio/is.mp3");
generateSpeechFile("are", "public/audio/are.mp3");
generateSpeechFile("were", "public/audio/were.mp3");
