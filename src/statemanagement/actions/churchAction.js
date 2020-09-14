import {GET_CHURCHES} from '../types/types';
import Apicall from '../../network/ApiCall';
const apiCall = new Apicall();
export const getChurch = (zoneid) => async (dispatch) => {
  try {
    const res = await apiCall.getChurch(zoneid);
    if (res.status == 200) {
      dispatch({
        type: GET_CHURCHES,
        payload: res.data.data,
      });
    }
  } catch (error) {
    console.log('getCourse action error', error);
  }
};
