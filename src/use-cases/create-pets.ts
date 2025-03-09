import { pets } from '@prisma/client'
import { PetsRepository } from '@/repositories/pets.repository'
import { OrgsRepository } from '@/repositories/orgs.repository'
import { OrgIdDontExists } from './error/org-id-dont-exits'

interface CreatePetsUseCaseRequest {
  name: string
  description: string
  age: string
  size: string
  energyLevel: string
  independenceLevel: string
  environment: string
  orgId: string
}

interface CreatePetUseCaseResponse {
  pet: pets
}

export class CreatePetUseCase {
  constructor(
    private orgRepository: OrgsRepository,
    private petRepository: PetsRepository
  ) {}

  async execute({
    name,
    description,
    age,
    size,
    energyLevel,
    independenceLevel,
    environment,
    orgId,
  }: CreatePetsUseCaseRequest): Promise<CreatePetUseCaseResponse> {


    const pets = await this.petRepository.create({
      name,
      description,
      age,
      size,
      energy_level: energyLevel,
      independece_level: independenceLevel,
      environment,
      org_id: orgId,
    })

    return { pet: pets }
  }
}
