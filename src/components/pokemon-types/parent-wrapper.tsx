'use client'

import { useState } from "react";
import TypesSelect from "./TypesSelect";
import PokemonList from "./PokemonList";
import { fetchTypeAction } from "@/app/actions";
import { TypeType } from "@/data/types-types";

export default function ParentWrapper() {
  const [typeData, setTypeData] = useState<TypeType>();

  const handleSelect = async (type: string) => {
    // call server action here
    const data = await fetchTypeAction(type);
    setTypeData(data);
  };

  return (
    <div className="w-4/6 m-auto flex flex-col place-items-center">
      <TypesSelect onSelect={handleSelect} />
      {typeData && <PokemonList type={typeData} />}
    </div>
  );
}
