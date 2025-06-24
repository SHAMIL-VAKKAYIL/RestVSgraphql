const express = require('express')
const rateLimit = require('express-rate-limit')

const app = express()

const BookRouter = require('./src/routes/bookRoutes')
const DBconnect = require('./src/config')


const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const typeDefs = require('./src/graphql/schema/book.schema')
const resolvers = require('./src/graphql/resolver/book.resolver')

DBconnect()

const limiter = rateLimit({
    max: 50,
    windowMs: 10 * 60 * 1000,
    message: 'request overload ceck after some time'
})

app.use('/', limiter)
app.use(express.json())

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    await server.start()

    app.use('/graphql', expressMiddleware(server))
    app.use('/api', BookRouter)

    //! REST API:    http://localhost:3000/api
    //! GraphQL API: http://localhost:3000/graphql

    app.listen(3000, () => console.log('server running on port 3000'))
}

startServer()




