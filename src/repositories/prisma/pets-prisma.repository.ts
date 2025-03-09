import { pets, Prisma } from '@prisma/client'
import { AllParams, PetsRepository } from '../pets.repository'
import { prisma } from '@/lib/prisma'

export class PrismaPetsRepository implements PetsRepository {
  async create(data: Prisma.petsUncheckedCreateInput): Promise<pets> {
    const pets = await prisma.pets.create({
      data,
    })

    return pets
  }

  async findById(id: string): Promise<pets | null> {
    const pet = await prisma.pets.findUnique({ where: { id } })

    return pet
  }

  async findAll(params: AllParams): Promise<pets[]> {
    const pets = await prisma.pets.findMany({
      where: {
        age: params.age,
        size: params.size,
        energy_level: params.energy_level,
        org: {
          City: {
            contains: params.city,
            mode: 'insensitive',
          },
        },
      },
    })

    return pets
  }
}
