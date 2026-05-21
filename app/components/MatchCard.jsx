"use client";

import { useState } from "react";

export default function MatchCard({
  image,
  name,
  from,
  to,
  date,
  mobile,
  email,
}) {

  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-white text-black border p-6 rounded-xl shadow-md">
      <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded full object-cover mb-4"
      />

      <h2 className="text-2xl font-bold text-blue-600">
        {name}
      </h2>

      <p className="mt-3">
        <span className="font-bold">From:</span> {from}
      </p>

      <p>
        <span className="font-bold">To:</span> {to}
      </p>
      <p>
        <span className="font-bold">Date of Going:</span> {date}
      </p>

      <button
        onClick={() => setShowContact(!showContact)}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
      >
        Connect
      </button>

      {showContact && (
        <div className="mt-4 bg-gray-100 p-3 rounded">

          <p>
            <span className="font-bold">Mobile:</span> {mobile}
          </p>

          <p>
            <span className="font-bold">Email:</span> {email}
          </p>

        </div>
      )}

    </div>
  );
}