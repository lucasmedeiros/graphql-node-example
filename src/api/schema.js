const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const usersAttrs = `
    id: ID
    name: String!
    password: String!
`

const typeDefs = `
    type User {
        ${usersAttrs}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${usersAttrs}
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})