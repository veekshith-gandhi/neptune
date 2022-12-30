import axios from "axios";
import config from "../config";
import { StoredKeys } from "../constants/index";
export default class BaseApiService {
	getAccessToken() {
		const userDetailString  = localStorage.getItem(StoredKeys.USER_DETAILS);
		if (userDetailString) {
			const userDetails = JSON.parse(window.atob(userDetailString));
			return "Bearer " + userDetails?.tokens?.access;
		} else {
			return "";
		}
	}
	get axiosInstance() {
		return axios.create({ baseURL: config.API_URL, headers: { Authorization: this.getAccessToken() } });
	}
}