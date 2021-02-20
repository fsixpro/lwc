import {GET_ZONES} from '../types/types';
import Apicall from '../../network/ApiCall';
const apiCall = new Apicall();
export const getZone = () => async (dispatch) => {
  try {
    const res = await apiCall.getZone();
    if (res.status == 200) {
      dispatch({
        type: GET_ZONES,
        payload: res.data.data,
      });
    }
  } catch (error) {
    console.log('getCourse action error', error);
  }
};
