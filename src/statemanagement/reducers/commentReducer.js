import {
  GET_COMMENTS_SUCCESS,
  ADD_COMMENT,
  GET_COMMENTS_FAIL,
} from '../types/types';

const initialState = {
  comments: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_COMMENTS_SUCCESS:
      return {...state, comments: payload};
    case GET_COMMENTS_FAIL:
      return {...state, comments: []};
    case ADD_COMMENT:
      return {...state, ...payload};
    default:
      return state;
  }
}
