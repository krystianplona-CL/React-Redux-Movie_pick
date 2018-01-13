import { combineReducers } from "redux";
import selectedMovie from "./reducer_typed_movie";

const rootReducer = combineReducers({
  selectedMovie: selectedMovie
});

export default rootReducer;