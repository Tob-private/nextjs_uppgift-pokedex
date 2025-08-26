import { Pokemon } from "@/types/pokemon";



export const getPokemonsByIDs = async (ids: (number | string)[]): Promise<Pokemon[]> => {
    const pokemons: Pokemon[] = [];

    for (const id of ids) {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!res.ok) {
                console.warn(`Pokemon with ID "${id}" not found`);
                continue;
            }
            const data = await res.json();
            pokemons.push(data as Pokemon);
        } catch (error) {
            console.error(`Error fetching Pokémon with ID "${id}":`, error);
        }
    }
/* 
    // Optional delay
    await new Promise((resolve) => setTimeout(resolve, 2000)); */

    return pokemons;
};