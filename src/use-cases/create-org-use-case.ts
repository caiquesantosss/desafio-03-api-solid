import { orgsRepository } from '@/repositories/org.repository'
import { ORG } from '@prisma/client'
import { promises } from 'dns'

interface CreateOrgUseCaseRequest {
  name_responsible: string
  email: string
  whatsapp: string
  password: string
  CEP: string
  State: string
  Adress: string,
  City: string
  Neighborhood: string
  Street: string
  Latitude: number
  Longitude: number
}

interface CreateOrgUseCaseResponse {
  org: ORG
}

export class CreateOrgUseCase {
  constructor(private orgsRepository: orgsRepository) {}

  async execute({
    name_responsible,
    email,
    whatsapp,
    password,
    CEP,
    State,
    City,
    Adress,
    Neighborhood,
    Street,
    Latitude,
    Longitude,
  }: CreateOrgUseCaseRequest): Promise<CreateOrgUseCaseResponse> {
    const org = await this.orgsRepository.create({
      name_responsible,
      email,
      whatsapp,
      password,
      CEP,
      State,
      City,
      Neighborhood,
      Street,
      Latitude,
      Longitude,
      Adress
    })

    return { org }
  }
}
