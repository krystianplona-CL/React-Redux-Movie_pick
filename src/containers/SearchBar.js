import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedMovie } from '../actions/fetchSelectedMovie';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { input: '' }
    
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onInputChange(event) {
    this.setState({ input: event.target.value })
  }
  
  onFormSubmit(event) {
    event.preventDefault();

    //get typed movie
    this.props.fetchSelectedMovie(this.state.input);
    this.setState({ input: '' });
  }
  
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a movie details"
          className="form-control"
          value={this.state.input}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSelectedMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
