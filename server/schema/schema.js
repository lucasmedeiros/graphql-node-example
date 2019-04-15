const graphql = require('graphql');
const Movie = require('../models/movie.js');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
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

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        movie: {
            type: MovieType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Movie.findById(args.id);
            }
        },
        
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return Movie.find({});
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
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                year: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve (parent, args) {
                const movie = new Movie({
                    name: args.name,
                    genre: args.genre,
                    year: args.year
                });

                return movie.save();
            }
        },

        deleteMovie: {
            type: MovieType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve (parent, args) {
                const removed = Movie.findByIdAndDelete(args.id).exec();

                if (!removed)
                    throw new Error('Falha ao deletar filme: ID especificado não existe');

                return removed;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});