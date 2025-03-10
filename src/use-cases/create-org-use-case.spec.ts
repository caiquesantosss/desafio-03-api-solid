import { OrgInMemoryRepository } from '@/repositories/in-memory/org-in-memory-respository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateOrgUseCase } from './create-org-use-case'

describe('Create A Org Use Case', () => {
    let OrgRepository: OrgInMemoryRepository
    let sut: CreateOrgUseCase

    beforeEach(() => {
        OrgRepository = new OrgInMemoryRepository()
        sut = new CreateOrgUseCase(OrgRepository)
    })

    it('should be able to create a new org', async () => {
        const { org } = await sut.execute({ 
            name_responsible: 'John Doe',
            email: 'johndoe@me.com',
            whatsapp: '11999999999',
            password: '123456',
            CEP: '12345678',
            State: 'SP',
            City: 'São Paulo',
            Adress: 'Av. Paulista, 1000',
            Neighborhood: 'Bela Vista',
            Street: 'Paulista',
            Latitude: -23.550520,
            Longitude: -46.633308
        })   
        expect(org.id).toEqual(expect.any(String))
    })
    
})
