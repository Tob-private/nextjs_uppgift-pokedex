'use client'

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Spinner } from "./ui/shadcn-io/spinner";
import { fetcher } from "@/helpers/api";
import useSWR from "swr";
import { notFound } from "next/navigation";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function RandomPokemonDialog() {
    const [randomNumber, setRandomNumber] = useState<number | null>(null);

    // Fetch Pokémon only if randomNumber is set
    const { data, error, isLoading } = useSWR(
        randomNumber ? `https://pokeapi.co/api/v2/pokemon/${randomNumber}` : null,
        fetcher
    );

    if (error) {
        notFound();
    }

    const handleRandomClick = () => {
        setRandomNumber(Math.ceil(Math.random() * 1000));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="btn-primary" onClick={handleRandomClick}>
                    <Image
                        src="/Dice.svg"
                        width={25}
                        height={25}
                        alt="Dice"
                    />
                    Random Pokémon
                </button>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="bg-transparent border-none shadow-none flex justify-center w-fit p-0">
                <VisuallyHidden>
                    <DialogTitle>Randomized Pokemon</DialogTitle>
                    <DialogDescription>This is the pokemon you randomized</DialogDescription>
                </VisuallyHidden>
                {isLoading ? (
                    <Spinner variant="bars" />
                ) : error ? (
                    <p>Error loading Pokémon.</p>
                ) : <PokemonCard pokemon={data} />}
            </DialogContent>
        </Dialog>
    );
}
