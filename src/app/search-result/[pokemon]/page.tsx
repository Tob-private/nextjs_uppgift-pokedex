import PokemonCard from "@/components/PokemonCard";
import { getPokemonByIDs } from "@/helpers/api";

export default async function SearchResult({ params }: { params: { pokemon: string } }) {
    const ids = Array.from({ length: 4 }, () => Math.ceil(Math.random() * 1000));

    const pokemon = await getPokemonByIDs([params.pokemon])

    return <PokemonCard pokemon={pokemon[0]} />;
}