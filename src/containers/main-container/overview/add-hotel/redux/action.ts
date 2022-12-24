
import Events from "./events";

export const addBasicInfoToHotelCreation = (payload: any) => ({
	type: Events.ADD_BASIC_DETAILS,
	payload
});
