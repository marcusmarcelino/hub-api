import { createUserController, getAllUsersController } from './controllers'

import type { FastifyInstance } from 'fastify'

async function userRoutes(router: FastifyInstance) {
	router.post('', createUserController)
	router.get('', getAllUsersController)
}

export default userRoutes
