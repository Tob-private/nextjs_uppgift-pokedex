import { Pokemon } from "@/types/pokemon"

// Only use this in client components.
export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args)
  if (!res.ok) {
    throw new Error(`An error occurred: ${res.status} ${res.statusText}`)
  }
  return res.json()
}

export const getPokemonByIDs = async (ids: number[] | string[]): Promise<Pokemon[]> => {
  const pokemons = await Promise.all(
    ids.map(id => fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`))
  )
  return pokemons as Pokemon[]
}
