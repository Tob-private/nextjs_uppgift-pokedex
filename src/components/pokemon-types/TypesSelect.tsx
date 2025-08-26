import { PokemonTypes } from "@/data/pokemon-types";
import { PokemonType } from "@/types/pokemon";
import TypeSpriteColor from "@/types/type-sprite-color";
import Image from "next/image";
import PokemonTypePill from "../PokemonTypePill";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function TypesSelect() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
                {PokemonTypes.map((type: TypeSpriteColor) => {
                    return (
                        <SelectItem value={type.name}>
                            <PokemonTypePill type={type} />
                        </SelectItem>
                    )
                })}
            </SelectContent>
        </Select>
    );
}