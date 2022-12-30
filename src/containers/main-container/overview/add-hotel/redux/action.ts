
import Events from "./events";

export const addBasicInfoToHotelCreation = (payload: any) => ({
	type: Events.ADD_BASIC_DETAILS,
	payload
});

export const addSubmitedIdToHotel = (payload: string) => ({
	type: Events.SUBMIT_ID,
	payload
});

export const addLocationHotelCreation = (payload:any) => ({
	type: Events.ADD_LOCATION_DETAILS,
	payload
});