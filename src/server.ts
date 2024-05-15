import Fastify, { type FastifyReply, type FastifyRequest } from 'fastify'
import userRoutes from './domain/users/user.route'

function buildServer() {
	const server = Fastify()

	server.register(userRoutes, { prefix: 'api/users' })

	return server
}

export default buildServer
