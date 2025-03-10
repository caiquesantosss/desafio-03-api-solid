import { describe, expect, it, beforeEach } from 'vitest'
import { CreatePetUseCase } from './create-pet-use-case'
import { orgsRepository } from '@/repositories/org.repository'
import { OrgInMemoryRepository } from '@/repositories/in-memory/org-in-memory-respository'
import { PetsInMemoryRepository } from '@/repositories/in-memory/pets-in-memory-respository'

describe("Create Pet Use Case", () => {
    let PetRepository: PetsInMemoryRepository
    let OrgRepository: OrgInMemoryRepository
    let sut: CreatePetUseCase

    beforeEach(() => {
        OrgRepository = new OrgInMemoryRepository()
        PetRepository = new PetsInMemoryRepository(OrgRepository)
        sut = new CreatePetUseCase(OrgRepository, PetRepository)
    })

    it("should be able to create a new pet", async () => {
        const { pet } = await sut.execute({ 
            name: 'John Doe',
            description: 'John Doe',
            age: 'John Doe',
            size: 'John Doe',
            energyLevel: 'John Doe',
            independece_level: 'John Doe',
            environment: 'John Doe',
            orgId: 'asdfknasldfnaslkdjfhnlkasjdhf',
        })   

        expect(pet.id).toEqual(expect.any(String))
        expect(pet.org_id).toEqual(expect.any(String))
    })
})