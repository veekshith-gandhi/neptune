import {
  SubmitBasicHotelInfoDTO,
  SubmitHotelRoomInfoDTO,
} from '../@types/dto/hotel-form-dto';
import { HotelEntity } from '../@types/entity/hotel-entity';
import {
  HotelEndPoint,
  HotelImageEndPoint,
  HotelRoomsEndPoint,
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

  /**
   *
   */
  getHotels = () => {
    return this.axiosInstance.get<HotelEntity[]>(HotelEndPoint);
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
  getHotels,
} = new HotelFormApiService();
