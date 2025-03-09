import { PetsRepository } from "@/repositories/pets.repository"
import { pets } from "@prisma/client"

interface SearchPetUseCaseRequest {
    city: string
    age?: string
    size?: string
    energy_level?: string
    environment?: string
}

interface SearchPetUseCaseResponse {
    pets: pets[]
}

export class SearchPetUseCase {
    constructor(private petsRepository: PetsRepository) {}

    async execute({
        city,
        age,
        size,
        energy_level, 
        environment,
    }: SearchPetUseCaseRequest): Promise<SearchPetUseCaseResponse> {
      const pets = await this.petsRepository.findAll({
        city, 
        age,
        energy_level, 
        environment
      })

      return { pets }
    } 
}