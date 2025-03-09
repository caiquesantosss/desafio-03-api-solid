import { PrismaOrgsRepository } from '@/repositories/prisma/org-prisma.repository'
import { CreateOrgUseCase } from '@/use-cases/create-org-use-case'

export function makeCreateOrgUseCase() {
  return new CreateOrgUseCase(new PrismaOrgsRepository())
}