import { Prisma, ORG, pets } from '@prisma/client'

export interface OrgsRepository {
    create(data: Prisma.ORGCreateInput): Promise<ORG>
    findPetByCity(city: string): Promise<pets[]>
}   