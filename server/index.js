const path = require('path')
const fastify = require('fastify')({
  logger: true,
})
const { createRequestHandler } = require('./remix-fastify')

// setup public folder (remix build folder)
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../public'),
})

// pass /docs/* to remix handler
fastify.all('/docs/*', createRequestHandler({ build: require('./build') }))

// existing fastify app here
// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
