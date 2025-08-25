'use client'
import { getPokemonsByIDs } from "@/utils/pokemon";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "@/types/pokemon";
import { Spinner } from "./ui/shadcn-io/spinner";

export default function RandomPokemons() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const randomIDs: number[] = []
    for (let i = 0; i < 4; i++) {
        randomIDs.push(Math.ceil(Math.random() * 1300))
    }
    useEffect(() => {
        const randomIDs: number[] = [];

        while (randomIDs.length < 4) {
            const randomNumber: number = Math.ceil(Math.random() * 1000)
            if (!randomIDs.includes(randomNumber)) {
                randomIDs.push(randomNumber);
            }
        }

        getPokemonsByIDs(randomIDs).then(async (data) => {
            setPokemons(data);
            console.log("pokemons set");
            
        });
    }, []);

    return (
        <article>
            <h2 className="text-center text-5xl mb-8">Featured Pokémon</h2>
            <section className="flex justify-center gap-8">
                {/* Cards with random pokemons */}
                {pokemons.length !== 0 ? pokemons.map((pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />) : <Spinner variant="bars"/>}
            </section>
        </article>
    );
}