import {combineReducers} from 'redux';
import auth from './authReducer';
import courses from './courseReducer';
import training from './trainingReducer';
import zone from './zoneReducer';
import church from './churchReducer';
import tools from './toolsReducer';
import video from './videoReducer';

const rootReducer = combineReducers({
  auth,
  courses,
  training,
  zone,
  church,
  tools,
  video,
});
export default rootReducer;
