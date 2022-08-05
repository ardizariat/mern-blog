import globalReducer from "./globalReducer";
import articlesReducer from "./articlesReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  globalReducer,
  articlesReducer,
});

export default reducers;
