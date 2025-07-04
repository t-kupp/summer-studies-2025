interface NuzlockeRun {
  id: number;
  gameName: string;
  startDate: Date;
  pokemon: Pokemon[];
}

interface Pokemon {
  id: number;
  name: string;
  nickname?: string;
  caughtLocation: string;
  caughtTime: Date;
  status: "alive" | "fainted";
  types: PokemonType[];
}

type PokemonType =
  | "Normal"
  | "Fighting"
  | "Flying"
  | "Poison"
  | "Ground"
  | "Rock"
  | "Bug"
  | "Ghost"
  | "Steel"
  | "Fire"
  | "Water"
  | "Grass"
  | "Electric"
  | "Psychic"
  | "Ice"
  | "Dragon"
  | "Dark"
  | "Fairy";
