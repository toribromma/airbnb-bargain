import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import resultsReducer from "./resultsReducers"
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  search: resultsReducer
});