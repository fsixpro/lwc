import {GET_VIDEO} from '../types/types';
import Apicall from '../../network/ApiCall';

const apiCall = new Apicall();
export const getVideo = (param) => async (dispatch) => {
  try {
    const res = await apiCall.getVideo(param);

    if (res.status == 200) {
      dispatch({
        type: GET_VIDEO,
        payload: res.data.data,
      });
    }
  } catch (error) {
    console.log('video action', error);
  }
};
