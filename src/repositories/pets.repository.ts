import { pets, Prisma } from '@prisma/client'

export interface AllParams {
    city: string
    age?: string
    size?: string
    energy_level?: string
    environment?: string
}

export interface PetsRepository {
    create(data: Prisma.petsUncheckedCreateInput): Promise<pets>
    findById(id: string): Promise<pets | null>
    findAll(params: AllParams): Promise<pets[]>
}