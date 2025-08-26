'use client'
import PokemonCard from "@/components/PokemonCard";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { fetcher } from "@/helpers/api";
import { notFound, usePathname } from "next/navigation";
import useSWR from "swr";

export default function SearchResult() {
    const pathStringID: string | undefined = usePathname().split("/").pop();

    if (!pathStringID) {
        throw new Error("Path ID is undefined");
    }

    const { data, error, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pathStringID}`, fetcher)

    if (error) return notFound()

    return isLoading ? <Spinner/> : (!isLoading && !data ? notFound() : <PokemonCard pokemon={data}/>)
}