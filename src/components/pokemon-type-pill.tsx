import TypeSpriteColor from "@/types/type-sprite-color";
import Image from "next/image";

export default function PokemonTypePill({ type }: { type: TypeSpriteColor }) {

    return <Image src={type.spritePath} alt={type.name} width={96} height={16} />
}