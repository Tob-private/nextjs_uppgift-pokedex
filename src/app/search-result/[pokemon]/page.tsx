import PokemonCard from "@/components/PokemonCard";
import { getPokemonByIDs } from "@/helpers/api";

export default async function SearchResult({ params }: { params: { pokemon: string } }) {
    const awaitedParams = await params
    const pokemon = await getPokemonByIDs([`${awaitedParams.pokemon}`])

    return (
        <article className="flex place-content-center w-full p-16">
            <PokemonCard pokemon={pokemon[0]}/>
        </article>
    );
}