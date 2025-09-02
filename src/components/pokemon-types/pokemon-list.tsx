'use client'
import { TypeType } from "@/types/types-types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { type Pokemon, type StatElement } from "@/types/pokemon";
import { useState, useEffect } from "react";
import PokemonStat from "../pokemon-stat";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

export default function PokemonList({ type, pokemon }: { type: TypeType, pokemon: Pokemon | undefined }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [expandedPokemon, setExpandedPokemon] = useState<Pokemon>()

    // Update local state when prop changes
    useEffect(() => {
        if (pokemon) {
            setExpandedPokemon(pokemon)
        }
    }, [pokemon])

    const typePokemons = type?.pokemon.map((pokemon) => pokemon.pokemon)

    const handleClick = (name: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("pokemon", name);
        router.push(`${pathname}?${params.toString()}`);
        setExpandedPokemon(undefined)
    };

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
                            {!expandedPokemon ? (
                                <div className="flex gap-1 flex-wrap justify-between">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <Skeleton key={i} className="h-5 w-full" />
                                    ))}
                                </div>
                            ) : (
                                expandedPokemon.stats.map((stat: StatElement) => (
                                    <PokemonStat stat={stat} key={stat.stat.name} />
                                ))
                            )}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
    );
}
