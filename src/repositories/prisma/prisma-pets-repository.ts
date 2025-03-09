import { prisma } from '@/lib/prisma'
import { pets, Prisma } from '@prisma/client'
import { PetsRepository } from '@/repositories/pets.repository'
import { create } from 'domain'

export class PrismaPetsRepository implements PetsRepository {
   
    async create(data: Prisma.petsUncheckedCreateInput){
       const pet = await prisma.pets.create({ data })
       return pet
    }
}