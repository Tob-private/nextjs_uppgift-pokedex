'use client'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Pokemon } from "@/types/pokemon";
import { getPokemonsByIDs } from "@/utils/pokemon";
import Image from "next/image";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Spinner } from "./ui/shadcn-io/spinner";


export default function RandomPokemonDialog() {
    const [pokemon, setPokemon] = useState<Pokemon>();


    const fetchRandomPokemon = () => {
        setPokemon(undefined)
        const randomIDs: number[] = [];
        randomIDs.push(Math.ceil(Math.random() * 1000));

        getPokemonsByIDs(randomIDs).then((data) => {
            setPokemon(data[0]);
        });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="btn-primary" onClick={fetchRandomPokemon}>
                    <Image
                        src="/Dice.svg"
                        width={25}
                        height={25}
                        alt="Dice"
                    />
                    Random Pokémon</button>
            </DialogTrigger>

            <DialogContent showCloseButton={false} className="bg-transparent border-none shadow-none flex justify-center w-fit p-0">
                {pokemon ? <PokemonCard pokemon={pokemon} /> : <Spinner variant="bars"/>}
            </DialogContent>
        </Dialog>
    );
}