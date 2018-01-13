import { FETCH_MOVIE } from "../actions/fetchSelectedMovie";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return [action.payload.data, ...state];
  }
  return state;
}