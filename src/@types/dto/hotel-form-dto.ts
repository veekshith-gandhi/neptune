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

export interface SubmitHotelRoomInfoDTO {
  room_name?: string;
  description?: string;
  available_room?: number;
  available_from?: string;
  available_to?: string;
  room_type?: string;
  room_length?: string;
  room_breadth?: string;
  square_feet?: string;
  is_smoking_allowed?: boolean;
  extra_bed?: boolean;
  base_occupancy?: number;
  base_price?: string;
  number_of_extra_adult?: number;
  extra_adult_price?: string;
  number_of_child?: number;
  child_price_range_1?: string;
  child_price_range_2?: string;
  max_number_guest?: number;
  hotel?: string;
}

export interface HotelPolicyDTO {
  check_in: string;
  check_out: string;
  cancellation_policies: number;
  hotel: string;
  id: string;
}
