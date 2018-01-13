import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../style/App.css';

import MainPage from './MainPage'
import ListSubpage from './ListSubpage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Route path="/" exact={true} render={() => {
            return <MainPage/>
          }}/>
          <Route path="/movie_list" exact={true} render={() => {
            return <ListSubpage/>
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
