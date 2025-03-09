import { InMemoryOrgRepository } from '@/repositories/in-memory/in-memory-org-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateOrgUseCase } from './create-org'

describe('Create ORG Use Case', () => {
  let orgRepository: InMemoryOrgRepository
  let sut: CreateOrgUseCase

  beforeEach(() => {
    orgRepository = new InMemoryOrgRepository()
    sut = new CreateOrgUseCase(orgRepository)
  })

  it('should be able register the ORG', async () => {
    const { org } = await sut.execute({
      name_responsible: 'Joe Doe',
      email: 'joe.doe@example.com',
      password: 'securePass123',
      whatsapp: '+1 555-1234',

      CEP: '12345-678',
      State: 'California',
      City: 'Los Angeles',
      Adress: '123 Main St',
      Neighborhood: 'Downtown',
      Street: 'Sunset Blvd',

      Latitude: 34.0522,
      Longitude: -118.2437,
    })

    expect(org.id).toEqual(expect.any(String))
  })
})
