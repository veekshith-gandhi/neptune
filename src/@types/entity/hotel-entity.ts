export interface HotelResponse {
  id: string;
  current_location?: null;
  property_name: string;
  rating: number;
  taking_booking_since: string;
  contact_number: string;
  email: string;
  address?: null;
  city?: null;
  pincode?: null;
  created_at: string;
  updated_at: string;
  state?: null;
  country?: null;
}

export interface HotelEntity {
  id: string;
  completion: Completion;
  current_location?: null;
  property_name: string;
  hotel_name?: null;
  hotel_type: string;
  rating: number;
  taking_booking_since: string;
  contact_number: string;
  email: string;
  address?: null;
  city?: null;
  pincode?: null;
  created_at: string;
  updated_at: string;
  default: boolean;
  is_active: boolean;
  state?: null;
  country?: null;
}
export interface Completion {
  basic_info: boolean;
  location: boolean;
  amenities: boolean;
  rooms: boolean;
  photos: boolean;
  finance_legal: boolean;
}
