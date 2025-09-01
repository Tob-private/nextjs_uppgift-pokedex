'use client'
import { Pokemon, PokemonType } from "@/types/pokemon";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TypeSpriteColor from "@/types/type-sprite-color";
import { PokemonTypes } from "@/data/pokemon-types";
import PokemonTypePill from "../PokemonTypePill";
import PokemonStat from "../PokemonStat";

export default function DrawerWrapper({ pokemon }: { pokemon: Pokemon }) {
    const router = useRouter()

    const typeColor: TypeSpriteColor = PokemonTypes.filter((type: TypeSpriteColor) => pokemon.types[0].type.name == type.name)[0]

    const basicNumbers: { key: string, value: number }[] = [
        { key: "Base XP", value: pokemon.base_experience },
        { key: "ID", value: pokemon.id },
        { key: "Height", value: pokemon.height },
        { key: "Weight", value: pokemon.weight }
    ]
    return (
        <Drawer direction="right" onClose={() => router.back()} open>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="flex flex-col place-items-center w-full capitalize text-3xl font-normal">
                        <Image src={pokemon.sprites.front_default || "/img-notfound.png"}
                            alt={pokemon.name}
                            width={200}
                            height={200}
                            className="rounded-full border-4"
                            style={{ borderColor: typeColor.color }}
                        />
                        {pokemon.name}
                    </DrawerTitle>
                    <DrawerDescription className="flex place-content-center gap-6">
                        {pokemon.types.map((type: PokemonType) => {
                            const typeColor: TypeSpriteColor | undefined = PokemonTypes.find(
                                (t: TypeSpriteColor) => t.name === type.type.name
                            );

                            return typeColor ? <PokemonTypePill key={typeColor.name} type={typeColor} /> : null;
                        })}
                    </DrawerDescription>
                </DrawerHeader>
                <section className="flex flex-wrap gap-4 justify-around">
                    <h3 className="flex-1/1 text-center text-2xl">Info</h3>
                    {basicNumbers.map(({ key, value }) => {
                        return (
                            <article
                                key={key}
                                className="rounded-full border-2 w-2/5 flex justify-between  p-1 px-2"
                                style={{ borderColor: typeColor.color }}>
                                <p>{key}</p>
                                <p>{value}</p>
                            </article>
                        )
                    })}
                </section>
                <section className="p-4">
                    {pokemon.stats.map((stat) => <PokemonStat stat={stat} key={stat.stat.name} />)}
                </section>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}