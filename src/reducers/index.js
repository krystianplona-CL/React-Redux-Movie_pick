import { combineReducers } from "redux";
import selectedMovie from "./reducer_typed_movie";
import userList from "./reducer_typed_movie";

const rootReducer = combineReducers({
  selectedMovie: selectedMovie,
  userList: userList
});

export default rootReducer;
