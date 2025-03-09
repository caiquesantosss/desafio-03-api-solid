import { ORG, Prisma } from '@prisma/client'

export interface orgsRepository {
    create(data: Prisma.ORGCreateInput): Promise<ORG>
}