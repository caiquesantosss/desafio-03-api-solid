import { Prisma, pets } from '@prisma/client'
import { PetsRepository } from '../pets.repository'
import { randomUUID } from 'node:crypto'
import { InMemoryOrgRepository } from './in-memory-org-repository'

export class InMemoryPetsRepository implements PetsRepository {
  public items: pets[] = []

  constructor(private orgsRepository: InMemoryOrgRepository) {}

  async create(data: Prisma.petsUncheckedCreateInput): Promise<pets> {
    const pet = {
      id: randomUUID(),
      ...data,
    }

    this.items.push(pet)

    return pet
  }

  async findById(id: string): Promise<pets | null> {
    return this.items.find((pet) => pet.id === id) || null
  }
}
