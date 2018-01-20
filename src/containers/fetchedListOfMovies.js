import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovieList } from '../actions/fetchMovieList';

class FetchedListOfMovies extends Component {

  constructor(props){
    super(props);
    this.state = {

    }

    this.props.fetchMovieList();
    this.mapUserList = this.mapUserList.bind(this);
  }

  mapUserList(element, index) {
    return (
      <tr key={index}>
        <td>{element.Title}</td>
        <td>{element.Released}</td>
        <td>{element.Runtime}</td>
      </tr>
    )
  }

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
          {this.props.userList[0] && this.props.userList[0].map(this.mapUserList)}
        </tbody>
      </table>
      </div>
    );
  }
}

function mapStateToProps({ userList }){
  return { userList }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovieList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchedListOfMovies);
