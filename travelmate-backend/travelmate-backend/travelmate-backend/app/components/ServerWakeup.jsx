"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ServerWakeup({ children }) {
  const [serverReady, setServerReady] = useState(false);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const wakeServer = async () => {
      try {
        const response = await fetch(
          "https://travelmate-backend-t0hu.onrender.com/api/trips/test"
        );

        if (response.ok) {
          setProgress(100);

          setTimeout(() => {
            setServerReady(true);
          }, 1000);

          return;
        }
      } catch (error) {
        console.log("Retrying...");
      }

      setProgress((prev) => (prev >= 90 ? 90 : prev + 10));

      setTimeout(wakeServer, 5000);
    };

    wakeServer();

  }, []);

  if (!serverReady) {
    return (
      <LoadingScreen
        progress={progress}
        connected={progress === 100}
      />
    );
  }

  return children;
}