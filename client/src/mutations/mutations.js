import { gql } from 'apollo-boost';

const addMovieMutation = gql`
mutation ($name: String!, $genre: String! $year: Int!) {
  addMovie(name: $name, genre: $genre, year: $year) {
    id
  }
}
`;

const deleteMovieMutation = gql`
mutation($id: ID!) {
  deleteMovie(id: $id) {
    id
  }
} 
`;

export { addMovieMutation, deleteMovieMutation };