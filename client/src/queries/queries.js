import { gql } from 'apollo-boost';

const getMoviesQuery = gql`
{
	movies {
    id
    name
    genre
    year
  }
}
`;

export { getMoviesQuery };