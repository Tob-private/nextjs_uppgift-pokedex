'use client'

import PokemonCard from '@/components/PokemonCard'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useRouter } from 'next/navigation'

export default function ModalWrapper({ pokemon }: { pokemon: any }) {
    const router = useRouter()

    return (
        <Dialog open onOpenChange={() => router.back()}>
            <DialogContent
                showCloseButton={false}
                className="bg-transparent border-none shadow-none flex justify-center w-fit p-0"
            >
                <VisuallyHidden>
                    <DialogTitle>Randomized Pokemon</DialogTitle>
                    <DialogDescription>This is the pokemon you randomized</DialogDescription>
                </VisuallyHidden>
                <PokemonCard pokemon={pokemon} />
            </DialogContent>
        </Dialog>
    )
}
