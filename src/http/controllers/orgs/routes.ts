import { FastifyInstance } from 'fastify'
import { createOrgController } from './create-org'
import { FetchNearbyOrg } from './fetch-nearby-orgs'

export async function OrgRoutes(app: FastifyInstance) {
    app.post('/orgs', createOrgController)
    app.post('/orgs/nearby', FetchNearbyOrg)
}