import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchPokemon() {
    return (
        <article className="py-12 w-1/2 flex m-auto place-items-center">
            <div className="relative w-full">
                <Input type="text" placeholder="Search for a Pokémon..." className="py-5 pr-14" />
                <Button type="submit" variant="outline" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#637CCE] p-3">
                    <Image src={"/Search.svg"} width={15} height={15} alt="Search button" />
                </Button>
            </div>
        </article>
    );
}
