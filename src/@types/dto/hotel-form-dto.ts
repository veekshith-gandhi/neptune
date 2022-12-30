export interface SubmitBasicHotelInfoDTO {
    property_name: string;
    rating: string;
    taking_booking_since: string;
    contact_number: string;
    email: string;
    address?: string;
    city?: string;
    pincode?: string;
    state?: number;
    country?: number;
    current_location?: string;
}