import { useState } from "react";

interface GameDisplayProps {
  run: NuzlockeRun | null;
  catchPokemon: (pokemon: Pokemon) => void;
  deleteRun: () => void;
  updatePokemonStatus: (pokemonId: number, status: Pokemon["status"]) => void;
}

export default function GameDisplay({
  run,
  catchPokemon,
  deleteRun,
  updatePokemonStatus,
}: GameDisplayProps) {
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
        {/* game name and delete button  */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{run.gameName}</h1>
          <button onClick={deleteRun} className="border px-2">
            Delete run
          </button>
        </div>
        {/* show available pokemon pokemon  */}
        <div className="grid grid-cols-2 gap-4">
          {/* alive */}
          <div className="border p-4">
            {run.pokemon
              .filter((pokemon) => pokemon.status === "alive")
              .map((pokemon) => (
                <div key={pokemon.id}>
                  <p>{pokemon.species}</p>
                  <button
                    className="border px-2"
                    onClick={() => updatePokemonStatus(pokemon.id, "fainted")}
                  >
                    Fainted
                  </button>
                </div>
              ))}
          </div>
          {/* fainted */}
          <div className="border p-4">
            {run.pokemon
              .filter((pokemon) => pokemon.status === "fainted")
              .map((pokemon) => (
                <div key={pokemon.id}>
                  <p>{pokemon.species}</p>
                  <button
                    className="border px-2"
                    onClick={() => updatePokemonStatus(pokemon.id, "alive")}
                  >
                    Alive
                  </button>
                </div>
              ))}
          </div>
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
