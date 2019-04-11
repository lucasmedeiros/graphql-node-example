const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }) {
            const query = await db('users')
                .where({ id })
                .first()
            
            return query
        },

        async getUsers() {
            query = await db('users')

            return query
        }
    },

    Mutation: {
        async createUser(_, { input }) {
            const result = await db('users').insert({
                name: input.name,
                password: input.password
            })

            const id = result[0]

            return await db('users').where({ id }).first()
        }
    }
}
