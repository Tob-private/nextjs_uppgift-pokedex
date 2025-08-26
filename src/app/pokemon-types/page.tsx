import PokemonList from "@/components/pokemon-types/PokemonList";
import TypesSelect from "@/components/pokemon-types/TypesSelect";

export default function Types() {

    return (
        <main className="flex flex-col place-items-center">
            <TypesSelect/>
            <PokemonList/>
        </main>
    );
}