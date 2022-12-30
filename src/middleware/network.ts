import axios, { AxiosResponse } from "axios";
import { message } from "antd";
import { UserDetails } from "../model/user.model";
import { StoredKeys } from "../constants";
export const setupInterceptors = () => {
	axios.interceptors.response.use(
		(response) => {
			return handleResponse(response);
		},
		(error) => {
			return handleResponse(error.response);
		}
	);
	axios.interceptors.request.use(
		function (config: any) {
			config.headers.get["Content-Type"] = "application/json";
			const userDetailString: string | null = localStorage.getItem(StoredKeys.USER_DETAILS);
			if (userDetailString) {
				const userDetails: UserDetails = JSON.parse(window.atob(userDetailString));
				config.headers.common.Authorization = "Bearer " + userDetails.access;
			}
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
	);
};

const handleResponse = (response: AxiosResponse<any, any>) => {
	if (!response || !response.status) {
		message.error("Something went wrong"); 
		return Promise.reject(response);
	}
	if (response && response.status && (response.status === 403 || response.status === 401)) {
		if (response.config.url?.includes("login")) {
			message.warning(response.data && response.data.detail ? response.data.detail : "Something went wrong");
		}
		else {
			localStorage.removeItem(StoredKeys.USER_DETAILS);
			if (!response.config.url?.includes("password-reset")) {
				location.reload();
			}		
			message.error(response.data && response.data.detail ? response.data.detail : "Something went wrong");
		}
		return Promise.reject(response);
	}
	if (response && response.status.toString().startsWith("5")) {
		message.error(response.data && response.data.detail ? response.data.detail : "Something went wrong");
		return Promise.reject(response);
	}
	if (response.status.toString().startsWith("4")) {
		message.error(response.data && response.data.detail ? response.data.detail : "Something went wrong");
		return Promise.reject(response);
	}
	if (response.data && response.data.detail && response.status.toString().startsWith("2")) {
		if (response.status !== 200) {
			response.data.detail && message.success(response.data.detail);
		}
		return response;
	}
    
	return response;
};