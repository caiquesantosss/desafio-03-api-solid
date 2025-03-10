import { PrismaOrgsRepository } from '@/repositories/prisma/org-prisma.repository'
import { FetchNeabyUseCase } from '../fetch-nearby-use-case'

export function MakeFetchNearbyUseCase() {
  const OrgRepository = new PrismaOrgsRepository()
  const UseCase = new FetchNeabyUseCase(OrgRepository)

  return UseCase
}
