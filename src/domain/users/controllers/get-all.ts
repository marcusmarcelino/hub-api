import type { FastifyReply, FastifyRequest } from 'fastify'
import { getAllUsersService } from '../services'

export default async (request: FastifyRequest, reply: FastifyReply) => {
	try {
		const users = await getAllUsersService()
		return reply.status(200).send(users)
	} catch (error) {
		return reply.status(400).send({ message: `Error: ${error}` })
	}
}
