import { combineReducers } from "redux";

import { reducer as headerReducer } from "../components/header/store";

const rootReducer = combineReducers({
  header: headerReducer,
});

export default rootReducer;
