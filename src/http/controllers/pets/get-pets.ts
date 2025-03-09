import { makeGetPetUseCase } from '@/use-cases/factories/make-get-pet-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const IdSchema = z.object({
  id: z.string(),
})

export async function getPetController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = IdSchema.parse(request.params)

  const getPetUseCase = makeGetPetUseCase()

  try {
    const { pet } = await getPetUseCase.execute({ id })

    reply.status(200).send(pet)
  } catch (err) {
    reply.status(400)
  }

  return reply.status(500).send({ message: 'Internal server error' })
}
