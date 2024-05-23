import Fastify, { type FastifyReply, type FastifyRequest } from 'fastify'
import userRoutes from './domain/users/user.route'

function buildApp() {
	const server = Fastify()

	server.get('/checkserver', async () => ({ status: 'OK' }))

	server.register(userRoutes, { prefix: 'api/users' })

	return server
}

export default buildApp
