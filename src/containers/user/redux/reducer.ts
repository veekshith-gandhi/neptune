import { Action } from "../../../model";
import Events  from "./events";
import { UserModelReducer } from "../model";
import { ResponseType } from "../../../constants";

const initialState: UserModelReducer = {
	userDetails: { access: "", refresh: "" },
	loginCompleted: null,
	signUpCompleted: null,
	verifyCompleted: null,
	loginDetails: { access: "", refresh: "" },
	forgotPasswordCompleted: null
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case Events.LOGIN_FULFILLED:
			return {
				...state,
				loginDetails: action.payload.data,
				loginCompleted: ResponseType.FULFILLED
			};
		case Events.LOGIN_REJECTED:
			return {
				...state,
				loginCompleted: ResponseType.REJECTED
			};
		case Events.CLEAR_LOGIN:
			return {
				...state,
				loginCompleted: null
			};

		case Events.SIGN_UP_FULFILLED:
			return {
				...state,
				signUpCompleted: ResponseType.FULFILLED
			};
		case Events.SIGN_UP_REJECTED:
			return {
				...state,
				signUpCompleted: ResponseType.REJECTED
			};
		case Events.CLEAR_SIGN_UP:
			return {
				...state,
				signUpCompleted: null
			};

		case Events.VERIFY_FULFILLED:
			return {
				...state,
				verifyCompleted: ResponseType.FULFILLED
			};
		case Events.VERIFY_REJECTED:
			return {
				...state,
				verifyCompleted: ResponseType.REJECTED
			};
		case Events.CLEAR_VERIFY:
			return {
				...state,
				verifyCompleted: null
			};

		case Events.FORGOT_PASSWORD_FULFILLED:
			return {
				...state,
				forgotPasswordCompleted: ResponseType.FULFILLED
			};
		case Events.FORGOT_PASSWORD_REJECTED:
			return {
				...state,
				forgotPasswordCompleted: ResponseType.REJECTED
			};
		case Events.CLEAR_FORGOT_PASSWORD:
			return {
				...state,
				forgotPasswordCompleted: null
			};

		case Events.SET_LOGIN:
			return {
				...state,
				userDetails: action.payload
			};

		default:
			return state;
	}
};

export default reducer;