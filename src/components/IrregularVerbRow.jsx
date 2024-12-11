
import React from 'react';

export function DesktopVerbRow({ verb }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-pre-line">{verb.english}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.spanish}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.present}</td>
      <td className="px-6 py-4 whitespace-pre-line">{verb.past}</td>
    </tr>
  );
}

export function MobileVerbCard({ verb }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">English</h3>
          <p>{verb.english}</p>
        </div>
        <div>
          <h3 className="font-semibold">Spanish</h3>
          <p className="whitespace-pre-line">{verb.spanish}</p>
        </div>
        <div>
          <h3 className="font-semibold">Present</h3>
          <p className="whitespace-pre-line">{verb.present}</p>
        </div>
        <div>
          <h3 className="font-semibold">Past</h3>
          <p className="whitespace-pre-line">{verb.past}</p>
        </div>
      </div>
    </div>
  );
}
