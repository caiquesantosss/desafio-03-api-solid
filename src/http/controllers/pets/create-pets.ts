import { MakeCreatePetUseCase } from '@/use-cases/factories/make-create-pets-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const bodySchema = z.object({
    name: z.string(),
    description: z.string(),
    age: z.string(),
    size: z.string(),
    energyLevel: z.string(),
    independece_level: z.string(),
    environment: z.string(),
    orgId: z.string(),
})

export async function createPetController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const body = bodySchema.parse(request.body)
    const createPetUseCase = MakeCreatePetUseCase()

    try {
        const { pet } = await createPetUseCase.execute(body)

        return reply.status(201).send(pet)
    } catch (error) {
        return reply.status(400)
    }
}