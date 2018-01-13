import axios from 'axios';

const API_KEY = '7000d45e';
const ROOT_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchSelectedMovie(movie) {
  const url = `${ROOT_URL}&t=${movie}`;
  const request = axios.get(url);
  
  return {
    type: FETCH_MOVIE,
    payload: request
  };
}