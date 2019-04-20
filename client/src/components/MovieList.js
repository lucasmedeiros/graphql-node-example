import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getMoviesQuery } from '../queries/queries';

class MovieList extends Component {
  displayMovies() {
    let data = this.props.data;

    return (data.loading) ? (
      <div>Carregando filmes...</div>
    ) : data.movies.map(movie => {
      return(
        <li key={ movie.id }> { movie.name } - { movie.genre } - { movie.year }</li>
      );
    });
    
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
