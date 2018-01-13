import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../style/App.css';

import MainPage from './MainPage'
import MovieList from './MovieList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact={true} render={() => {
            return <MainPage/>
          }}/>
          <Route path="/movie_list" exact={true} render={() => {
            return <MovieList/>
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
