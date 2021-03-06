import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getMoviesQuery } from '../queries/queries';
import { addMovieMutation } from '../mutations/mutations';

class AddMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      year: 0
    }
  }

  clearData() {
    let listInputs = document.querySelectorAll('.input');

    listInputs.forEach((input) => {
      input.value = "";
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.clearData();
    this.props.addMovieMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        year: this.state.year
      },
      refetchQueries: [{
        query: getMoviesQuery
      }]
    });
  }

  render() {
    return (
      <form id="add-movie" onSubmit={ this.submitForm.bind(this) }>
        <h1>Adicionar novo filme</h1>
        <div className="field">
          <label htmlFor="name">Nome do Filme: </label>
          <input className="input" id="name" name="name" type="text" onChange={
            (e) => { this.setState({ name: e.target.value }); }
          } />
        </div>

        <div className="field">
          <label htmlFor="genre">Gênero do filme: </label>
          <input className="input" id="genre" name="genre" type="text" onChange={
            (e) => { this.setState({ genre: e.target.value }); }
          } />
        </div>

        <div className="field">
          <label htmlFor="year">Ano do Filme: </label>
          <input className="input" name="year" id="year" type="text" onChange={
            (e) => { this.setState({ year: parseInt(e.target.value) }) }
          } />
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(addMovieMutation, { name: "addMovieMutation" })
)(AddMovie);