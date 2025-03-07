import fastify from 'fastify'
import { orgRoutes } from './http/routes'

export const app = fastify()

app.register(orgRoutes)
