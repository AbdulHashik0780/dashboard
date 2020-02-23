import * as authService from '../services/auth';
import constants from '../constants';

export const signIn = (payload) => async dispatch => {
  const { data: { success, message, data } } = await authService.login(payload)
  if (!success) {
    return dispatch({
      type: constants.LOGIN_FAILURE,
      payload: message
    });
  }
  localStorage.setItem('token', data.token);
  return dispatch({
    type: constants.LOGIN_SUCCESS,
    payload: data.user
  });
};

export const signUp = (payload) => async dispatch => {
  const { data: { success, message, data } } = await authService.signup(payload)
  if (!success) {
    return dispatch({
      type: constants.REGISTER_FAILURE,
      payload: message
    });
  }
  await dispatch({
    type: constants.REGISTER_SUCCESS,
    payload: data
  });
  window.location.href = '/signin'
  return;
};

export const logout = () => {
  localStorage.clear();
  window.location.href = '/signin';
}

export const clearErrors = () => dispatch => {
  return dispatch({
    type: constants.CLEAR_ERRORS,
    payload: null
  });
}