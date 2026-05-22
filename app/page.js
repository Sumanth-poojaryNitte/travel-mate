import Navbar from "./components/Navbar";
import TripForm from "./components/TripForm";
import footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-black">
      
      <Navbar />

      <div className="max-w-3xl mx-auto p-6">

        <h1 className="text-4xl font-bold mt-10 text-blue-600">
          Travel Together, Save Together
        </h1>

        <p className="mt-4 text-gray-700 text-lg">
          Find people travelling to the same destination.
        </p>

        <TripForm />

      </div>
      <footer />

    </main>
  );
}