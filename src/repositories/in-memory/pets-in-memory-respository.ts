import { Prisma, pets } from '@prisma/client'
import { AllParams, PetsRepository } from '../pets.repository'
import { randomUUID } from 'node:crypto'
import { orgsRepository } from '../org.repository'
import { OrgInMemoryRepository } from './org-in-memory-respository'

export class PetsInMemoryRepository implements PetsRepository {
  public items: pets[] = []

  constructor(private orgsRepository: OrgInMemoryRepository) {}

  async create(data: Prisma.petsUncheckedCreateInput) {
    const pets = {
      id: randomUUID(),
      name: data.name,
      description: data.description,
      age: data.age,
      size: data.size,
      independece_level: data.independece_level,
      energy_level: data.energy_level,
      environment: data.environment,
      org_id: data.org_id,
    }

    this.items.push(pets)

    return pets
  }
  async findById(id: string): Promise<pets | null> {
    const pet = this.items.find((item) => item.id === id)

    return pet ?? null
  }

  findAll(params: AllParams): Promise<pets[]> {
    const orgsByCity = this.orgsRepository.items.filter(
      (orgs) => orgs.City === params.city
    )

    const pets = this.items
      .filter((item) => orgsByCity.some((org) => org.id === item.org_id))
      .filter((item) => (params.age ? item.age === params.age : true))
      .filter((item) => (params.size ? item.size === params.size : true))
      .filter((item) =>
        params.energy_level ? item.energy_level === params.energy_level : true
      )
      .filter((item) => item)
      .filter((item) => params.independence_level ? item.independece_level === params.independence_level : true)
      .filter((item) =>
        params.environment ? item.environment === params.environment : true
      )

      return Promise.resolve(pets)
  }
}
