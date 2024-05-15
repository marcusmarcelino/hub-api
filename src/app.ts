import buildServer from './server'

const server = buildServer()
async function main() {
	try {
		await server.listen({
			host: '0.0.0.0',
			port: process.env.PORT ? Number(process.env.PORT) : 3333,
		})

		console.log('HTTP Server started - http://localhost:3000')
	} catch (e) {
		console.log(`HTTP Server stoped ERROR: ${e}`)
	}
}

main()
