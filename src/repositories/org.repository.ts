import { ORG, Prisma } from '@prisma/client'

export interface findManyNearbyParams {
    latitude: number
    longitude: number
}

export interface orgsRepository {
    create(data: Prisma.ORGCreateInput): Promise<ORG>
    findManyNearby(findManyNearbyParams: findManyNearbyParams): Promise<ORG[]>
}