export interface HotelEntity {
  id: string;
  completion?: Completion;
  current_location?: null;
  property_name: string;
  hotel_name: null;
  hotel_type: string;
  rating: number;
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
