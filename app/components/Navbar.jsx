export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Travel Mate</h1>

      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/matches">Matches</a>
      </div>
    </nav>
  );
}