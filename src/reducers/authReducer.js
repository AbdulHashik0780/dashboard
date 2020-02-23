import constants from '../constants'
const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN_FAILURE:
      return {
        ...state,
        isLoginSuccess: false,
        user: null,
        errorMessage: action.payload
      }
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoginSuccess: true,
        errorMessage: null,
      }
    case constants.REGISTER_FAILURE:
      return {
        ...state,
        signupError: action.payload
      }
    case constants.REGISTER_SUCCESS:
      return {
        ...state,
        signupError: null
      }
    case constants.CLEAR_ERRORS:
      return {
        ...state,
        signupError: null,
        errorMessage: null,
      }
  }
  return state;
}

export default authReducer;