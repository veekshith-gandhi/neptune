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
	amenities: [""],
	submitedId: ""
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case Events.ADD_BASIC_DETAILS:
			return { ...state, basic: action.payload };
		case Events.SUBMIT_ID:
			return { ...state, submitedId: action.payload };
		case Events.ADD_LOCATION_DETAILS:
			return { ...state, location: action.payload };
		default:
			return state;
	}
};

export default reducer;
