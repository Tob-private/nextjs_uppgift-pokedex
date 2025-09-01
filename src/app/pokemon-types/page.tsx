import ParentWrapper from "@/components/pokemon-types/parent-wrapper";
import { getTypeByID } from "@/helpers/api";
import { TypeType } from "@/types/types-types";

export default function Types() {
     const fetchType = async (type: string): Promise<TypeType>=> {
        'use server'
        const data = await getTypeByID(type);
        return data
      };
    return (
        <article className="flex flex-col place-items-center">
            <ParentWrapper fetchFunc={fetchType}/>
        </article>
    );
}