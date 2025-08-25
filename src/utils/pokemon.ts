import { Pokemon } from "@/types/pokemon"

export const getPokemonsByIDs = async (ids: number[]): Promise<Pokemon[]> => {
    const pokemons = await Promise.all(
        ids.map(async (id: number) => {
            const pokemonJSON = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            return await pokemonJSON.json()
        })
    )
    return pokemons
}