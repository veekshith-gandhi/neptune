export interface HotelCreationState {
    basic: HotelCreationBasicInput;
    location: HotelCreationLocationDetails;
    amenities: string[];
}

export type HotelCreationBasicInput = {
    propertyName: string;
    starRating: string;
    date: string;
    contactNumber: string;
    email: string;
}
export type HotelCreationLocationDetails = {
    lat: string;
    lng: string;
    locality: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
}