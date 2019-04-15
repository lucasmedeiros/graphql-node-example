const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

console.log('Estabelecendo conexão...');

// Conexão ao banco de dados
mongoose.connect('mongodb+srv://dev:lalala123@graphqlexample-aisry.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Conectado ao banco de dados.');
    startConnection();
});

function startConnection() {
    const app = express();

    app.use('/api', graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(4000, () => {
        console.log('Executando na porta 4000...');
    });
}