
import React from 'react';

export default function IrregularVerbRow({ verb }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-pre-line">{verb.english}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.spanish}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.present}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.past}</td>
    </tr>
  );
}
