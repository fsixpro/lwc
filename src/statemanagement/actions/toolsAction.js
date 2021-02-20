import {GET_TOOLS} from '../types/types';
import Apicall from '../../network/ApiCall';
const apiCall = new Apicall();
export const getTools = () => async (dispatch) => {
  try {
    const res = await apiCall.getTools();
    if (res.status == 200) {
      dispatch({
        type: GET_TOOLS,
        payload: res.data.data,
      });
    }
  } catch (error) {
    console.log('getTools action error', error);
  }
};
