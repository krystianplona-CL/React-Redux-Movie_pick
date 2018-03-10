import { combineReducers } from "redux";
import ListByUserIdReducer from './reducer_listByUserId'

const rootReducer = combineReducers({
    listByUserId: ListByUserIdReducer
});

export default rootReducer;
