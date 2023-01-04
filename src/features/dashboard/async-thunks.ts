import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteHotelInformation,
  getHotels,
} from '../../services/hotel-api-service';

export const fetchHotels = createAsyncThunk('/fetchHotels', async () => {
  try {
    const { data } = await getHotels();
    return data;
  } catch (error) {
    return [];
  }
});

export const deletHotel = createAsyncThunk(
  '/deletHotel',
  async (id: string) => {
    try {
      await deleteHotelInformation(id);
      return id;
    } catch (error) {
      return [];
    }
  }
);
