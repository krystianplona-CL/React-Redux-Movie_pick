import { FETCH_MOVIE } from "../actions/fetchSelectedMovie";
import { FETCH_MOVIE_LIST } from "../actions/fetchMovieList";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIE:
      if(action.payload.data.Response === "False"){
        return state;
      } 
      else{
        return [action.payload.data, ...state];
      }
    case FETCH_MOVIE_LIST:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}