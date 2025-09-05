import Image from "next/image";
import Link from "next/link";

export default function notFound() {
    return (
        <main className="p-12 flex flex-col ">
            <h1 className="text-center text-4xl mb-12">
                Pokemon not found
            </h1>
            <Image
                src={"/pokemon-not-found.png"}
                alt="Pokemon not found"
                width={200}
                height={200}
                className="m-auto mb-12" />
            <Link href={"/"} className="text-xl m-auto">Go back &rarr;</Link>
        </main>
    );
}
