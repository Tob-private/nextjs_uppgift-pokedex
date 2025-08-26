'use client'

import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "@/types/pokemon";
import { Spinner } from "./ui/shadcn-io/spinner";
import useSWR from "swr";
import { fetcher } from "@/helpers/api";

export default function RandomPokemons() {
    const [randomIDs, setRandomIDs] = useState<number[]>([]);

    // Generate 4 random IDs once
    useEffect(() => {
        const ids = Array.from({ length: 4 }, () => Math.ceil(Math.random() * 1000));
        setRandomIDs(ids);
    }, []);

    // Always call SWR, even if randomIDs is empty
    const { data: pokemons, error, isLoading } = useSWR<Pokemon[]>(
        randomIDs.length ? ['random-pokemons', ...randomIDs] : null,
        () =>
            Promise.all(
                randomIDs.map(id => fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`))
            )
    );

    return (
        <article className="bg-gradient-to-br [background-image:linear-gradient(100deg,_#C97FE4,_#AECDF6)]">
            <h2 className="text-center text-5xl mb-8">Featured Pokémon</h2>
            <section className="flex justify-center gap-8">
                {isLoading ? (
                    <Spinner variant="bars" />
                ) : error ? (
                    <p>Error loading Pokémon.</p>
                ) : (
                    pokemons?.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                )}
            </section>
        </article>
    );
}
