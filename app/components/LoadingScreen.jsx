export default function LoadingScreen({ progress, connected }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 px-6">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          {connected
            ? "Server connected successfully!"
            : "Connecting to server..."}
        </h1>

        <p className="text-gray-500 mb-6">
          {connected
            ? "Loading Travel Mate..."
            : "Please wait while the backend wakes up."}
        </p>

        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-blue-600 h-4 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="mt-4 text-gray-600">
          {connected
            ? "100%"
            : `${progress}%`}
        </p>

      </div>

    </div>
  );
}