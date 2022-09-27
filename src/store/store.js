import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./root-reducer";

const middleware = [];

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middleware)
);

export default store;
