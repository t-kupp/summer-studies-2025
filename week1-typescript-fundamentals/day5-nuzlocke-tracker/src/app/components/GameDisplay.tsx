import { useState } from "react";
import { NuzlockeRun, Pokemon } from "../../types";
import PokemonCard from "./PokemonCard";

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

  if (!run) return null;

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

  const alivePokemon = run.pokemon.filter(
    (pokemon: Pokemon) => pokemon.status === "alive",
  );

  const faintedPokemon = run.pokemon.filter(
    (pokemon: Pokemon) => pokemon.status === "fainted",
  );

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
        <h1 className="font-bold">Alive</h1>
        <h1 className="font-bold">Fainted</h1>
        {/* alive  */}
        <div className="flex flex-wrap gap-4 border p-4">
          {alivePokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onStatusChange={updatePokemonStatus}
            />
          ))}
        </div>
        {/* fainted  */}
        <div className="flex flex-wrap gap-4 border p-4">
          {faintedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onStatusChange={updatePokemonStatus}
            />
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
