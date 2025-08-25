'use client'
import { getPokemonsByIDs } from "@/utils/pokemon";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "@/types/pokemon";

export default function RandomPokemons() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const randomIDs: number[] = []
    for (let i = 0; i < 4; i++) {
        randomIDs.push(Math.ceil(Math.random() * 1300))
    }
    useEffect(() => {
        const randomIDs: number[] = [];
        for (let i = 0; i < 4; i++) {
            randomIDs.push(Math.ceil(Math.random() * 1000));
        }

        getPokemonsByIDs(randomIDs).then((data) => {
            setPokemons(data);
        });
    }, []);

    return (
        <article>
            <h2 className="text-center text-5xl mb-8">Featured Pokémon</h2>
            <section className="flex justify-center gap-8">
                {/* Cards with random pokemons */}
                {pokemons.map((pokemon: Pokemon) => {
                    return <PokemonCard key={pokemon.id} pokemon={pokemon} />
                })}
            </section>
        </article>
    );
}