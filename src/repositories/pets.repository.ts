import { pets, Prisma } from '@prisma/client'

export interface PetsRepository {
    create(data: Prisma.petsUncheckedCreateInput): Promise<pets>
}