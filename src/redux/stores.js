import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import uiReducer from "./reducers/uiReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const initialState = {};

const reducers = combineReducers({
  ui: uiReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
