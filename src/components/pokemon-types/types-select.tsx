'use client'

import { PokemonTypes } from "@/data/pokemon-types";
import TypeSpriteColor from "@/types/type-sprite-color";
import PokemonTypePill from "../pokemon-type-pill";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function TypesSelect() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const serachparamType = searchParams.get("type")

    const handleSelect = (type: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("type", type);
        router.push(`${pathname}?${params.toString()}`);
    };
    return (
        <Select onValueChange={(value) => handleSelect(value)} defaultValue={serachparamType || ""}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
                {PokemonTypes.map((type: TypeSpriteColor) => (
                    <SelectItem value={type.name} key={type.name}>
                        <PokemonTypePill type={type} />
                    </SelectItem>
                ))}
            </SelectContent>
        </Select >
    )
}
