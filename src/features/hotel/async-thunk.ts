import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deletRoomInformation,
  fetchFacilitiesList,
  fetchListofRoomsCreated,
} from '../../services/hotel-api-service';

export const fetchFacilites = createAsyncThunk(
  '/fetchFacilites',
  async (payload: string) => {
    try {
      const { data } = await fetchFacilitiesList(payload);
      // console.log(data);
      return data;
    } catch (error) {
      return [];
    }
  }
);

export const fetchRoomFacilites = createAsyncThunk(
  '/fetchRoomFacilites',
  async (payload: string) => {
    try {
      const { data } = await fetchFacilitiesList(payload);
      // console.log(data);
      return data;
    } catch (error) {
      return [];
    }
  }
);

export const fetchRoomList = createAsyncThunk(
  '/fetchRoomList',
  async (payload: string) => {
    try {
      const { data } = await fetchListofRoomsCreated(payload);
      // console.log(data);
      return data;
    } catch (error) {
      return [];
    }
  }
);
export const deletRoomList = createAsyncThunk(
  '/deletRoomList',
  async (payload: string) => {
    try {
      await deletRoomInformation(payload);
      return payload;
    } catch (error) {
      return [];
    }
  }
);
