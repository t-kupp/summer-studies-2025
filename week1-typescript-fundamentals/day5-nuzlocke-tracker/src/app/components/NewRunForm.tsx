"use client";

import { useState } from "react";

interface NewRunFormProps {
  initializeRun: (gameName: string) => void;
}

export default function NewRunForm({ initializeRun }: NewRunFormProps) {
  const [gameName, setGameName] = useState("");
  const [error, setError] = useState("");

  function handleStartNewGame() {
    if (!gameName.trim()) {
      setError("Please enter a game name.");
      return;
    }
    try {
      initializeRun(gameName.trim());
      setError("");
      setGameName("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Start a new game!</h1>
      {error && <p>{error}</p>}
      <div>
        <label htmlFor="gameName">Game name:</label>
        <input
          type="text"
          onChange={(e) => setGameName(e.target.value)}
          id="gameName"
          value={gameName}
          className="border px-1"
        />
      </div>
      <button className="border px-1" onClick={handleStartNewGame}>
        Start
      </button>
    </div>
  );
}
