import { orgsRepository } from "@/repositories/org.repository"
import { ORG } from "@prisma/client"

interface FetchNearbyUseCaseRequest {
    latitude: number
    longitude: number
}

interface FetchNearbyUseCaseRespose {
    orgs: ORG[]
}

export class FetchNeabyUseCase {
    constructor(private OrgRepository: orgsRepository) {}

    async execute({
        latitude, 
        longitude
    }: FetchNearbyUseCaseRequest): Promise<FetchNearbyUseCaseRespose> {
        const orgs = await this.OrgRepository.findManyNearby({
            latitude: latitude, 
            longitude: longitude
        })

        return { orgs }
    }
}