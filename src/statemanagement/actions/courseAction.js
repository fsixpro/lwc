import {GET_COURSE} from '../types/types';
import Apicall from '../../network/ApiCall';
const apiCall = new Apicall();
export const getCourse = () => async (dispatch) => {
  try {
    const res = await apiCall.getCourse();
    if (res.status == 200) {
      dispatch({
        type: GET_COURSE,
        payload: res.data.data,
      });
    }
  } catch (error) {}
};
