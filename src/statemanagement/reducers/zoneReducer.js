import {GET_ZONES} from '../types/types';

const initialState = {
  zones: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_ZONES:
      return {...state, zones: payload};

    default:
      return state;
  }
}
