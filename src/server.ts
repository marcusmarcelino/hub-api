import buildApp from './app'

const server = buildApp()

async function main() {
	try {
		await server.listen({
			host: '0.0.0.0',
			port: process.env.PORT ? Number(process.env.PORT) : 3333,
		})

		console.log('HTTP Server started - http://localhost:3000')
	} catch (e) {
		console.log(`HTTP Server stoped ERROR: ${e}`)
		process.exit(1)
	}
}

main()
