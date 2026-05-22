"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TripForm() {

  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!from.trim() || !to.trim()) {
  alert("Please fill all fields");
  return;
}

if (to.length !== 10) {
  alert("Mobile number must be 10 digits");
  return;
}

  router.push(`/matches?from=${from}&to=${to}`);
};

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 text-black">

      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Find Travel Partners
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          placeholder="NAME"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="tel"
          placeholder="MOBILE NUMBER"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border p-2 rounded"
        />
       
        <button
          type="submit"
           className="bg-blue-600 text-white p-2 rounded"
        >
          Search
        </button>

      </form>

    </div>
  );
}