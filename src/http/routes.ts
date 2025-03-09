import { FastifyInstance } from 'fastify'
import { CreateOrg } from './controller/orgs/create-org'
import { CreatePet } from './controller/pets/create-pets'

export function orgRoutes(app: FastifyInstance) {
    app.post('/org', CreateOrg)

    app.post('/pets', CreatePet)
}
