import { ORG, pets, Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { OrgsRepository } from "../orgs.repository"

export class PrismaOrgsRepository implements OrgsRepository {
   
    async findPetByCity(city: string): Promise<pets[]> {
        const orgs = await prisma.oRG.findMany({
            where: {
                City: city
            }, 
            select: {
                id: true
            },
        })

        const orgIds = orgs.map(org => org.id)

       const pets = await prisma.pets.findMany({
        where: {
            org_id: {
                in: orgIds
            }
        }
       })

       return pets
    }

    async create(data: Prisma.ORGCreateInput): Promise<ORG> {
        const org = await prisma.oRG.create({
            data,
        })
        return org
    }
}