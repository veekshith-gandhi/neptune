import type { Action } from "../../../../../model";
import type { HotelCreationState } from "../types";
import Events from "./events";

const initialState: HotelCreationState = {
	basic: {
		propertyName: "",
		starRating: "",
		date: "",
		contactNumber: "",
		email: ""
	},
	location: {
		lat: "",
		lng: "",
		locality: "",
		address: "",
		city: "",
		state: "",
		country: "",
		pincode: ""
	},
	amenities: [""]
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case Events.ADD_BASIC_DETAILS:
			return { ...state, basic: action.payload };
		default:
			return state;
	}
};

export default reducer;
