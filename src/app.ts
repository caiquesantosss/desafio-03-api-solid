import fastify from 'fastify'
import { PetRoutes } from './http/controllers/pets/routes'
import { OrgRoutes } from './http/controllers/orgs/routes'


export const app = fastify()

app.register(PetRoutes)
app.register(OrgRoutes)