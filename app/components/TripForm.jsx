"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TripForm() {

  const router = useRouter();

 const [name, setName] = useState("");
const [mobile, setMobile] = useState("");
const [mail, setMail] = useState("");
const [fromLocation, setFromLocation] = useState("");
const [toLocation, setToLocation] = useState("");
const [date, setDate] = useState("");
const [image, setImage] = useState(null);

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !name ||
    !mobile ||
    !mail ||
    !fromLocation ||
    !toLocation ||
    !date ||
    !image
  ) {
    alert("Please fill all fields and select an image");
    return;
  }

  const formData = new FormData();

  formData.append("name", name);
  formData.append("mobile", mobile);
  formData.append("mail", mail);
  formData.append("fromLocation", fromLocation);
  formData.append("toLocation", toLocation);
  formData.append("date", date);
  formData.append("image", image);

  const response = await fetch(
    "https://travelmate-backend-t0hu.onrender.com/api/trips/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.ok) {
    alert("Trip added successfully!");

    setName("");
    setMobile("");
    setMail("");
    setFromLocation("");
    setToLocation("");
    setDate("");
    setImage(null);

    router.push("/matches");
  } else {
    alert("Failed to add trip");
  }
};

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 text-black">

      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Find Travel Partners
      </h2>

      <form
        onSubmit={handleSubmit}
        
        className="flex flex-col gap-4">
      

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="From Location"
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="To Location"
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
           type="file"
           accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 rounded"
        />
        
       
        <button
          type="submit"
           className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Trip
        </button>

      </form>

    </div>
  );
}