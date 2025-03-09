import { FastifyInstance } from 'fastify'
import { createOrgController } from './controllers/orgs/create-org'
import { createPetController } from './controllers/pets/create-pets'
import { getPetController } from './controllers/pets/get-pets'
import { SearchSchemaController } from './controllers/pets/search-pets'

export async function routes(app: FastifyInstance) {
    app.post('/orgs', createOrgController)
    
    app.post('/orgs/pets', createPetController)
    app.get('/orgs/pets', SearchSchemaController)
    app.get('/orgs/pets/:id', getPetController)
}