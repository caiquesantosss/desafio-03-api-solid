import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreateOrgUseCase } from '@/use-cases/factories/make-create-org-use-case'

const bodySchema = z.object({
  name_responsible: z.string(), 
  email: z.string(),
  whatsapp: z.string(),
  password: z.string(),
  CEP: z.string(),                
  State: z.string(),              
  Adress: z.string(),            
  City: z.string(),               
  Neighborhood: z.string(),
  Street: z.string(),
  Latitude: z.number(),
  Longitude: z.number(),
})

export async function createOrgController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const body = bodySchema.parse(request.body)

  const createOrgUseCase = makeCreateOrgUseCase()

  try {
    const { org } = await createOrgUseCase.execute(body)

    return reply.status(201).send(org)
  } catch (error) {
      return reply.status(400)
  }
}
