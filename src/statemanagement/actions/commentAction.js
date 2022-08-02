import {
  ADD_COMMENT,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_SUCCESS,
} from '../types/types';
import Apicall from '../../network/ApiCall';

const apiCall = new Apicall();
export const getVideoComment = (param) => async (dispatch) => {
  try {
    const res = await apiCall.getVideoComment(param);

    if (res.status == 200) {
      if (res.data.message == 'success') {
        dispatch({
          type: GET_COMMENTS_SUCCESS,
          payload: res.data.data,
        });
      } else {
        dispatch({
          type: GET_COMMENTS_FAIL,
          payload: null,
        });
      }
    }
  } catch (error) {}
};
export const addVideoComment = (param) => async (dispatch) => {
  try {
    const res = await apiCall.addVideoComment(param);

    if (res.status == 200) {
      dispatch({
        type: ADD_COMMENT,
        payload: res.data.data,
      });
    }
  } catch (error) {}
};
