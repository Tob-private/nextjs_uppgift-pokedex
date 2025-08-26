import type { Metadata } from "next";
import { Jaldi, Jersey_10 } from "next/font/google";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";

const jaldi = Jaldi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jaldi"
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey"
});

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Explore the world of Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jaldi.variable} ${jersey.variable} antialiased`}
      >
        <header className="flex p-4 justify-between w-5/6 m-auto">
          <section className="flex place-items-center gap-4">
            <Image src={"/Logo.png"} alt="Org logo" width={40} height={40} className="justify-start" />
            <h1 className="text-3xl text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Pokédex</h1>
          </section>
          <nav className="justify-self-end flex place-items-center">
            <ul className="flex flex-row gap-8 text-xl">
              <Link href={"/"}>Home</Link>
              <Link href={"/pokedex"}>Pokedex</Link>
              <Link href={"/types"}>Types</Link>
              <Link href={"/favourites"}>Favourites</Link>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="flex flex-col place-items-center p-16 bg-gray-600 text-white">
          <section className="flex place-items-center gap-4 mb-6">
            <Image src={"/Logo.png"} alt="Org logo" width={50} height={50} className="justify-start" />
            <h1 className="text-3xl">Pokédex</h1>
          </section>
          <p className="text-xl mb-6">Explore the world of pokémon</p>
          <section className="flex gap-8">
            <Image src={"/Facebook.svg"} alt="Org logo" width={40} height={40} className="justify-start" />
            <Image src={"/Instagram.svg"} alt="Org logo" width={40} height={40} className="justify-start" />
          </section>
        </footer>
      </body>
    </html>
  );
}
