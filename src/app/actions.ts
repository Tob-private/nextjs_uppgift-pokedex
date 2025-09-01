'use server'

import { getPokemonByIDs, getTypeByID } from "@/helpers/api";

export async function fetchTypeAction(type: string) {
  return await getTypeByID(type);
}

export async function fetchPokemonAction(id: string) {
  return await getPokemonByIDs([id])
}
