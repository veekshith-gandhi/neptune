import { Action } from "../../../../../model";
import Events  from "./events";
import { dummyHotel, ResponseType } from "../../../../../constants";
import { DashboardReducer } from "../modal";

const initialState: DashboardReducer = {
	hotelList: dummyHotel,
	getHotelCompleted: null
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case Events.GET_ALL_HOTEL_FULFILLED:
			return {
				...state,
				hotel: dummyHotel,
				getHotelCompleted: ResponseType.FULFILLED
			};
		case Events.GET_ALL_HOTEL_REJECTED:
			return {
				...state,
				getHotelCompleted: ResponseType.REJECTED
			};
		case Events.CLEAR_GET_ALL_HOTEL:
			return {
				...state,
				getHotelCompleted: null
			};

		default:
			return state;
	}
};

export default reducer;