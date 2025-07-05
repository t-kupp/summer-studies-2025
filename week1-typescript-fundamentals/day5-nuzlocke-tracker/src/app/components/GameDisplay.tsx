import { useState } from "react";

interface GameDisplayProps {
  run: NuzlockeRun | null;
  catchPokemon: (pokemon: Pokemon) => void;
}

export default function GameDisplay({ run, catchPokemon }: GameDisplayProps) {
  const [species, setSpecies] = useState("");
  const [nickname, setNickname] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  function handleAddPokemon() {
    if (!species.trim()) {
      setError("Species is required");
      return;
    }

    if (!location.trim()) {
      setError("Location is required");
      return;
    }

    try {
      const pokemon: Pokemon = {
        id: Date.now(),
        species,
        nickname,
        location,
        caughtTime: new Date(),
        status: "alive",
        types: ["Electric"],
      };

      catchPokemon(pokemon);
      setError("");
      setSpecies("");
      setLocation("");
      setNickname("");
    } catch (error) {
      setError((error as Error).message);
    }
  }

  if (run)
    return (
      <div className="flex flex-col gap-2">
        {/* game name  */}
        <h1 className="text-2xl font-bold">{run.gameName}</h1>
        {/* show available pokemon  */}
        <div className="mx-auto flex min-h-28 w-full flex-wrap gap-4 border p-4">
          {run.pokemon.map((pokemon) => (
            <div key={pokemon.id} className="">
              <p>{pokemon.species}</p>
              {pokemon.nickname ? <p>{pokemon.nickname}</p> : <br />}
              <p>{pokemon.location}</p>
            </div>
          ))}
        </div>
        {/* catch new pokemon form  */}
        <div>
          <div className="grid w-fit grid-cols-[auto_auto] gap-2">
            <label htmlFor="species">Species</label>
            <input
              className="border"
              type="text"
              id="species"
              onChange={(e) => setSpecies(e.target.value)}
              value={species}
            />
            <label htmlFor="nickname">Nickname</label>
            <input
              className="border"
              type="text"
              id="nickname"
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />
            <label htmlFor="location">Location</label>
            <input
              className="border"
              type="text"
              id="location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
          {error && <p>{error}</p>}
          <button className="border px-2" onClick={handleAddPokemon}>
            Add
          </button>
        </div>
      </div>
    );
}
