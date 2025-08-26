'use client'
import { usePathname } from "next/navigation";

export default function SearchResult() {
    const pathStringID: string | undefined = usePathname().split("/").pop();
    
    if (!pathStringID) {
        throw new Error("Path ID is undefined");
    }
    
    return (
        <div></div>
    );
}