interface PokemonCardProps {
  pokemon: Pokemon;
  onStatusChange: (pokemonId: number, status: Pokemon["status"]) => void;
}

export default function PokemonCard({
  pokemon,
  onStatusChange,
}: PokemonCardProps) {
  const newStatus = pokemon.status === "alive" ? "fainted" : "alive";
  const buttonText =
    pokemon.status === "alive" ? "Mark as fainted" : "Mark as alive";

  return (
    <div className="max-w-32 border p-2">
      <div className="flex justify-between">
        <p>{pokemon.species}</p>
      </div>
      <button
        className="border px-2 text-xs"
        onClick={() => onStatusChange(pokemon.id, newStatus)}
      >
        {buttonText}
      </button>
    </div>
  );
}
