'use client'
import { TypeType } from "@/data/types-types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { fetchPokemonAction } from "@/app/actions";
import { Pokemon, StatElement } from "@/types/pokemon";
import { useState } from "react";
import PokemonStat from "../PokemonStat";
import Image from "next/image";

export default function PokemonList({ type }: { type: TypeType }) {
    const [expandedPokemon, setExpandedPokemon] = useState<Pokemon>()
    const [pokemonSprite, setPokemonSprite] = useState<string>()
    const typePokemons = type?.pokemon.map((pokemon) => pokemon.pokemon)

    const handleClick = async (id: string) => {
        const pokemon = await fetchPokemonAction(id)
        setExpandedPokemon(pokemon[0])
        if (expandedPokemon?.sprites.front_default) {
            setPokemonSprite(expandedPokemon?.sprites.front_default)
        } else {
            setPokemonSprite("/img-notfound.png")
        }
    }

    return (
        <Accordion type="single" collapsible className="w-full flex flex-col place-items-center">
            {typePokemons?.map(({ name, url }: { name: string, url: string }) => {
                return (
                    <AccordionItem value={name} key={name} className="w-1/2">
                        <AccordionTrigger className="capitalize" onClick={() => handleClick(name)}>{name}</AccordionTrigger>
                        <AccordionContent>
                            {
                                expandedPokemon?.stats.map((stat: StatElement) => <PokemonStat stat={stat} />)
                            }
                        </AccordionContent>
                    </AccordionItem>
                )
            })}

        </Accordion>
    );
}