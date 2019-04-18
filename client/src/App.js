import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/MovieList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/api/'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Filmes cadastrados na lista</h1>
          <BookList/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
