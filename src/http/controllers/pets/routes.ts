import { FastifyInstance } from 'fastify'
import { createPetController } from './create-pets'
import { SearchSchemaController } from './search-pets'
import { getPetController } from './get-pets'

export async function PetRoutes(app: FastifyInstance) {
    app.post('/orgs/pets', createPetController)
    app.get('/orgs/pets', SearchSchemaController)
    app.get('/orgs/pets/:id', getPetController)
}