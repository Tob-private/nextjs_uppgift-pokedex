'use client'
import { TypeType } from "@/types/types-types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { type Pokemon, type StatElement } from "@/types/pokemon";
import { useState, useEffect, Suspense } from "react";
import PokemonStat from "../pokemon-stat";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PokemonList({ type, pokemon }: { type: TypeType, pokemon: Pokemon | undefined }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [expandedPokemon, setExpandedPokemon] = useState<Pokemon>()
    const [previousPokemon, setPreviousPokemon] = useState<Pokemon>() // eslint-disable-line

    const typePokemons = type?.pokemon.map((pokemon) => pokemon.pokemon)

    useEffect(() => {
        if (pokemon) {
            setExpandedPokemon(pokemon)
        }
    }, [pokemon])

    const handleClick = (name: string) => {
        // I genuinelly have no idea why, but this fixes a weird "jump" that the acc. items do when clicking on another item
        setPreviousPokemon(expandedPokemon)

        const params = new URLSearchParams(searchParams.toString())
        params.set("pokemon", name)
        router.push(`${pathname}?${params.toString()}`)
    }

    const searchParamsPokemon = searchParams.get("pokemon")

    return (
        <Accordion type="single" collapsible className="w-full flex flex-col place-items-center" defaultValue={searchParamsPokemon || ""}>
            {typePokemons?.map(({ name }: { name: string }) => {
                return (
                    <AccordionItem value={name} key={name} className="w-1/2">
                        <AccordionTrigger className="capitalize" onClick={() => handleClick(name)}>
                            {name}
                        </AccordionTrigger>
                        <AccordionContent>
                            <Suspense>
                                {expandedPokemon && (
                                    expandedPokemon.stats.map((stat: StatElement) => {
                                        return <PokemonStat stat={stat} key={stat.stat.name} />
                                    }))}
                            </Suspense>
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion >
    );
}
