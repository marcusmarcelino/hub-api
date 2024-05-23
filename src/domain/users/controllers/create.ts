import type { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'
import { createUserService } from '../services'

export default async (request: FastifyRequest, reply: FastifyReply) => {
	try {
		const createUserSchema = z.object({
			name: z.string(),
			email: z.string().email(),
		})
		const { name, email } = createUserSchema.parse(request.body)

		await createUserService({ name, email })

		return reply.status(201).send({ message: 'Create user with success' })
	} catch (error) {
		return reply.status(400).send({ message: `Error: ${error}` })
	}
}
