import { PrismaClient } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'

async function userRoutes(server: FastifyInstance) {
	const prisma = new PrismaClient()

	server.post('', async (request, reply) => {
		const createUserSchema = z.object({
			name: z.string(),
			email: z.string().email(),
		})
		const { name, email } = createUserSchema.parse(request.body)

		await prisma.users.create({
			data: {
				name,
				email,
			},
		})

		return reply.status(201).send({ message: 'Create user with success' })
	})

	server.get('', async () => {
		const users = await prisma.users.findMany()
		return { users }
	})
}

export default userRoutes
