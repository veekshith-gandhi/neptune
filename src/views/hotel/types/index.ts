export interface HotelCreationState {
  basic: HotelCreationBasicInput;
  location: HotelCreationLocationDetails;
  amenities: string[];
  submitedId: string;
  rooms: HotelRoomsCreation;
  roomprice: HotelRoomPriceCreation;
  submitedRoomId: string;
}
export type HotelCreationBasicInput = {
  propertyName: string;
  starRating: string;
  date: string;
  contactNumber: string;
  email: string;
};
export type HotelCreationLocationDetails = {
  lat: string;
  lng: string;
  locality: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
};

export type HotelRoomPriceCreation = {
  baseoccupancy: number;
  baseprice: string;
  extraadults: number;
  extrachild: number;
  adultsprice: string;
  noguestallowed: number;
  pricerange1: string;
  pricerange2: string;
  availablefrom: string;
  avilableto: string;
};

export type HotelRoomsCreation = {
  roomname: string;
  description: string;
  availablerooms: number;
  roomtype: string;
  smokingallowed: boolean;
  length: string;
  breadth: string;
  squarefeet: string;
  extrabed: boolean;
};
export interface CountryEntity {
  id: number;
  name: string;
  country_code: string;
  language_code: string;
  currency_code: string;
}

export interface StateEntity {
  country: number;
  name: string;
}
