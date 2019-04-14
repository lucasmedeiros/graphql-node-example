const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
// const { buildSchema } = require('graphql')

const app = express()

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Executando na porta 4000...')
})
