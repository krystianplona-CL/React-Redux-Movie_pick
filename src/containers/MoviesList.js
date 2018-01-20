import React,{ Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class MoviesList extends Component {
  constructor(props){
    super(props);

    this.renderMovie = this.renderMovie.bind(this);
  }

  onButtonClick(movieData) {

    const ROOT_URL = `https://movie-picker-ff027.firebaseio.com/`;
    console.log(movieData);
    axios({
      method: 'get',
      url: 'https://movie-picker-ff027.firebaseio.com/.json',
    }).then((data)=>{
      const number = data.data.length ++;
      axios({
        method: 'post',
        url: `https://movie-picker-ff027.firebaseio.com/${number}/.json`,
        data: {
          Title: movieData.Title,
          Released: movieData.Released,
          Runtime: movieData.Runtime,
        }
      })
    });



  }
  renderMovie(element) {
    if(element.Response === "False"){
      return null
    }
    else{
      const movieData = {
        Title: element.Title,
        Released: element.Released,
        Runtime: element.Runtime
      }
      return (
        <tr key={element.Title}>
          <td>{element.Title}</td>
          <td>{element.Released}</td>
          <td>{element.Runtime}</td>
          <td>
            <button type="button" className="btn btn-success" onClick={()=>{this.onButtonClick(movieData)}}>
              Add
            </button>
          </td>
        </tr>
      )
    }
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Released</th>
            <th>Runtime</th>
            <th>Add</th>
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
  return { selectedMovie }
}

export default connect(mapStateToProps)(MoviesList)
