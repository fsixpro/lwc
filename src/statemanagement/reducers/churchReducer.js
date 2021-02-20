import {GET_CHURCHES} from '../types/types';

const initialState = {
  churches: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_CHURCHES:
      return {...state, churches: payload};

    default:
      return state;
  }
}
