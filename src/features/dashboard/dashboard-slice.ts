import { createSlice } from '@reduxjs/toolkit';
import { AsyncThunkStates } from '../../@types';
import { HotelEntity } from '../../@types/entity/hotel-entity';
import { fetchHotels } from './async-thunks';

interface DashboardState {
  hotelsLoadingState: AsyncThunkStates;
  hotels: HotelEntity[];
}

const initialState: DashboardState = {
  hotelsLoadingState: 'idle',
  hotels: [],
};

export const dashboardSlice = createSlice({
  name: 'dashbaord',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.hotels = action.payload;
      state.hotelsLoadingState = action.meta.requestStatus;
    });
    builder.addCase(fetchHotels.pending, (state, action) => {
      state.hotelsLoadingState = action.meta.requestStatus;
    });
  },
});
