'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AlertCircleIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function SearchPokemon() {
    const [searchInput, setSearchInput] = useState<string>("")
    const [showWarning, setShowWarning] = useState<boolean>(false)

    const router = useRouter()
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const stringInput = e.target.value.toLowerCase()
        setSearchInput(stringInput)
    }

    const handleBtnClick = () => {
        const formatted = searchInput.trim().replace(/\s+/g, "-");
        if (searchInput !== "") {
            router.push(`/search-result/${formatted}`)
        } else {
            setShowWarning(true)
            setTimeout(() => {
                setShowWarning(false)
            }, 4000);
        }
    }

    return (
        <article className="py-12 w-1/2 m-auto">
            <div className="relative w-full">
                <Input type="text" placeholder="Search for a Pokémon..." className="py-5 pr-14" onChange={handleInputChange} />
                <Button type="submit" variant="outline" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#637CCE] p-3" onClick={handleBtnClick}>
                    <Image src={"/Search.svg"} width={15} height={15} alt="Search button" />
                </Button>
            </div>
            {showWarning &&
                <Alert variant="destructive" className="w-1/3 mt-1">
                    <AlertCircleIcon />
                    <AlertTitle>Searchbar empty</AlertTitle>
                    <AlertDescription>
                        <p>Please enter something into the searchbar</p>
                    </AlertDescription>
                </Alert>
            }
        </article>
    );
}
