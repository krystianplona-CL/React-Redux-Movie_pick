import React, { Component } from 'react';

import SearchBar from '../containers/SearchBar';
import MoviesList from '../containers/MoviesList';

class MainPage extends Component {
  render() {
    return (
      <div>
        Welcome! Find your favourite movie and add it to you list.
        <SearchBar />
        <MoviesList />
      </div>
    );
  }
}

export default MainPage;
