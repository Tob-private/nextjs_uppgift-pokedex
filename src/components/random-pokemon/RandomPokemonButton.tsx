'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RandomPokemonButton() {
    const router = useRouter()
    const randomNumber = () => Math.ceil(Math.random() * 1000)

    return (
        <button className="btn-primary" onClick={() => router.push(`/random-pokemon/${randomNumber()}`)}>
            <Image
                src="/Dice.svg"
                width={25}
                height={25}
                alt="Dice"
            />
            Random Pokémon
        </button>
    );
}