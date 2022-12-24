export enum StoredKeys  {
	USER_DETAILS =  "USER_DETAILS"
}

export enum Language {
    ENGLISH = "en",
    RUSSIAN = "ru"
}

export enum ResponseType {
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"
}

export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const dummyHotel = [
	{
		hotelName: "Hotel",
		hotelStar: 3,
		location: "some where",
		state: "kerala",
		mobile: "9198929394",
		email: "test@test.com",
		createdDate: new Date(),
		rooms: 10
	}
];