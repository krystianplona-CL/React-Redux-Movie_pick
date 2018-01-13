import React,{ Component } from 'react';
import { connect } from 'react-redux';

class MoviesList extends Component {
  
  renderMovie(element) {
    if(element.Response === "False"){
      return null
    }
    return (
      <tr key={element.Title}>
        <td>{element.Title}</td>
        <td>{element.Released}</td>
        <td>{element.Runtime}</td>
      </tr>
    )
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Released</th>
            <th>Runtime</th>
          </tr>
        </thead> 
        <tbody>
          {this.props.selectedMovie.map(this.renderMovie)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ selectedMovie }){
  return { selectedMovie } // { selectedMovie: selectedMovie}
}

export default connect(mapStateToProps)(MoviesList)