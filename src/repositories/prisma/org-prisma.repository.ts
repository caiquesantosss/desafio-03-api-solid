import { prisma } from '@/lib/prisma'
import { ORG, Prisma } from '@prisma/client'

import {
  findManyNearbyParams,
  orgsRepository,
} from '@/repositories/org.repository'

export class PrismaOrgsRepository implements orgsRepository {
  async create(data: Prisma.ORGCreateInput): Promise<ORG> {
    const org = await prisma.oRG.create({ data })

    return org
  }

  async findManyNearby({ latitude, longitude }: findManyNearbyParams) {
    const orgs = await prisma.$queryRaw<ORG[]>`
     SELECT * from gyms
     WHERE ( 6371 * acos( cos( radians(${latitude}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) * sin( radians( latitude ) ) ) ) <= 10
    `
    return orgs
  }
}
