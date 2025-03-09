import { makeSearchPetsUseCase } from '@/use-cases/factories/make-search-pets-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const SearchSchema = z.object({
  city: z.string().min(1),
  age: z.string().min(1).optional(),
  size: z.string().min(1).optional(),
  energy_level: z.string().min(1).optional(),
  environment: z.string().min(1).optional(),
})

export async function SearchSchemaController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { city, age, size, energy_level, environment } = SearchSchema.parse(
    request.query
  )

  const searchPetsUseCase = makeSearchPetsUseCase()

  try {
    const { pets } = await searchPetsUseCase.execute({
      city,
      age,
      size,
      energy_level,
      environment,
    })

    return reply.status(200).send({ pets })
  } catch(err) {
    return reply.status(400)
  }
}
