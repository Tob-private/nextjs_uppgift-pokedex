import PokemonList from "@/components/pokemon-types/pokemon-list";
import TypesSelect from "@/components/pokemon-types/types-select";
import { getPokemonByIDs, getTypeByID } from "@/helpers/api";

export default async function Types({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const { type, pokemon = "" } = await searchParams;

    const typeData = await getTypeByID(type);

    const pokemonArray = pokemon ? await getPokemonByIDs([pokemon]) : []
    
    const pokemonData = pokemonArray[0]
    
    return (
        <article className="flex flex-col place-items-center">
            <TypesSelect />
            {typeData &&
                <div className="w-4/6 m-auto flex flex-col place-items-center">
                    <PokemonList type={typeData} pokemon={pokemonData}/>
                </div>
            }
        </article>
    );
}