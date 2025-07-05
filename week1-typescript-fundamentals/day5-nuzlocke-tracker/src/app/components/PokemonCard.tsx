interface PokemonCardProps {
  pokemon: Pokemon;
  onStatusChange: (pokemonId: number, status: Pokemon["status"]) => void;
}

export default function PokemonCard({
  pokemon,
  onStatusChange,
}: PokemonCardProps) {
  const newStatus = pokemon.status === "alive" ? "fainted" : "alive";
  const buttonText = pokemon.status === "alive" ? "Alive" : "Fainted";
  return (
    <div>
      <p>{pokemon.species}</p>
      <button
        className="border px-2"
        onClick={() => onStatusChange(pokemon.id, newStatus)}
      >
        {buttonText}
      </button>
    </div>
  );
}
