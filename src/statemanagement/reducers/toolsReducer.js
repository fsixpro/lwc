import {GET_TOOLS} from '../types/types';

const initialState = {
  tools: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_TOOLS:
      return {...state, tools: payload};

    default:
      return state;
  }
}
