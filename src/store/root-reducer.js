import { combineReducers } from "redux";

import { headTailReducer } from "./head-tail/head-tail.reducer";

export const rootReducer = combineReducers({
  headTail: headTailReducer,
});
