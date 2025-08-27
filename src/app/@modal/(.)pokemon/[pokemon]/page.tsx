import ModalWrapper from "@/components/random-pokemon/modal-wrapper"
import { fetcher } from "@/helpers/api"

export default async function ModalPage({ params }: { params: { pokemon: string } }) {
  const { pokemon } = await params
  const data = await fetcher(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

  return <ModalWrapper pokemon={data} />
}
