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
  Facilities,
  FacilityOptionsByID,
  FinanceLegal,
  HotelEndPoint,
  HotelImageEndPoint,
  HotelRoomsEndPoint,
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
  fetchFacilitiesList = (payload: string) => {
    return this.axiosInstance.get<FacilitiesEntity[]>(
      Facilities + `${payload}`
    );
  };
  /**
   *
   */
  getHotels = () => {
    return this.axiosInstance.get<HotelEntity[]>(HotelEndPoint);
  };

  getFacilityOptionsByID = (id: string, hotelId?: string) => {
    return this.axiosInstance.get<FacilityOption[]>(
      FacilityOptionsByID(id) + `&hotel=${hotelId}&type=HOTEL`
    );
  };

  selectFacilityOptions = (hotelId: string, optionId: string) => {
    return this.axiosInstance.post(SelectFacilityOptions, {
      hotel: hotelId,
      facility: optionId,
    });
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
  selectFacilityOptions,
} = new HotelFormApiService();
