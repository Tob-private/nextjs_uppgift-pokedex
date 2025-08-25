import { type Pokemon, type PokemonType, type StatElement } from "@/types/pokemon";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import PokemonTypePill from "./PokemonTypePill";
import { PokemonTypes } from "@/data/pokemon-types";
import TypeSpriteColor from "@/types/type-sprite-color";
import PokemonStat from "./PokemonStat";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    const { id, name, sprites, types, stats }: { id: number, name: string, sprites: any, types: PokemonType[], stats: StatElement[] } = pokemon

    const desiredStats: string[] = ["hp", "attack", "defense"]

    const image: string = sprites.front_default ?? "/img-notfound.png"

    const filteredTypes: TypeSpriteColor[] = PokemonTypes.filter((type: TypeSpriteColor) => {
        return types.some((element: PokemonType) => type.name === element.type.name);
    });
    const filteredStats = stats.filter((stat) => {
        return desiredStats.some((element: string) => stat.stat.name === element);
    });

    console.log(filteredStats);
    

    


    return (
        <Card className={"w-70 text-center border-4 shadow-xl"} style={{ borderColor: filteredTypes[0].color }}>
            <CardHeader>
                <CardTitle className="grid place-items-center">
                    <Image src={image} alt={name} width={150} height={150} />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
                <p
                    className="w-fit m-auto px-2 rounded-full text-white"
                    style={{ backgroundColor: filteredTypes[0].color }}
                >#{id}</p>
                <h3 className="capitalize text-2xl">{name}</h3>
                <span className="flex gap-1 justify-center">
                    {filteredTypes.map((type: TypeSpriteColor) => <PokemonTypePill type={type} key={type.name} />)}
                </span>
            </CardContent>
            <CardFooter className="flex flex-col">
                {filteredStats.map((stat) => <PokemonStat stat={stat} key={stat.stat.name}/>)}
            </CardFooter>
        </Card>
    );
}