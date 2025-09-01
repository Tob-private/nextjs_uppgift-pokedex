'use client'
import { useRouter } from "next/navigation";

export default function Page() {
    useRouter().replace("/")
    return (
        <div></div>
    );
}