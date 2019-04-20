import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getMoviesQuery } from '../queries/queries';
import { deleteMovieMutation } from '../mutations/mutations'

class MovieList extends Component {

  deleteMovie(event, id) {
    event.preventDefault();
    this.props.deleteMovieMutation({
      variables: {
        id: id
      },
      refetchQueries: [{
        query: getMoviesQuery
      }]
    });
  }

  displayMovies() {
    let data = this.props.getMoviesQuery;

    return (data.loading) ? (
      <div>Carregando filmes...</div>
    ) : data.movies.map(movie => {
      return(
        <li key={ movie.id }>
          { movie.name } - { movie.genre } - { movie.year }
          <br/>
          <a className="delete-btn" href="/" onClick={
            (e) => { this.deleteMovie(e, movie.id) }
          }> Excluir</a>
        </li>
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

export default compose(
  graphql(getMoviesQuery, { name: "getMoviesQuery" }),
  graphql(deleteMovieMutation, { name: "deleteMovieMutation" })
)(MovieList);
