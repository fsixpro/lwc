import {GET_TRAINING} from '../types/types';
import Apicall from '../../network/ApiCall';

const apiCall = new Apicall();
export const getTraining = (param) => async (dispatch) => {
  const res = await apiCall.getTraining();

  if (res.status == 200) {
    dispatch({
      type: GET_TRAINING,
      payload: res.data.data.trainings.data,
    });
  }
};
