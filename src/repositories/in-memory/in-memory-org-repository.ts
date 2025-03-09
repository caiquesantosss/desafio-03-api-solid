import { Prisma, ORG, pets } from '@prisma/client'
import { OrgsRepository } from '../orgs.repository'
import { randomUUID } from 'node:crypto'

export class InMemoryOrgRepository implements OrgsRepository {
  
  findPetByCity(city: string): Promise<pets[]> {
    throw new Error('Method not implemented.')
  }

  public items: ORG[] = []

  async create(data: Prisma.ORGCreateInput): Promise<ORG> {
    const org = {
      id: randomUUID(),

      ...data,

      Latitude: new Prisma.Decimal(data.Latitude.toString()),
      Longitude: new Prisma.Decimal(data.Longitude.toString()),
    }

    this.items.push(org)

    return org
  }
}
