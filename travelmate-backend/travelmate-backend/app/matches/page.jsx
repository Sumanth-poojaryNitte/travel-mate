"use client"
import Navbar from "../components/Navbar";
import MatchCard from "../components/MatchCard";
import Footer from "../components/Footer";
import { useSearchParams} from "next/navigation";
import { useState,useEffect,Suspense } from "react";
import ServerWakeup from "../components/ServerWakeup";



  
  function MatchesContent() {
  const [Search,setSearch]=useState("");
  const [users, setUsers]=useState([]);
  const SearchParams = useSearchParams();
  const queryFrom =SearchParams.get("from")?.toLowerCase() || "";
  const queryTo = SearchParams.get("to")?.toLowerCase() || "";


  useEffect(() => {
  fetch("https://travelmate-backend-t0hu.onrender.com/api/trips/all")
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => console.error("Error:", error));
}, []);
  
 

  const filteredUsers = users.filter((user) => {
  const TextInput = Search.toLowerCase();

  const matchsSearchInput =
    (user.fromLocation||"").toLowerCase().includes(TextInput) ||
    (user.toLocation||"").toLowerCase().includes(TextInput) ||
    (user.name||"").toLowerCase().includes(TextInput);

    const matchesQueryFrom = queryFrom ? user.fromLocation?.toLowerCase().includes(queryFrom):true;
  const matchesQueryTo = queryTo ? user.toLocation?.toLowerCase().includes(queryTo):true;
  return matchsSearchInput && matchesQueryFrom && matchesQueryTo;
  });


  return (
    <div className="wrapper-div">
     <Navbar />
    <main className="min-h-screen bg-gray-100 text-black">
      

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
              from={user.fromLocation}
              to={user.toLocation}
              date={user.date}
              mobile={user.mobile}
              email={user.mail}
              image={user.image || null}
            />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center py-8"> 
            no matches found
          </p>
            
          )}
        </div>
      </div>
      
    </main>
    <Footer />
    </div>
  );
  }
  export default function Matches() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-100 text-black flex items-center justify-center">
        <p className="text-xl font-semibold">Loading matches...</p>
      </div>
    }>
      <ServerWakeup>
      <MatchesContent />
      </ServerWakeup>
    </Suspense>
  );
}
