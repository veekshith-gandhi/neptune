import { createAsyncThunk } from '@reduxjs/toolkit';
import { getHotels } from '../../services/hotel-api-service';

export const fetchHotels = createAsyncThunk('/fetchHotels', async () => {
  try {
    const { data } = await getHotels();
    return data;
  } catch (error) {
    return [];
  }
});
