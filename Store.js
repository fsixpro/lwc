import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({realtime: true, port: 8081});
const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);
export default store;
