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
import Apicall from '../../network/ApiCall';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const apiCall = new Apicall();
export const signin = (param) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await apiCall.signin(param);
    if (res.status == 200) {
      if (res.data.status == true) {
        await AsyncStorage.setItem('token', res.data.access_token);
        dispatch({type: SIGNIN_SUCCESS, payload: res.data.access_token});
        dispatch(loadUser());
      } else {
        Alert.alert('error', res.data.message);
        dispatch({type: SIGNIN_FAIL, payload: res.data.message});
      }
    }
  } catch (error) {
    console.log('auth actin error', error);
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await apiCall.loadUser();
    if (res.status == 200) {
      dispatch({
        type: LOAD_USER,
        payload: res.data.data,
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  } catch (error) {
    console.log('loadUser actin error', error);
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({type: SET_LOADING});
};

export const logout = () => (dispatch) => {
  dispatch({type: LOGOUT_SUCCESS});
};
