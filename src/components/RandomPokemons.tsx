
import PokemonCard from "./PokemonCard";
import { Pokemon } from "@/types/pokemon";
import { getPokemonByIDs } from "@/helpers/api";

export default async function RandomPokemons() {
    const ids = Array.from({ length: 4 }, () => Math.ceil(Math.random() * 1000));

    const pokemons = await getPokemonByIDs(ids)

    return (
        <article className="bg-gradient-to-br [background-image:linear-gradient(100deg,_#C97FE4,_#AECDF6)] p-14">
            <h2 className="text-center text-5xl mb-8">Featured Pokémon</h2>
            <section className="flex justify-center gap-8">
                {pokemons?.map((pokemon: Pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </section>
        </article>
    );
}
