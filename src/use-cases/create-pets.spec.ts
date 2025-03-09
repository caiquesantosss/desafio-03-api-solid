import { beforeAll, describe, expect, it} from 'vitest'
import { CreatePetUseCase } from './create-pets'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { InMemoryOrgRepository } from '@/repositories/in-memory/in-memory-org-repository'
import { randomUUID } from 'crypto'
import { string } from 'zod'

describe('Create Pets Use Case', () => {
    let orgsRepository: InMemoryOrgRepository
    let petsRepository: InMemoryPetsRepository
    let sut: CreatePetUseCase

  beforeAll(() => {
    orgsRepository = new InMemoryOrgRepository()
    petsRepository = new InMemoryPetsRepository(orgsRepository)
    sut = new CreatePetUseCase(orgsRepository, petsRepository)
  })

  it('should be able create a new pet', async () => {
    const { pet } = await sut.execute({
        name: "Buddy",
        description: "Um cãozinho ativo e amigável",
        age: "3 anos",
        size: "Médio",
        energyLevel: "Alto",
        independenceLevel: "Médio",
        environment: "Casa com espaço para brincar",
        orgId: randomUUID(),
    })

    expect(pet.id).toEqual(expect.any(String))
  })
})
