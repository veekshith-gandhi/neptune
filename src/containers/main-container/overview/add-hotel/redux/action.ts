
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
export const addHotelRoomsCreation = (payload:any) => ({
	type: Events.ADD_HOTEL_ROOMS,
	payload
});
export const addSubmitedIdToRoom = (payload:any) => ({
	type: Events.SUBMITED_ROOM_ID,
	payload
});
export const addHotelRoomsPriceCreation = (payload: any) => ({
	type: Events.ADD_HOTEL_ROOMS_PRICE,
	payload
});