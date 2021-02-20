import {GET_COURSE} from '../types/types';

const initialState = {
  loading: true,
  courses: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_COURSE:
      return {...state, courses: payload, loading: false};

    default:
      return state;
  }
}
