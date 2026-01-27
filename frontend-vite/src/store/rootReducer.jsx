import { combineReducers } from "redux";
import loadingReducer from "./modules/loading/reducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
});

export default rootReducer;
