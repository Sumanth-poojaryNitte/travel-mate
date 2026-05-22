"use client"
import Navbar from "../components/Navbar";
import MatchCard from "../components/MatchCard";
import Footer from "../components/Footer";
import { useSearchParams} from "next/navigation";
import { useState } from "react";



  const users = [
    {
    id:1,
      name: "Rahul",
      from: "Bangalore",
      to: "Mysore",
      date:"22-05-2026",
      mobile: "1234543456",
      email: "rahum555@gmail.com",
      image:
     "images/WhatsApp Image 2026-05-21 at 2.11.23 PM (2).jpeg"
    },
    {
      id:2,
      name: "Anjali",
      from: "Bangalore",
      to: "Mysore",
      date:"24-05-2026",
      mobile: "8904165423",
      email: "anjali555@gmail.com",
      image:"images/WhatsApp Image 2026-05-21 at 2.11.22 PM (1).jpeg"
    },
    {
      id:3,
      name: "sam",
      from: "Nitte",
      to: "Karkala",
      date:"25-05-2026",
      mobile: "9876543765",
      email: "sam555@gmail.com",
      image:"images/WhatsApp Image 2026-05-21 at 2.11.23 PM (1).jpeg"
    },
    {
      id:4,
      name: "sush",
      from: "Nitte",
      to: "Karkala",
      date:"25-05-2026",
      mobile: "1234523455",
      email: "sush555@gmail.com",
      image:"images/WhatsApp Image 2026-05-21 at 2.11.22 PM.jpeg"
      
      
    },
    {
      id:5,
      name: "vaish",
      from: "Mysoor",
      to: "Nitte",
      date:"29-05-2026",
      mobile: "890416743",
      email: "vaish555@gmail.com",
      image:"images/WhatsApp Image 2026-05-21 at 2.11.23 PM.jpeg"
    },
    {
      id:6,
      name: "sumanth",
      from: "Mysore",
      to: "Nitte",
      date:"30-05-2026",
      mobile: "8904162988",
      email: "sumanth555@gmail.com",
      image:"images/WhatsApp Image 2026-05-21 at 2.11.24 PM.jpeg"
    },
    
  ];
  export default function Matches() {
  const [Search,setSearch]=useState("");
  const SearchParams = useSearchParams();
  const queryFrom =SearchParams.get("from")?.toLowerCase() || "";
  const queryTo = SearchParams.get("to")?.toLowerCase() || "";
  
 

  const filteredUsers = users.filter((user) => {
  const TextInput = Search.toLowerCase();

  const matchsSearchInput =
    user.from.toLowerCase().includes(TextInput) ||
    user.to.toLowerCase().includes(TextInput) ||
    user.name.toLowerCase().includes(TextInput);

    const matchesQueryFrom = queryFrom ? user.from.toLowerCase().includes(queryFrom):true;
  const matchesQueryTo = queryTo ? user.to.toLowerCase().includes(queryTo):true;
  return matchsSearchInput && matchesQueryFrom && matchesQueryTo;
  });


  return (
     
    <main className="min-h-screen bg-gray-100 text-black">
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Available Matches
        </h1>
        <input type="text"
  placeholder="Search place or name..."
  value={Search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-2 w-full mb-4 rounded text-black border-gray-300 focus:outline-blue-500"
/>
<div className="grid gap-4">

          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              
        

        
            <MatchCard
              key={user.id}
              name={user.name}
              from={user.from}
              to={user.to}
              date={user.date}
              mobile={user.mobile}
              email={user.email}
              image={user.image}
            />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center py-8"> 
            no matches found
          </p>
            
          )}
        </div>
      </div>
      <Footer/>
    </main>
  );
  }
