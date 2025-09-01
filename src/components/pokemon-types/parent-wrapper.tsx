'use client'

import { useState } from "react";
import TypesSelect from "./TypesSelect";
import PokemonList from "./PokemonList";
import { fetchTypeAction } from "@/app/actions";

export default function ParentWrapper() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [typeData, setTypeData] = useState<any>(null);

  const handleSelect = async (type: string) => {
    setSelectedType(type);
    
    // call server action here
    const data = await fetchTypeAction(type);
    setTypeData(data);
};

  return (
    <div className="w-4/6 m-auto flex flex-col place-items-center">
      <TypesSelect onSelect={handleSelect}/>
      <PokemonList type={typeData} />
    </div>
  );
}
