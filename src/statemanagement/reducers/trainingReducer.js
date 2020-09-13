import {GET_TRAINING} from '../types/types';

const initialState = {
  loading: true,
  training: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_TRAINING:
      return {...state, training: payload, loading: false};

    default:
      return state;
  }
}
