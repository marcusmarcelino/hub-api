import type { CreateUsersProps } from '../dto/create'
import { createUserRepository } from '../repository'

export default async ({ name, email }: CreateUsersProps) => {
	await createUserRepository({ name, email })
}
