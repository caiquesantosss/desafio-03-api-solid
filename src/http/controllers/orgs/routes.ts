import { FastifyInstance } from 'fastify'
import { createOrgController } from './create-org'

export async function OrgRoutes(app: FastifyInstance) {
    app.post('/orgs', createOrgController)
}