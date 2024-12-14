
import React from 'react';
import IrregularVerbRow from './IrregularVerbRow';

const data = [
  {
    english: "be",
    spanish: "ser/estar",
    portuguese: "ser/estar",
    present: "am/is/are\n/æm/ɪz/ɑr/",
    past: "was/were\n/wʌz/wɜr/"
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
