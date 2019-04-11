const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')

const App = express()

App.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}))

App.listen(4000, () => console.log('Executando...'))
