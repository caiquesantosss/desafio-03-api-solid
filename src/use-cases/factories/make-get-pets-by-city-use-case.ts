import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { CreatePetUseCase } from '../create-pets'
import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'

export function makeGetPetsByCityUseCase() {
  const petUseCase = new CreatePetUseCase(
    new PrismaOrgsRepository(), 
    new PrismaPetsRepository()
  )

  return petUseCase
}
