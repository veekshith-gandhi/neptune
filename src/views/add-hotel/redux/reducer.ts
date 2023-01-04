import type { Action } from '../../../model';
import type { HotelCreationState } from '../types';
import Events from './events';

const initialState: HotelCreationState = {
  basic: {
    propertyName: '',
    starRating: '',
    date: '',
    contactNumber: '',
    email: '',
  },
  location: {
    lat: '',
    lng: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  },
  rooms: {
    roomname: '',
    description: '',
    availablerooms: 1,
    roomtype: '',
    smokingallowed: true,
    length: '',
    breadth: '',
    squarefeet: '',
    extrabed: true,
  },
  roomprice: {
    baseoccupancy: 1,
    baseprice: '',
    extraadults: 1,
    extrachild: 1,
    adultsprice: '',
    noguestallowed: 1,
    pricerange1: '',
    pricerange2: '',
    availablefrom: '',
    avilableto: '',
  },
  amenities: [''],
  submitedId: '',
  submitedRoomId: '',
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Events.ADD_BASIC_DETAILS:
      return { ...state, basic: action.payload };
    case Events.SUBMIT_ID:
      return { ...state, submitedId: action.payload };
    case Events.ADD_LOCATION_DETAILS:
      return { ...state, location: action.payload };
    case Events.ADD_HOTEL_ROOMS:
      return { ...state, rooms: action.payload };
    case Events.SUBMITED_ROOM_ID:
      return { ...state, submitedRoomId: action.payload };
    case Events.ADD_HOTEL_ROOMS_PRICE:
      return { ...state, roomprice: action.payload };
    default:
      return state;
  }
};

export default reducer;
