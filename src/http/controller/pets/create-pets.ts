import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreatePetsUseCase } from '@/use-cases/factories/make-create-pets-use-case'
import { OrgIdDontExists } from '@/use-cases/error/org-id-dont-exits'

const createPetBodySchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  age: z.string().min(1),
  size: z.string().min(1),
  energyLevel: z.string().min(1),
  independenceLevel: z.string().min(1),
  environment: z.string().min(1),
  orgId: z.string().uuid(),
})

export async function CreatePet(request: FastifyRequest, reply: FastifyReply) {
  const body = createPetBodySchema.parse(request.body)

  const createPetUseCase = makeCreatePetsUseCase()

  try {
    const { pet } = await createPetUseCase.execute(body)

    return reply.status(201).send(pet)
  } catch (error) {
    if (error instanceof OrgIdDontExists) {
      return reply.status(409).send({ message: error.message })
    }
  }
}
