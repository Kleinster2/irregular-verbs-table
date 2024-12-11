import React from 'react';

export default function IrregularVerbRow({ verb }) {
  return (
    <>
      {/* Desktop view */}
      <tr className="hover:bg-gray-50 hidden md:table-row" role="row">
        <td className="p-2 border text-sm md:text-base" role="cell">
          {verb.english}
        </td>
        <td className="p-2 border whitespace-pre-line text-sm md:text-base" role="cell">
          {verb.spanish}
        </td>
        <td className="p-2 border font-mono whitespace-pre-line text-sm md:text-base" role="cell">
          {verb.present}
        </td>
        <td className="p-2 border font-mono whitespace-pre-line text-sm md:text-base" role="cell">
          {verb.past}
        </td>
      </tr>

      {/* Mobile view */}
      <div className="md:hidden hover:bg-gray-50 block mb-4 border rounded-lg overflow-hidden" role="row" aria-label={`Irregular verb: ${verb.english}`}>
        <div className="block p-3 border-b" role="cell">
          <div className="font-semibold mb-1 text-sm" id={`english-label-${verb.english}`}>English</div>
          <div className="text-base" aria-labelledby={`english-label-${verb.english}`}>{verb.english}</div>
        </div>
        <div className="block p-3 border-b" role="cell">
          <div className="font-semibold mb-1 text-sm" id={`spanish-label-${verb.english}`}>Spanish</div>
          <div className="text-base whitespace-pre-line" aria-labelledby={`spanish-label-${verb.english}`}>{verb.spanish}</div>
        </div>
        <div className="block p-3 border-b" role="cell">
          <div className="font-semibold mb-1 text-sm" id={`present-label-${verb.english}`}>Present Tense</div>
          <div className="text-base font-mono whitespace-pre-line" aria-labelledby={`present-label-${verb.english}`}>{verb.present}</div>
        </div>
        <div className="block p-3" role="cell">
          <div className="font-semibold mb-1 text-sm" id={`past-label-${verb.english}`}>Past Tense</div>
          <div className="text-base font-mono whitespace-pre-line" aria-labelledby={`past-label-${verb.english}`}>{verb.past}</div>
        </div>
      </div>
    </>
  );
}
