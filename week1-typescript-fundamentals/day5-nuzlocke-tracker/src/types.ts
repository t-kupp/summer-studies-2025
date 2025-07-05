interface NuzlockeRun {
  id: number;
  gameName: string;
  startDate: Date;
  pokemon: Pokemon[];
}

interface Pokemon {
  id: number;
  species: string;
  nickname?: string;
  location: string;
  caughtTime: Date;
  status: "alive" | "fainted";
}

// type PokemonType =
//   | "Normal"
//   | "Fighting"
//   | "Flying"
//   | "Poison"
//   | "Ground"
//   | "Rock"
//   | "Bug"
//   | "Ghost"
//   | "Steel"
//   | "Fire"
//   | "Water"
//   | "Grass"
//   | "Electric"
//   | "Psychic"
//   | "Ice"
//   | "Dragon"
//   | "Dark"
//   | "Fairy";

function isPokemon(obj: unknown): obj is Pokemon {
  // check if input is object and contains data
  if (typeof obj !== "object" || !obj) return false;

  // check for optional nickname type
  if ("nickname" in obj && typeof obj.nickname !== "string") return false;

  // check for required keys types
  return (
    "id" in obj &&
    typeof obj.id === "number" &&
    "species" in obj &&
    typeof obj.species === "string" &&
    "location" in obj &&
    typeof obj.location === "string" &&
    "caughtTime" in obj &&
    typeof obj.caughtTime === "string" &&
    "status" in obj &&
    (obj.status === "alive" || obj.status === "fainted")
  );
}

function isNuzlockeRun(obj: unknown): obj is NuzlockeRun {
  // check if input is object and contains data
  if (typeof obj !== "object" || !obj) return false;

  // check for pokemon array
  if (!("pokemon" in obj) || !Array.isArray(obj.pokemon)) return false;

  // check pokemon array contains valid pokemon
  const pokemon = obj.pokemon as Pokemon[];
  for (const element of pokemon) {
    if (!isPokemon(element)) return false;
  }

  // check for remaining types
  return (
    "id" in obj &&
    typeof obj.id === "number" &&
    "gameName" in obj &&
    typeof obj.gameName === "string" &&
    "startDate" in obj &&
    typeof obj.startDate === "string"
  );
}
