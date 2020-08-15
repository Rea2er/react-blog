import { combineReducers } from "redux-immutable";

import { reducer as headerReducer } from "../components/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";

const rootReducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
});

export default rootReducer;
