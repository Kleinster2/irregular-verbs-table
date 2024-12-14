
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
