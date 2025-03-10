import { ORG, Prisma } from '@prisma/client'
import { findManyNearbyParams, orgsRepository } from '../org.repository'
import { randomUUID } from 'node:crypto'
import { getDistanceBetweenCoordinates } from '@/utils/get-distance-between-cordinates'

export class OrgInMemoryRepository implements orgsRepository {
  public items: ORG[] = []
  async create(data: Prisma.ORGCreateInput) {
    const org = {
      id: data.id ?? randomUUID(),
      name_responsible: data.name_responsible,
      email: data.email,
      whatsapp: data.whatsapp,
      password: data.password,
      CEP: data.CEP,
      State: data.State,
      City: data.City,
      Adress: data.Adress,
      Neighborhood: data.Neighborhood,
      Street: data.Street,
      Latitude: new Prisma.Decimal(data.Latitude.toString()),
      Longitude: new Prisma.Decimal(data.Longitude.toString()),
    }

    this.items.push(org)

    return org
  }

  async findManyNearby(params: findManyNearbyParams) {
    return this.items.filter((item) => {
      const distance = getDistanceBetweenCoordinates(
        { latitude: params.latitude, longitude: params.longitude },
        {
          latitude: item.Latitude.toNumber(),
          longitude: item.Longitude.toNumber(),
        }
      )

      return distance < 10
    })
  }
}
