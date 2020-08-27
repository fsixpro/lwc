import {REGISTER_SUCCESS, REGISTER_FAIL} from './types';
import Apicall from '../network/ApiCall';
const apiCall = new Apicall();

export const register = (formInput) => async (dispatch) => {
  try {
    const res = await apiCall.register(formInput);
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
