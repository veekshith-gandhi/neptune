import {
  SubmitBasicHotelInfoDTO,
  SubmitHotelRoomInfoDTO,
} from '../@types/dto/hotel-form-dto';
import {
  FacilitiesEntity,
  FacilityOption,
  HotelEntity,
} from '../@types/entity/hotel-entity';
import {
  DeleteRoom,
  Facilities,
  FacilityOptionsByID,
  FinanceLegal,
  HotelEndPoint,
  HotelImageEndPoint,
  HotelRoomsEndPoint,
  RoomListByHotelId,
  SelectAminitiesOptions,
  SelectFacilitiesRemoveOption,
  SelectFacilityOptions,
} from '../constants/api-endpoints';
import BaseApiService from './base-api-service';

class HotelFormApiService extends BaseApiService {
  submitBasicHotelInfo = <T = any>(
    payload: SubmitBasicHotelInfoDTO,
    id: string
  ) => {
    if (!id) {
      return this.axiosInstance.post<T>(HotelEndPoint, payload);
    }
    return this.axiosInstance.patch<T>(HotelEndPoint + `${id}/`, payload);
  };
  submitBasicLocationInfo = <T = any>(payload: any, id: string) => {
    if (!id) {
      return this.axiosInstance.post<T>(HotelEndPoint, payload);
    }
    return this.axiosInstance.patch<T>(HotelEndPoint + `${id}/`, payload);
  };
  uploadHotelImage = (fd: FormData) => {
    return this.axiosInstance.post(HotelImageEndPoint, fd);
  };
  deleteHotelInformation = (id: any) => {
    return this.axiosInstance.delete(HotelEndPoint + `${id}/`);
  };
  getHotelInformation = () => {
    return this.axiosInstance.get(HotelEndPoint);
  };
  submitHotelRoomInformation = <T = any>(
    payload: SubmitHotelRoomInfoDTO,
    id: string
  ) => {
    if (!id) {
      return this.axiosInstance.post<T>(HotelRoomsEndPoint, payload);
    }
    return this.axiosInstance.patch<T>(HotelRoomsEndPoint + `${id}/`, payload);
  };
  submitHotelRoomPriceInformation = <T = any>(
    payload: SubmitHotelRoomInfoDTO,
    id: string
  ) => {
    if (!id) {
      return this.axiosInstance.post<T>(HotelRoomsEndPoint, payload);
    }
    return this.axiosInstance.patch<T>(HotelRoomsEndPoint + `${id}/`, payload);
  };
  submitFinanceLegalInformation = (fd: FormData, id: string) => {
    if (id) {
      return this.axiosInstance.patch(FinanceLegal + `${id}/`, fd);
    }
    return this.axiosInstance.post(FinanceLegal, fd);
  };
  /**
   *
   */
  getHotels = () => {
    return this.axiosInstance.get<HotelEntity[]>(HotelEndPoint);
  };
  /**
   * Amenities
   */
  fetchFacilitiesList = (payload: string) => {
    return this.axiosInstance.get<FacilitiesEntity[]>(
      Facilities + `${payload}`
    );
  };
  getFacilityOptionsByID = (id: string, hotelId?: string) => {
    return this.axiosInstance.get<FacilityOption[]>(
      FacilityOptionsByID(id) + `&hotel=${hotelId}&type=HOTEL`
    );
  };
  getRoomFacilityOptionsByID = (id: string, hotelId?: string) => {
    return this.axiosInstance.get<FacilityOption[]>(
      FacilityOptionsByID(id) + `&room=${hotelId}&type=ROOM`
    );
  };
  checkFacilityOptions = (hotelId: string, optionId: string) => {
    return this.axiosInstance.post(SelectFacilityOptions, {
      hotel: hotelId,
      options: optionId,
    });
  };
  checkAminitieOptions = (roomId: string, optionId: string) => {
    return this.axiosInstance.post(SelectAminitiesOptions, {
      room: roomId,
      options: optionId,
    });
  };
  uncheckFacilityOption = (hotelId: string, optionId: string) => {
    return this.axiosInstance.post(SelectFacilitiesRemoveOption, {
      hotel: hotelId,
      options: optionId,
    });
  };
  uncheckAminitieOption = (roomId: string, optionId: string) => {
    return this.axiosInstance.post(SelectFacilitiesRemoveOption, {
      room: roomId,
      options: optionId,
    });
  };
  fetchListofRoomsCreated = (hotelId: string) => {
    return this.axiosInstance.get(RoomListByHotelId + `${hotelId}`);
  };
  deletRoomInformation = (roomId: string) => {
    return this.axiosInstance.delete(DeleteRoom + `${roomId}`);
  };
}
export const {
  submitBasicHotelInfo,
  submitBasicLocationInfo,
  uploadHotelImage,
  getHotelInformation,
  deleteHotelInformation,
  submitHotelRoomInformation,
  submitHotelRoomPriceInformation,
  submitFinanceLegalInformation,
  fetchFacilitiesList,
  getHotels,
  getFacilityOptionsByID,
  checkFacilityOptions,
  getRoomFacilityOptionsByID,
  uncheckFacilityOption,
  checkAminitieOptions,
  uncheckAminitieOption,
  fetchListofRoomsCreated,
} = new HotelFormApiService();
