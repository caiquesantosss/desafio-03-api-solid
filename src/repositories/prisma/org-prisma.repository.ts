import { prisma } from '@/lib/prisma'
import { ORG, Prisma } from '@prisma/client'

import { orgsRepository } from '@/repositories/org.repository'

export class PrismaOrgsRepository implements orgsRepository {
  async create(data: Prisma.ORGCreateInput): Promise<ORG> {
    const org = await prisma.oRG.create({ data })

    return org
  }
}