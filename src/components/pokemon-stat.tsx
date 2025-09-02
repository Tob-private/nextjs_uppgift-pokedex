import { StatElement } from "@/types/pokemon";

export default function PokemonStat({stat}: {stat: StatElement}) {
    return (
        <section className="font-bold flex justify-between w-full">
            <span className={"capitalize " + (stat.stat.name.length === 2 && "uppercase")}>{stat.stat.name}</span>
            <span>{stat.base_stat}</span>
        </section>
    );
}