
import React from 'react';
import IrregularVerbRow from './IrregularVerbRow';

// Static data for irregular verbs
const data = [
  {
    english: "be",
    spanish: "ser/estar",
    present: "I am\n/aɪ ˈæm/",
    past: "was\n/wɒz/",
    presentAudio: "/audio/i-am.mp3",
    pastAudio: "/audio/was.mp3"
  },
  {
    english: "be",
    spanish: "ser/estar",
    present: "he is, she is, it is\n/hiː ɪz, ʃiː ɪz, ɪt ɪz/",
    past: "was\n/wɒz/",
    presentAudio: "/audio/is.mp3",
    pastAudio: "/audio/was.mp3"
  },
  {
    english: "be",
    spanish: "ser/estar",
    present: "you are, we are, they are\n/juː ɑːr, wiː ɑːr, ðeɪ ɑːr/",
    past: "were\n/wɜːr/",
    presentAudio: "/audio/are.mp3",
    pastAudio: "/audio/were.mp3"
  },
  {
    english: "become",
    spanish: "convertirse en",
    present: "become\n/bɪˈkʌm/",
    past: "became\n/bɪˈkeɪm/"
  },
  {
    english: "begin",
    spanish: "empezar",
    present: "begin\n/bɪˈɡɪn/",
    past: "began\n/bɪˈɡæn/"
  },
  {
    english: "bite",
    spanish: "morder",
    present: "bite\n/baɪt/",
    past: "bit\n/bɪt/"
  },
  {
    english: "blow",
    spanish: "soplar",
    present: "blow\n/bloʊ/",
    past: "blew\n/bluː/"
  },
  {
    english: "break",
    spanish: "romper",
    present: "break\n/breɪk/",
    past: "broke\n/broʊk/"
  },
  {
    english: "bring",
    spanish: "traer/llevar",
    present: "bring\n/brɪŋ/",
    past: "brought\n/brɔːt/"
  },
  {
    english: "build",
    spanish: "construir",
    present: "build\n/bɪld/",
    past: "built\n/bɪlt/"
  },
  {
    english: "buy",
    spanish: "comprar",
    present: "buy\n/baɪ/",
    past: "bought\n/bɔːt/"
  },
  {
    english: "catch",
    spanish: "atrapar/agarrar",
    present: "catch\n/kætʃ/",
    past: "caught\n/kɔːt/"
  },
  {
    english: "choose",
    spanish: "elegir",
    present: "choose\n/tʃuːz/",
    past: "chose\n/tʃoʊz/"
  },
  {
    english: "come",
    spanish: "venir",
    present: "come\n/kʌm/",
    past: "came\n/keɪm/"
  },
  {
    english: "cut",
    spanish: "cortar",
    present: "cut\n/kʌt/",
    past: "cut\n/kʌt/"
  },
  {
    english: "do",
    spanish: "hacer",
    present: "do\n/duː/",
    past: "did\n/dɪd/"
  },
  {
    english: "drink",
    spanish: "beber",
    present: "drink\n/drɪŋk/",
    past: "drank\n/dræŋk/"
  },
  {
    english: "drive",
    spanish: "conducir",
    present: "drive\n/draɪv/",
    past: "drove\n/droʊv/"
  },
  {
    english: "eat",
    spanish: "comer",
    present: "eat\n/iːt/",
    past: "ate\n/eɪt/"
  },
  {
    english: "fall",
    spanish: "caer",
    present: "fall\n/fɔːl/",
    past: "fell\n/fɛl/"
  },
  {
    english: "feel",
    spanish: "sentir",
    present: "feel\n/fiːl/",
    past: "felt\n/fɛlt/"
  },
  {
    english: "fly",
    spanish: "volar",
    present: "fly\n/flaɪ/",
    past: "flew\n/fluː/"
  },
  {
    english: "forget",
    spanish: "olvidar",
    present: "forget\n/fərˈɡɛt/",
    past: "forgot\n/fərˈɡɒt/"
  },
  {
    english: "freeze",
    spanish: "congelar",
    present: "freeze\n/friːz/",
    past: "froze\n/froʊz/"
  },
  {
    english: "give",
    spanish: "dar",
    present: "give\n/ɡɪv/",
    past: "gave\n/ɡeɪv/"
  },
  {
    english: "go",
    spanish: "ir",
    present: "go\n/ɡoʊ/",
    past: "went\n/wɛnt/"
  },
  {
    english: "grow",
    spanish: "crecer",
    present: "grow\n/ɡroʊ/",
    past: "grew\n/ɡruː/"
  },
  {
    english: "hold",
    spanish: "sostener/mantener",
    present: "hold\n/hoʊld/",
    past: "held\n/hɛld/"
  },
  {
    english: "keep",
    spanish: "mantener/guardar",
    present: "keep\n/kiːp/",
    past: "kept\n/kɛpt/"
  },
  {
    english: "know",
    spanish: "saber",
    present: "know\n/noʊ/",
    past: "knew\n/njuː/"
  },
  {
    english: "let",
    spanish: "permitir",
    present: "let\n/lɛt/",
    past: "let\n/lɛt/"
  },
  {
    english: "make",
    spanish: "hacer",
    present: "make\n/meɪk/",
    past: "made\n/meɪd/"
  },
  {
    english: "meet",
    spanish: "encontrarse con\nreunirse con",
    present: "meet\n/miːt/",
    past: "met\n/mɛt/"
  },
  {
    english: "read",
    spanish: "leer",
    present: "read\n/riːd/",
    past: "read\n/rɛd/"
  },
  {
    english: "rise",
    spanish: "elevarse/subir",
    present: "rise\n/raɪz/",
    past: "rose\n/roʊz/"
  },
  {
    english: "run",
    spanish: "correr",
    present: "run\n/rʌn/",
    past: "ran\n/ræn/"
  },
  {
    english: "say",
    spanish: "decir (algo)",
    present: "say\n/seɪ/",
    past: "said\n/sɛd/"
  },
  {
    english: "see",
    spanish: "ver",
    present: "see\n/siː/",
    past: "saw\n/sɔː/"
  },
  {
    english: "sell",
    spanish: "vender",
    present: "sell\n/sɛl/",
    past: "sold\n/soʊld/"
  },
  {
    english: "send",
    spanish: "enviar",
    present: "send\n/sɛnd/",
    past: "sent\n/sɛnt/"
  },
  {
    english: "set",
    spanish: "establecer",
    present: "set\n/sɛt/",
    past: "set\n/sɛt/"
  },
  {
    english: "sit",
    spanish: "sentarse",
    present: "sit\n/sɪt/",
    past: "sat\n/sæt/"
  },
  {
    english: "speak",
    spanish: "hablar",
    present: "speak\n/spiːk/",
    past: "spoke\n/spoʊk/"
  },
  {
    english: "spend",
    spanish: "gastar",
    present: "spend\n/spɛnd/",
    past: "spent\n/spɛnt/"
  },
  {
    english: "stand",
    spanish: "estar de pie\nponerse de pie",
    present: "stand\n/stænd/",
    past: "stood\n/stʊd/"
  },
  {
    english: "steal",
    spanish: "robar",
    present: "steal\n/stiːl/",
    past: "stole\n/stoʊl/"
  },
  {
    english: "take",
    spanish: "tomar",
    present: "take\n/teɪk/",
    past: "took\n/tʊk/"
  },
  {
    english: "teach",
    spanish: "enseñar",
    present: "teach\n/tiːtʃ/",
    past: "taught\n/tɔːt/"
  },
  {
    english: "tell",
    spanish: "decir a alguien",
    present: "tell\n/tɛl/",
    past: "told\n/toʊld/"
  },
  {
    english: "think",
    spanish: "pensar",
    present: "think\n/θɪŋk/",
    past: "thought\n/θɔːt/"
  },
  {
    english: "throw",
    spanish: "lanzar/tirar",
    present: "throw\n/θroʊ/",
    past: "threw\n/θruː/"
  },
  {
    english: "understand",
    spanish: "entender/comprender",
    present: "understand\n/ˌʌndərˈstænd/",
    past: "understood\n/ˌʌndərˈstʊd/"
  },
  {
    english: "wake",
    spanish: "despertar",
    present: "wake\n/weɪk/",
    past: "woke\n/woʊk/"
  },
  {
    english: "wear",
    spanish: "llevar puesto/usar",
    present: "wear\n/wɛr/",
    past: "wore\n/wɔːr/"
  },
  {
    english: "win",
    spanish: "ganar",
    present: "win\n/wɪn/",
    past: "won\n/wʌn/"
  },
  {
    english: "write",
    spanish: "escribir",
    present: "write\n/raɪt/",
    past: "wrote\n/roʊt/"
  }
];

export default function IrregularVerbsTable() {
  return (
    <div className="w-full">
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-section, .print-section * {
              visibility: visible;
            }
            .no-print {
              display: none;
            }
            .print-section {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            @page {
              margin: 1cm;
            }
            .print-section td, .print-section th {
              padding: 4px;
              border: 1px solid #000;
            }
          }
        `}
      </style>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center print:hidden">
          <h1 className="text-xl md:text-2xl font-bold">Irregular Verbs</h1>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Print Table
          </button>
        </div>
        
        <div className="overflow-x-auto print-section">
          <table className="w-full border-collapse min-w-[640px]" aria-label="Irregular Verbs in English and Spanish">
            <caption className="sr-only">List of irregular verbs with their present and past tense forms in English and Spanish translations</caption>
            <thead>
              <tr>
                <th scope="col" className="p-2 text-center border bg-gray-100 w-1/6 text-sm md:text-base">
                  <div className="flex items-center justify-center gap-2">
                    Verb (English)
                  </div>
                </th>
                <th scope="col" className="p-2 text-center border bg-gray-100 w-1/4 text-sm md:text-base">
                  <div className="flex items-center justify-center gap-2">
                    Verb<br/>(Spanish)
                  </div>
                </th>
                <th scope="col" className="p-2 text-center border bg-gray-100 w-1/3 text-sm md:text-base">
                  <div className="flex items-center justify-center gap-2">
                    Simple Present Tense
                  </div>
                </th>
                <th scope="col" className="p-2 text-center border bg-gray-100 w-1/4 text-sm md:text-base">
                  <div className="flex items-center justify-center gap-2">
                    Simple Past Tense
                  </div>
                </th>
                <th scope="col" className="p-2 text-center border bg-gray-100 w-1/6 text-sm md:text-base">
                  <div className="flex items-center justify-center gap-2">
                    Contrast
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((verb, index) => (
                <IrregularVerbRow key={index} verb={verb} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
