import axios from "axios";
import config from "../../../../../config";
import Events from "./events";

export const getAllHotel = () => ({
	type: Events.GET_ALL_HOTEL,
	payload: axios.get(`${config.API_URL}/hotel`)
});

export const clearGetAllHotel = () => ({
	type: Events.CLEAR_GET_ALL_HOTEL,
	payload: {}
});