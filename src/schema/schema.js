const graphql = require('graphql');
const Movie = require('../models/movie.js');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} = graphql;

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        year: { type: GraphQLInt }
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        movie: {
            type: MovieType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return 'movie, when ready...';
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return 'movies, when ready...';
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMovie: {
            type: MovieType,
            args: {
                name: { type: GraphQLString },
                genre: { type: GraphQLString },
                year: { type: GraphQLInt }
            },
            resolve (parent, args) {
                const movie = new Movie({
                    name: args.name,
                    genre: args.genre,
                    year: args.year
                });

                return movie.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: Mutation
});