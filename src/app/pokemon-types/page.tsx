import PokemonList from "@/components/pokemon-types/PokemonList";
import TypesSelect from "@/components/pokemon-types/TypesSelect";
import { getTypeByID } from "@/helpers/api";

export default async function Types({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const { type } = await searchParams;

    const data = await getTypeByID(type);
    return (
        <article className="flex flex-col place-items-center">
            <TypesSelect />
            {data &&
                <div className="w-4/6 m-auto flex flex-col place-items-center">
                    <PokemonList type={data} />
                </div>
            }
        </article>
    );
}