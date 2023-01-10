export interface HotelEntity {
  id: string;
  completion?: Completion;
  current_location?: null;
  property_name: string;
  hotel_name: null;
  hotel_type: string;
  rating: number;
  hotel_policies: HotelPolicyEntity;
  taking_booking_since: string;
  contact_number: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  created_at?: string;
  updated_at?: string;
  default: boolean;
  is_active: boolean;
  state: string;
  country: string;
}
export interface Completion {
  basic_info: boolean;
  location: boolean;
  amenities: boolean;
  rooms: boolean;
  photos: boolean;
  finance_legal: boolean;
}
export interface FacilitiesEntity {
  id: string;
  name?: string;
  type: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface FacilityOption {
  facility: string;
  id: string;
  is_submitted: boolean;
  name: string;
}
export interface RoomList {
  id: string;
  media: never[];
  room_name: string;
  description: string;
  available_room: number;
  room_type: string;
  room_length: string;
  room_breadth: string;
  square_feet: string;
  is_smoking_allowed: boolean;
  extra_bed: boolean;
  base_occupancy: number;
  base_price: string;
  number_of_extra_adult: number;
  extra_adult_price: string;
  number_of_child: number;
  child_price_range_1: string;
  child_price_range_2: string;
  max_number_guest: number;
  available_from: string;
  available_to: string;
  hotel: string;
}

export interface HotelPolicyEntity {
  check_in: string;
  check_out: string;
  cancellation_policies: number;
  hotel: string;
  id?: string;
}
