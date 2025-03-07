import { ORG } from '@prisma/client'
import { OrgsRepository } from '../repositories/orgs.repository'

interface CreateOrgUseCaseRequest {
    name_responsible: string
    email: string
    password: string
    whatsapp: string
    CEP: string
    State: string
    City: string
    Adress: string
    Neighborhood: string
    Street: string
    Latitude: number
    Longitude: number
}

interface CreateOrgUseCaseResponse {
    org: ORG
}

export class CreateOrgUseCase {
    constructor(private orgRepository: OrgsRepository) {}

    async execute({
        name_responsible,
        email,
        password,
        whatsapp,
        CEP,
        State,
        City,
        Adress,
        Neighborhood,
        Street,
        Latitude,
        Longitude
    }: CreateOrgUseCaseRequest): Promise<CreateOrgUseCaseResponse> {
        
        const org = await this.orgRepository.create({
            name_responsible,
            email,
            password,
            whatsapp,
            CEP,
            State,
            City,
            Adress,
            Neighborhood,
            Street,
            Latitude,
            Longitude
        })

        return { org } 
    }
}
