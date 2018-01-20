import axios from 'axios';

const API_KEY = 'AIzaSyBBgz_WQRMniH2WaAYoOSDi2sbFDMxs8jo';
const ROOT_URL = `https://movie-picker-ff027.firebaseio.com/.json`;

export const FETCH_MOVIE_LIST = 'FETCH_MOVIE_LIST';

export function fetchMovieList() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_MOVIE_LIST,
    payload: request
  };
}
