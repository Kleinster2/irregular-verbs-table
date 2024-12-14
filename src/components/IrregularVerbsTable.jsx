
import React from 'react';
import IrregularVerbRow from './IrregularVerbRow';

const data = [
  {
    english: "be (1st person)",
    spanish: "ser/estar",
    portuguese: "ser/estar",
    present: "I am\n/aɪ æm/",
    past: "I was\n/aɪ wʌz/"
  },
  {
    english: "be (3rd person)",
    spanish: "ser/estar",
    portuguese: "ser/estar",
    present: "he is, she is, it is\n/hɪz ɪz, ʃiː ɪz, ɪt ɪz/",
    past: "he was, she was, it was\n/hɪz wʌz, ʃiː wʌz, ɪt wʌz/"
  },
  {
    english: "be (plural)",
    spanish: "ser/estar",
    portuguese: "ser/estar",
    present: "we are, you are, they are\n/wiː ɑr, juː ɑr, ðeɪ ɑr/",
    past: "we were, you were, they were\n/wiː wɜr, juː wɜr, ðeɪ wɜr/"
  },
  {
    english: "begin",
    spanish: "comenzar/empezar",
    portuguese: "começar",
    present: "begin\n/bɪˈɡɪn/",
    past: "began\n/bɪˈɡæn/"
  },
  {
    english: "break",
    spanish: "romper",
    portuguese: "quebrar",
    present: "break\n/breɪk/",
    past: "broke\n/broʊk/"
  },
  {
    english: "bring",
    spanish: "traer",
    portuguese: "trazer",
    present: "bring\n/brɪŋ/",
    past: "brought\n/brɔːt/"
  },
  {
    english: "build",
    spanish: "construir",
    portuguese: "construir",
    present: "build\n/bɪld/",
    past: "built\n/bɪlt/"
  },
  {
    english: "buy",
    spanish: "comprar",
    portuguese: "comprar",
    present: "buy\n/baɪ/",
    past: "bought\n/bɔːt/"
  },
  {
    english: "catch",
    spanish: "atrapar",
    portuguese: "pegar",
    present: "catch\n/kætʃ/",
    past: "caught\n/kɔːt/"
  },
  {
    english: "come",
    spanish: "venir",
    portuguese: "vir",
    present: "come\n/kʌm/",
    past: "came\n/keɪm/"
  },
  {
    english: "do",
    spanish: "hacer",
    portuguese: "fazer",
    present: "do\n/duː/",
    past: "did\n/dɪd/"
  },
  {
    english: "drink",
    spanish: "beber",
    portuguese: "beber",
    present: "drink\n/drɪŋk/",
    past: "drank\n/dræŋk/"
  },
  {
    english: "eat",
    spanish: "comer",
    portuguese: "comer",
    present: "eat\n/iːt/",
    past: "ate\n/eɪt/"
  },
  {
    english: "fall",
    spanish: "caer",
    portuguese: "cair",
    present: "fall\n/fɔːl/",
    past: "fell\n/fɛl/"
  },
  {
    english: "feel",
    spanish: "sentir",
    portuguese: "sentir",
    present: "feel\n/fiːl/",
    past: "felt\n/fɛlt/"
  },
  {
    english: "find",
    spanish: "encontrar",
    portuguese: "encontrar",
    present: "find\n/faɪnd/",
    past: "found\n/faʊnd/"
  },
  {
    english: "get",
    spanish: "obtener",
    portuguese: "obter",
    present: "get\n/ɡɛt/",
    past: "got\n/ɡɒt/"
  },
  {
    english: "give",
    spanish: "dar",
    portuguese: "dar",
    present: "give\n/ɡɪv/",
    past: "gave\n/ɡeɪv/"
  },
  {
    english: "go",
    spanish: "ir",
    portuguese: "ir",
    present: "go\n/ɡoʊ/",
    past: "went\n/wɛnt/"
  },
  {
    english: "have",
    spanish: "tener",
    portuguese: "ter",
    present: "have\n/hæv/",
    past: "had\n/hæd/"
  },
  {
    english: "hear",
    spanish: "oír",
    portuguese: "ouvir",
    present: "hear\n/hɪər/",
    past: "heard\n/hɜrd/"
  },
  {
    english: "hold",
    spanish: "sostener",
    portuguese: "segurar",
    present: "hold\n/hoʊld/",
    past: "held\n/hɛld/"
  },
  {
    english: "keep",
    spanish: "mantener",
    portuguese: "manter",
    present: "keep\n/kiːp/",
    past: "kept\n/kɛpt/"
  },
  {
    english: "know",
    spanish: "saber",
    portuguese: "saber",
    present: "know\n/noʊ/",
    past: "knew\n/nuː/"
  },
  {
    english: "leave",
    spanish: "salir/dejar",
    portuguese: "sair/deixar",
    present: "leave\n/liːv/",
    past: "left\n/lɛft/"
  },
  {
    english: "lose",
    spanish: "perder",
    portuguese: "perder",
    present: "lose\n/luːz/",
    past: "lost\n/lɔst/"
  },
  {
    english: "make",
    spanish: "hacer",
    portuguese: "fazer",
    present: "make\n/meɪk/",
    past: "made\n/meɪd/"
  },
  {
    english: "read",
    spanish: "leer",
    portuguese: "ler",
    present: "read\n/riːd/",
    past: "read\n/rɛd/"
  },
  {
    english: "run",
    spanish: "correr",
    portuguese: "correr",
    present: "run\n/rʌn/",
    past: "ran\n/ræn/"
  },
  {
    english: "say",
    spanish: "decir",
    portuguese: "dizer",
    present: "say\n/seɪ/",
    past: "said\n/sɛd/"
  },
  {
    english: "see",
    spanish: "ver",
    portuguese: "ver/enxergar",
    present: "see\n/siː/",
    past: "saw\n/sɔː/"
  },
  {
    english: "sell",
    spanish: "vender",
    portuguese: "vender",
    present: "sell\n/sɛl/",
    past: "sold\n/soʊld/"
  },
  {
    english: "send",
    spanish: "enviar/mandar",
    portuguese: "enviar/mandar",
    present: "send\n/sɛnd/",
    past: "sent\n/sɛnt/"
  },
  {
    english: "show",
    spanish: "mostrar",
    portuguese: "mostrar",
    present: "show\n/ʃoʊ/",
    past: "showed\n/ʃoʊd/"
  },
  {
    english: "sing",
    spanish: "cantar",
    portuguese: "cantar",
    present: "sing\n/sɪŋ/",
    past: "sang\n/sæŋ/"
  },
  {
    english: "sit",
    spanish: "sentarse",
    portuguese: "sentar-se",
    present: "sit\n/sɪt/",
    past: "sat\n/sæt/"
  },
  {
    english: "sleep",
    spanish: "dormir",
    portuguese: "dormir",
    present: "sleep\n/sliːp/",
    past: "slept\n/slɛpt/"
  },
  {
    english: "speak",
    spanish: "hablar",
    portuguese: "falar",
    present: "speak\n/spiːk/",
    past: "spoke\n/spoʊk/"
  },
  {
    english: "stand",
    spanish: "estar de pie",
    portuguese: "ficar de pé",
    present: "stand\n/stænd/",
    past: "stood\n/stʊd/"
  },
  {
    english: "take",
    spanish: "tomar",
    portuguese: "pegar/levar",
    present: "take\n/teɪk/",
    past: "took\n/tʊk/"
  },
  {
    english: "teach",
    spanish: "enseñar",
    portuguese: "ensinar",
    present: "teach\n/tiːtʃ/",
    past: "taught\n/tɔːt/"
  },
  {
    english: "tell",
    spanish: "decir",
    portuguese: "dizer/contar",
    present: "tell\n/tɛl/",
    past: "told\n/toʊld/"
  },
  {
    english: "think",
    spanish: "pensar",
    portuguese: "pensar",
    present: "think\n/θɪŋk/",
    past: "thought\n/θɔːt/"
  },
  {
    english: "understand",
    spanish: "entender",
    portuguese: "entender",
    present: "understand\n/ˌʌndərˈstænd/",
    past: "understood\n/ˌʌndərˈstʊd/"
  },
  {
    english: "wake up",
    spanish: "despertar",
    portuguese: "acordar",
    present: "wake\n/weɪk/",
    past: "woke\n/woʊk/"
  },
  {
    english: "wear",
    spanish: "llevar puesto",
    portuguese: "vestir",
    present: "wear\n/wɛr/",
    past: "wore\n/wɔr/"
  },
  {
    english: "win",
    spanish: "ganar",
    portuguese: "ganhar/vencer",
    present: "win\n/wɪn/",
    past: "won\n/wʌn/"
  },
  {
    english: "write",
    spanish: "escribir",
    portuguese: "escrever",
    present: "write\n/raɪt/",
    past: "wrote\n/roʊt/"
  }
];

export default function IrregularVerbsTable() {
  const [language, setLanguage] = React.useState('spanish');
  
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
          <div className="flex gap-4">
            <button
              onClick={() => setLanguage(language === 'spanish' ? 'portuguese' : 'spanish')}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              {language === 'spanish' ? 'Switch to Portuguese' : 'Switch to Spanish'}
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Print Table
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto print-section">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="p-2 text-center border bg-gray-100 w-1/6">
                  Verb (English)
                </th>
                <th className="p-2 text-center border bg-gray-100 w-1/5">
                  Verb<br/>({language === 'spanish' ? 'Spanish' : 'Portuguese'})
                </th>
                <th className="p-2 text-center border bg-gray-100 w-1/4">
                  Simple Present Tense
                </th>
                <th className="p-2 text-center border bg-gray-100 w-1/5">
                  Simple Past Tense
                </th>
                <th className="p-2 text-center border bg-gray-100 w-1/6">
                  Contrast
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((verb, index) => (
                <IrregularVerbRow key={index} verb={verb} language={language} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
