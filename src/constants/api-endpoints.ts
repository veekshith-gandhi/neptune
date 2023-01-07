export const HotelEndPoint = '/hotels/';
export const CountryEndpoint = '/general/country';
export const StateEndpoint = '/general/state?country=';
export const HotelImageEndPoint = '/hotel-images/';
export const HotelRoomsEndPoint = '/rooms/';
export const FinanceLegal = '/finance_legal/';
export const Facilities = '/facilities/?type=';
export const FacilityOptionsByID = (id: string) =>
  `/facilities-options/?facility=${id}`;
export const SelectFacilityOptions = `/submit-facilities/`;
export const SelectAminitiesOptions = `/submit-amenitie/`;
export const SelectFacilitiesRemoveOption = `/submit-facilities/remove_option/`;
export const RoomListByHotelId = `/rooms/?hotel=`;
export const DeleteRoom = `/rooms/`;
export const MediaUpload = `/media_uploads`;
export const HotelPolicy = `/hotel_policies/`;
