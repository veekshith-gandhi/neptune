import { CountryEndpoint, StateEndpoint } from '../constants/api-endpoints';
import BaseApiService from './base-api-service';

class CountryAndStateApiService extends BaseApiService {
  getCountryInfo = (id?: string) => {
    if (!id) {
      return this.axiosInstance.get(CountryEndpoint);
    }
    return this.axiosInstance.get(CountryEndpoint + `${id}/`);
  };
  getStateInfo = (id: string) => {
    if (id) {
      return this.axiosInstance.get(StateEndpoint + `${id}`);
    }
  };
}

export const { getCountryInfo, getStateInfo } = new CountryAndStateApiService();
