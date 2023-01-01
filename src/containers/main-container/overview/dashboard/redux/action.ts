import config from "../../../../../config";
import { axiosInstance } from "../../../../../services/base-api-service";
import Events from "./events";

export const getAllHotel = () => ({
	type: Events.GET_ALL_HOTEL,
	// payload: axios.get(`${config.API_URL}/hotel`)
	payload: axiosInstance.get(`${config.API_URL}/hotels`)
});

export const clearGetAllHotel = () => ({
	type: Events.CLEAR_GET_ALL_HOTEL,
	payload: {}
});