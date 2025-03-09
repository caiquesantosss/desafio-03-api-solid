import { orgsRepository } from '@/repositories/org.repository'
import { PetsRepository } from '@/repositories/pets.repository'
import { pets } from '@prisma/client'

interface CreatePetUseCaseRequest {
  name: string
  description: string
  age: string
  size: string
  energyLevel: string
  independece_level: string
  environment: string
  orgId: string
}

interface CreatePetUseCaseResponse {
  pet: pets
}

export class CreatePetUseCase {
  constructor(
    private orgRepository: orgsRepository,
    private petsRepository: PetsRepository
  ) {}

  async execute({
    name,
    description,
    age,
    size,
    energyLevel,
    independece_level,
    environment,
    orgId,
  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petsRepository.create({
      name,
      description,
      age,
      size,
      energy_level: energyLevel,
      independece_level,
      environment,
      org_id: orgId,
    })

    return { pet }
  }
}
