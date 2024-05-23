import { PrismaClient } from '@prisma/client'
import type { CreateUsersProps } from '../dto/create'

export default async ({ name, email }: CreateUsersProps) => {
	const prisma = new PrismaClient()
	await prisma.users.create({
		data: {
			name,
			email,
		},
	})
}
