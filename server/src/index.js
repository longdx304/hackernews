const { GraphQLServer } = require('graphql-yoga')

// Define Schema
const typeDefs = `
type Query {
    info: String!
}
`

// Define implementation of Schema
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`
    }
}

// Create server instance and run
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))


