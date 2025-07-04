// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
