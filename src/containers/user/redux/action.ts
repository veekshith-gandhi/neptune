import axios from "axios";
import config from "../../../config";
import { UserDetails } from "../../../model/user.model";
import { ForgotPasswordData, LoginDetails, SignUpDetails } from "../model";
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
	payload: axios.post(`${config.API_URL}/account/forgot-password`, forgotDetails)
});

export const clearForgotPassword = () => ({
	type: Events.CLEAR_FORGOT_PASSWORD,
	payload: {}
});

export const setLogin = (userDetails: UserDetails) => ({
	type: Events.SET_LOGIN,
	payload: userDetails
});

