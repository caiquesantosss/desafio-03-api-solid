import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateOrgUseCase } from '@/use-cases/factories/make-create-org-use-case'
import { OrgAlreadyExistsError } from '@/use-cases/error/org-alredy-exists'

const registerOrgBodySchema = z.object({
  name_responsible: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  whatsapp: z.string(),

  CEP: z.string(),
  State: z.string(),
  City: z.string(),
  Adress: z.string(),
  Neighborhood: z.string(),
  Street: z.string(),

  Latitude: z.number(),
  Longitude: z.number(),
})

export async function CreateOrg(request: FastifyRequest, reply: FastifyReply) {
  const body = registerOrgBodySchema.parse(request.body)

  const createOrgUseCase = makeCreateOrgUseCase()

  try {
    const { org } = await createOrgUseCase.execute(body)

    return reply.status(201).send(org)
  } catch (error) {
    if (error instanceof OrgAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }
  }
}
