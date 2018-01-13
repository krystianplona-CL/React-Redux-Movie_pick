import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovieList } from '../actions/fetchMovieList';

class FetchedListOfMovies extends Component {
  render() {
    return (
      <div>
      USER MOVIE LIST
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Released</th>
            <th>Runtime</th>
          </tr>
        </thead> 
        <tbody>
        </tbody>
      </table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovieList }, dispatch);
}

export default connect(null, mapDispatchToProps)(FetchedListOfMovies);
