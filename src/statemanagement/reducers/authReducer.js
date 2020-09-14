import {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER,
  AUTH_ERROR,
  SET_LOADING,
  LOGOUT_SUCCESS,
} from '../types/types';

const initialState = {
  user: null,
  isLogged: false,
  loading: false,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SIGNIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLogged: true,
        loading: false,
      };
    case SIGNIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        isLogged: false,
        user: null,
        loading: false,
      };
    case LOAD_USER:
      return {
        ...state,
        isLogged: true,
        user: payload,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        user: null,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
