import {combineReducers} from 'redux';
import auth from './authReducer';
import courses from './courseReducer';
import training from './trainingReducer';
import zone from './zoneReducer';
import church from './churchReducer';

const rootReducer = combineReducers({
  auth,
  courses,
  training,
  zone,
  church,
});
export default rootReducer;
