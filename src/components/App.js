import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import firebase from 'firebase';


import MainPage from './MainPage/MainPage'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    const config = {
      apiKey: "AIzaSyBBgz_WQRMniH2WaAYoOSDi2sbFDMxs8jo",
      authDomain: "movie-picker-ff027.firebaseapp.com",
      databaseURL: "https://movie-picker-ff027.firebaseio.com",
      projectId: "movie-picker-ff027",
      storageBucket: "movie-picker-ff027.appspot.com",
      messagingSenderId: "1035597650388"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact={true} render={() => {
            return <MainPage firebase={firebase}/>
          }}/>
          <Route path="/movie_list" exact={true} render={() => {
            return <div></div>
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
