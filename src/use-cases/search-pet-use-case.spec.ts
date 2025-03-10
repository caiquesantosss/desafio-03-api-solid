import { OrgInMemoryRepository } from '@/repositories/in-memory/org-in-memory-respository'
import { PetsInMemoryRepository } from '@/repositories/in-memory/pets-in-memory-respository'
import { beforeEach, describe, expect, it } from 'vitest'
import { SearchPetUseCase } from './search-pet-use-case'
import { randomUUID } from 'crypto';


const makeOrg = () => ({
  id: randomUUID(),
  name_responsible: 'Jane Doe',  
  email: 'johndoe@example.com',
  password: 'securepassword123',
  whatsapp: '+5511998765432',
  CEP: '12345-678', 
  State: 'SP', 
  City: 'São Paulo', 
  Adress: 'Rua ABC, 45',  
  Neighborhood: 'Centro', 
  Street: 'Rua XYZ, 123', 
  Latitude:  -23.55052,  
  Longitude: -46.633308, 
  Addresses: [{ 
    Street: 'Rua ABC, 45',
    Neighborhood: 'Vila Nova',
    City: 'São Paulo',
    State: 'SP',
  }], 
});

describe('Search Pets Use Case', () => {
  let orgsRepository: OrgInMemoryRepository
  let petsRepository: PetsInMemoryRepository
  let sut: SearchPetUseCase

  beforeEach(() => {
    orgsRepository = new OrgInMemoryRepository()
    petsRepository = new PetsInMemoryRepository(orgsRepository)
    sut = new SearchPetUseCase(petsRepository)
  })


  // Helper function to create a pet without Faker
  const makePet = (overwrites: any = {}) => ({
    id: randomUUID(),
    name: 'Rex',
    age: '2',
    size: 'medium',
    energy_level: 'medium',
    environment: 'indoor',
    org_id: 'org-id-1',
    ...overwrites, // permitindo sobrescrever campos
  })

  it('should be able to search pets by city', async () => {
    const org = await orgsRepository.create(makeOrg())

    await petsRepository.create(makePet({ org_id: org.id }))
    await petsRepository.create(makePet({ org_id: org.id }))

    const org2 = await orgsRepository.create(makeOrg())

    await petsRepository.create(makePet({ org_id: org2.id }))

    const { pets } = await sut.execute({ city: org.City })

    expect(pets).toHaveLength(3)

    const { pets: pets2 } = await sut.execute({ city: org2.City })

    expect(pets2).toHaveLength(3)
  })

  it('should be able to search pets by city and age', async () => {
    const org = await orgsRepository.create(makeOrg())

    await petsRepository.create(makePet({ org_id: org.id, age: '1' }))
    await petsRepository.create(makePet({ org_id: org.id }))

    const { pets } = await sut.execute({ city: org.City, age: '1' })

    expect(pets).toHaveLength(1)
  })

  it('should be able to search pets by city and size', async () => {
    const org = await orgsRepository.create(makeOrg())

    await petsRepository.create(makePet({ org_id: org.id, size: 'small' }))
    await petsRepository.create(makePet({ org_id: org.id, size: 'medium' }))
    await petsRepository.create(makePet({ org_id: org.id, size: 'large' }))

    const { pets } = await sut.execute({ city: org.City, size: 'small' })

    expect(pets).toHaveLength(1)
  })

  it('should be able to search pets by city and energy_level', async () => {
    const org = await orgsRepository.create(makeOrg())

    await petsRepository.create(makePet({ org_id: org.id, energy_level: 'low' }))
    await petsRepository.create(makePet({ org_id: org.id, energy_level: 'medium' }))
    await petsRepository.create(makePet({ org_id: org.id, energy_level: 'high' }))

    const { pets } = await sut.execute({ city: org.City, energy_level: 'low' })

    expect(pets).toHaveLength(1)
  })

  it('should be able to search pets by city and environment', async () => {
    const org = await orgsRepository.create(makeOrg())

    await petsRepository.create(makePet({ org_id: org.id, environment: 'indoor' }))
    await petsRepository.create(makePet({ org_id: org.id, environment: 'outdoor' }))

    const { pets } = await sut.execute({
      city: org.City,
      environment: 'indoor',
    })

    expect(pets).toHaveLength(1)
  })
})
