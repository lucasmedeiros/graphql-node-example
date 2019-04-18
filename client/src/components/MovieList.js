import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getMoviesQuery = gql`
{
	movies {
    name
    genre
    year
  }
}
`;

class MovieList extends Component {
  displayMovies() {
    let data = this.props.data;
    if (data.loading) {
      return(
        <div>Carregando filmes...</div>
      );
    } else {
      return data.movies.map(movie => {
        return(
          <li>{ movie.name } - { movie.genre } - { movie.year }</li>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="movie-list">
          {this.displayMovies()}
        </ul>
      </div>
    );
  }
}

export default graphql(getMoviesQuery)(MovieList);
