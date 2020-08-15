import { combineReducers } from "redux-immutable";

import { reducer as headerReducer } from "../components/header/store";

const rootReducer = combineReducers({
  header: headerReducer,
});

export default rootReducer;
