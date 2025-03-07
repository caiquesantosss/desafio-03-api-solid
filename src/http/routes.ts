import { FastifyInstance } from 'fastify'
import { CreateOrg } from './controller/orgs/create-org'

export function orgRoutes(app: FastifyInstance) {
    app.post('/org', CreateOrg)
}
