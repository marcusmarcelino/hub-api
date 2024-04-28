import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { z } from 'zod'

const app = fastify()

const prisma = new PrismaClient()

app.get('/users', async () => {
	const users = await prisma.users.findMany()
	return { users }
})

app.post('/users', async (request, reply) => {
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

app
	.listen({
		host: '0.0.0.0',
		port: process.env.PORT ? Number(process.env.PORT) : 3333,
	})
	.then(() => {
		console.log('HTTP Server Started')
	})
