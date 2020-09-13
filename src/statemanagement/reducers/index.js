import {combineReducers} from 'redux';
import auth from './authReducer';
import courses from './courseReducer';
import training from './trainingReducer';

const rootReducer = combineReducers({
  auth,
  courses,
  training,
});
export default rootReducer;
