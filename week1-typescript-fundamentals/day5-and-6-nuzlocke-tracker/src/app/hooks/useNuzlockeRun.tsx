import { useCallback } from "react";
import { isNuzlockeRun, NuzlockeRun, Pokemon } from "../../types";
import useLocalStorage from "./useLocalStorage";

export default function useNuzlockeRun() {
  const nuzlockeValidator = useCallback(
    (obj: unknown): obj is NuzlockeRun | null => obj === null || isNuzlockeRun(obj),
    []
  );
  const [run, setRun] = useLocalStorage<NuzlockeRun | null>(
    "nuzlocke-run",
    null,
    nuzlockeValidator
  );
  // initialize run
  function initializeRun(gameName: string) {
    const newId = Date.now();
    const newRun = { id: newId, gameName, startDate: new Date(), pokemon: [] };
    setRun(newRun);
    console.log("New run created:", newRun);
  }

  // catch pokemon
  function catchPokemon(pokemon: Pokemon) {
    if (!run) throw new Error("Run not yet initialized.");

    if (
      run.pokemon.some((existingPokemon: Pokemon) => existingPokemon.species === pokemon.species)
    ) {
      // check for duplicate pokemon
      throw new Error("This Pokemon species has already been caught, no duplicates allowed.");
    }

    // check for duplicate location
    if (
      run.pokemon.some((existingPokemon: Pokemon) => existingPokemon.location === pokemon.location)
    ) {
      throw new Error("A pokemon on this location has already been caught.");
    }
    // add new pokemon to existing pokemon
    setRun({ ...run, pokemon: [...run.pokemon, pokemon] });
  }

  // update status
  function updatePokemonStatus(pokemonId: number, status: Pokemon["status"]) {
    if (!run) throw new Error("Run not yet initialized.");

    const pokemon = run.pokemon.find((pokemon: Pokemon) => pokemon.id === pokemonId);
    if (!pokemon) throw new Error("Pokemon not found.");

    const updatedPokemon = run.pokemon.map((existingPokemon: Pokemon) =>
      existingPokemon.id === pokemon.id ? { ...existingPokemon, status } : existingPokemon
    );

    setRun({ ...run, pokemon: updatedPokemon });
  }

  // update nickname
  function updatePokemonNickname(pokemonId: number, nickname: string) {
    if (!run) throw new Error("Run not yet initialized.");

    const pokemon = run.pokemon.find((pokemon: Pokemon) => pokemon.id === pokemonId);
    if (!pokemon) throw new Error("Pokemon not found.");

    const updatedPokemon = run.pokemon.map((existingPokemon: Pokemon) =>
      existingPokemon.id === pokemon.id ? { ...existingPokemon, nickname } : existingPokemon
    );

    setRun({ ...run, pokemon: updatedPokemon });
  }

  // delete run
  function deleteRun() {
    setRun(null);
  }
  return {
    run,
    initializeRun,
    catchPokemon,
    updatePokemonStatus,
    updatePokemonNickname,
    deleteRun,
  };
}
