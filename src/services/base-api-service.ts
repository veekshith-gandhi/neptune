import axios from 'axios';
import config from '../config';
import { store } from '../store';
export default class BaseApiService {
  protected get axiosInstance() {
    const accessToken = store.getState().userReducer.accessToken;

    // Login for refresh stays here

    return axios.create({
      baseURL: config.API_URL,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
}
