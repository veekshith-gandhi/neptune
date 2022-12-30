import { SubmitBasicHotelInfoDTO } from "../@types/dto/hotel-form-dto";
import { HotelEndPoint, HotelImageEndPoint } from "../constants/api-endpoints";
import BaseApiService from "./base-api-service";

class HotelFormApiService extends BaseApiService {
	submitBasicHotelInfo = <T=any>(payload: SubmitBasicHotelInfoDTO, id:string) => {
		if (!id) {
			return this.axiosInstance.post<T>(HotelEndPoint, payload);
		}
		return this.axiosInstance.patch<T>(HotelEndPoint + `${id}/`, payload);
	};
	submitBasicLocationInfo = <T=any>(payload:any, id:string) => {
		if (!id) {
			return this.axiosInstance.post<T>(HotelEndPoint, payload);
		}
		return this.axiosInstance.patch<T>(HotelEndPoint + `${id}/`, payload);
	};
	uploadHotelImage = (fd:FormData) => {
		return this.axiosInstance.post(HotelImageEndPoint, fd);
	};
}
export const { submitBasicHotelInfo, submitBasicLocationInfo, uploadHotelImage } = new HotelFormApiService();