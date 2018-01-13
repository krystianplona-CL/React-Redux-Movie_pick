import React, { Component } from 'react';

import SearchBar from "../containers/SearchBar"

class MainPage extends Component {
  render() {
    return (
      <div>
        Welcome! Find your favourite movie and add it to you list.
        <SearchBar />
      </div>
    );
  }
}

export default MainPage;
