import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { input: ''}
    
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  onInputChange(event) {
    this.setState({ input: event.target.value })
  }
  
  render() {
    return (
      <form className="input-group">
        <input 
          placeholder="Get a movie details"
          className="form-control"
          value={this.state.input}
          onChange={this.onInputChange}/>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

export default SearchBar;
