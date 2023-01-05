import { ResponseType } from '../../../constants';
import { Action } from '../../../model';
import { UserModelReducer } from '../model';
import Events from './events';

const initialState: UserModelReducer = {
  userDetails: { access: '', refresh: '' },
  loginCompleted: null,
  signUpCompleted: null,
  verifyCompleted: null,
  forgotPasswordCompleted: null,
  resetPasswordCompleted: null,
  validateTokenCompleted: null,
  accessToken: '',
  isLogged: false,
  refreshToken: '',
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Events.LOGIN_FULFILLED:
      return {
        ...state,
        userDetails: action.payload.data,
        loginCompleted: ResponseType.FULFILLED,
        accessToken: action.payload.data?.tokens?.access,
        isLogged: true,
        refreshToken: action.payload.data?.tokens?.refresh,
      };
    case Events.LOGIN_REJECTED:
      return {
        ...state,
        loginCompleted: ResponseType.REJECTED,
      };
    case Events.CLEAR_LOGIN:
      return {
        ...state,
        loginCompleted: null,
      };

    case Events.SIGN_UP_FULFILLED:
      return {
        ...state,
        signUpCompleted: ResponseType.FULFILLED,
      };
    case Events.SIGN_UP_REJECTED:
      return {
        ...state,
        signUpCompleted: ResponseType.REJECTED,
      };
    case Events.CLEAR_SIGN_UP:
      return {
        ...state,
        signUpCompleted: null,
      };

    case Events.VERIFY_FULFILLED:
      return {
        ...state,
        verifyCompleted: ResponseType.FULFILLED,
      };
    case Events.VERIFY_REJECTED:
      return {
        ...state,
        verifyCompleted: ResponseType.REJECTED,
      };
    case Events.CLEAR_VERIFY:
      return {
        ...state,
        verifyCompleted: null,
      };

    case Events.FORGOT_PASSWORD_FULFILLED:
      return {
        ...state,
        forgotPasswordCompleted: ResponseType.FULFILLED,
      };
    case Events.FORGOT_PASSWORD_REJECTED:
      return {
        ...state,
        forgotPasswordCompleted: ResponseType.REJECTED,
      };
    case Events.CLEAR_FORGOT_PASSWORD:
      return {
        ...state,
        forgotPasswordCompleted: null,
      };

    case Events.VALIDATE_TOKEN_FULFILLED:
      return {
        ...state,
        validateTokenCompleted: ResponseType.FULFILLED,
      };
    case Events.VALIDATE_TOKEN_REJECTED:
      return {
        ...state,
        validateTokenCompleted: ResponseType.REJECTED,
      };
    case Events.CLEAR_VALIDATE_TOKEN:
      return {
        ...state,
        validateTokenCompleted: null,
      };

    case Events.RESET_PASSWORD_FULFILLED:
      return {
        ...state,
        resetPasswordCompleted: ResponseType.FULFILLED,
      };
    case Events.RESET_PASSWORD_REJECTED:
      return {
        ...state,
        resetPasswordCompleted: ResponseType.REJECTED,
      };
    case Events.CLEAR_RESET_PASSWORD:
      return {
        ...state,
        resetPasswordCompleted: null,
      };

    case Events.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
