"use client";

import GameDisplay from "./components/GameDisplay";
import NewRunForm from "./components/NewRunForm";
import useNuzlockeRun from "./hooks/useNuzlockeRun";

export default function Home() {
  const { run, initializeRun, catchPokemon, deleteRun, updatePokemonStatus } =
    useNuzlockeRun();

  return (
    <div className="mx-auto max-w-7xl p-4">
      <NewRunForm initializeRun={initializeRun} />
      <div className="w-full border-b py-4"></div>
      <GameDisplay
        run={run}
        catchPokemon={catchPokemon}
        deleteRun={deleteRun}
        updatePokemonStatus={updatePokemonStatus}
      />
    </div>
  );
}
