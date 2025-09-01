import RandomPokemonButton from "@/components/random-pokemon/RandomPokemonButton";
import RandomPokemons from "@/components/RandomPokemons";
import SearchPokemon from "@/components/SearchPokemon";

export default function Home() {
  return (
    <section>
      <article className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch &apos;em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <RandomPokemonButton/>
      </article>
      <SearchPokemon />
      <RandomPokemons />
    </section>
  );
}
