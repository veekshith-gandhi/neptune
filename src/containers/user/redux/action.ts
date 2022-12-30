import axios from "axios";
import config from "../../../config";
import { UserDetails } from "../../../model/user.model";
import { ForgotPasswordData, LoginDetails, ResetPasswordDetails, SignUpDetails, ValidateTokenDetails } from "../model";
import Events from "./events";

export const login = (loginDetails: LoginDetails) => ({
	type: Events.LOGIN,
	payload: axios.post(`${config.API_URL}/account/login`, loginDetails)
});

export const clearLogin = () => ({
	type: Events.CLEAR_LOGIN,
	payload: {}
});

export const signUp = (signUpDetails: SignUpDetails) => ({
	type: Events.SIGN_UP,
	payload: axios.post(`${config.API_URL}/account/signup`, signUpDetails)
});

export const clearSignUp = () => ({
	type: Events.CLEAR_SIGN_UP,
	payload: {}
});

export const verify = (token: string) => ({
	type: Events.VERIFY,
	payload: axios.post(`${config.API_URL}/account/email-verify`, { token: token })
});

export const clearVerify = () => ({
	type: Events.CLEAR_VERIFY,
	payload: {}
});

export const forgotPassword = (forgotDetails: ForgotPasswordData) => ({
	type: Events.FORGOT_PASSWORD,
	payload: axios.post(`${config.API_URL}/account/request-reset-email`, forgotDetails)
});

export const clearForgotPassword = () => ({
	type: Events.CLEAR_FORGOT_PASSWORD,
	payload: {}
});

export const validateToken = (validateTokenDetails: ValidateTokenDetails) => ({
	type: Events.VALIDATE_TOKEN,
	payload: axios.get(`${config.API_URL}/account/password-reset/${validateTokenDetails.uidb64}/${validateTokenDetails.token}/`)
});

export const clearValidateToken = () => ({
	type: Events.CLEAR_VALIDATE_TOKEN,
	payload: {}
});

export const resetPassword = (resetDetails: ResetPasswordDetails) => ({
	type: Events.RESET_PASSWORD,
	payload: axios.post(`${config.API_URL}/account/password-reset-complete`, resetDetails)
});

export const clearResetPassword = () => ({
	type: Events.CLEAR_RESET_PASSWORD,
	payload: {}
});

export const setLogin = (userDetails: UserDetails) => ({
	type: Events.SET_LOGIN,
	payload: userDetails
});

