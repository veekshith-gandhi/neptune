import { createSlice } from '@reduxjs/toolkit';
import { AsyncThunkStates } from '../../@types';
import { HotelEntity } from '../../@types/entity/hotel-entity';
import { deletHotel, fetchHotels } from './async-thunks';

interface DashboardState {
  hotelsLoadingState: AsyncThunkStates;
  hotels: HotelEntity[];
  //delete
  hotelDeleteState: AsyncThunkStates;
}

const initialState: DashboardState = {
  hotelsLoadingState: 'idle',
  hotels: [],
  hotelDeleteState: 'idle',
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
    //delete
    builder.addCase(deletHotel.fulfilled, (state, action) => {
      state.hotelDeleteState = action.meta.requestStatus;
      state.hotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload
      );
    });
    builder.addCase(deletHotel.pending, (state, action) => {
      state.hotelDeleteState = action.meta.requestStatus;
    });
  },
});

export const {} = dashboardSlice.actions;
