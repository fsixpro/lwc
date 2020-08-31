import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
const middleware = [thunk];
const initialState = {};
const store = createStore(
  () => {},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;
