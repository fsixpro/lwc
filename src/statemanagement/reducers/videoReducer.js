import {GET_VIDEO} from '../types/types';

const initialState = {};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_VIDEO:
      return {...state, ...payload};
    default:
      return state;
  }
}
