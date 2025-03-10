import { PetsInMemoryRepository } from '@/repositories/in-memory/pets-in-memory-respository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreatePetUseCase } from './create-pet-use-case'
import { OrgInMemoryRepository } from '@/repositories/in-memory/org-in-memory-respository'

describe('Create Pet Use Case', () => {
    let orgRepository: OrgInMemoryRepository
    let PetRepository: PetsInMemoryRepository
    let sut: CreatePetUseCase

    beforeEach(() => {
        orgRepository = new OrgInMemoryRepository()
        PetRepository = new PetsInMemoryRepository(orgRepository)
        sut = new CreatePetUseCase(orgRepository, PetRepository) 
    })

    it('should be able to get a pet', async () => {
        const { pet } = await sut.execute({
            name: 'Rex',
            description: 'dog', 
            age: 'adult',
            size: 'medium',
            energyLevel: 'normal',
            independece_level: 'normal',
            environment: 'normal',
            orgId: 'asdklajflkjhsdflkjshdf'
        })

        expect(pet.id).toEqual(expect.any(String))
    })
})
