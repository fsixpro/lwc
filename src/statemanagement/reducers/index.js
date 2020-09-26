import {combineReducers} from 'redux';
import auth from './authReducer';
import courses from './courseReducer';
import training from './trainingReducer';
import zone from './zoneReducer';
import church from './churchReducer';
import tools from './toolsReducer';
import video from './videoReducer';
import comments from './commentReducer';

const rootReducer = combineReducers({
  auth,
  courses,
  training,
  zone,
  church,
  tools,
  video,
  comments,
});
export default rootReducer;
