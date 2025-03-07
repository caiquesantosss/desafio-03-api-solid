import { Prisma, ORG } from '@prisma/client'

export interface OrgsRepository {
    create(data: Prisma.ORGCreateInput): Promise<ORG>
}