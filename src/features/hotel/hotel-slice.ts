import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncThunkStates } from '../../@types';
import { HotelEntity } from '../../@types/entity/hotel-entity';
import { HotelCreationBasicInput } from '../../views/hotel/types';

interface AddHotelState {
  addBasicInfoLoadingState: AsyncThunkStates;
  basic: HotelCreationBasicInput;
  editHotelData: HotelEntity | null;
  hotelId: string;
  progressPercentage: number;
}

const initialState: AddHotelState = {
  addBasicInfoLoadingState: 'idle',
  editHotelData: null,
  progressPercentage: 0,
  basic: {
    propertyName: '',
    starRating: '',
    date: '',
    contactNumber: '',
    email: '',
  },
  hotelId: '',
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setEditHotelData: (state, action: PayloadAction<HotelEntity>) => {
      state.editHotelData = action.payload;
      state.basic = {
        contactNumber: action.payload.contact_number,
        date: action.payload.taking_booking_since,
        email: action.payload.email,
        propertyName: action.payload.property_name,
        starRating: action.payload.rating.toString(),
      };
    },
    setProgressPercentage: (state, action) => {
      state.progressPercentage = action.payload;
    },
    resetEditHotelData: (state, action) => {
      state.progressPercentage = 0;
      state.basic = {
        contactNumber: '',
        date: '',
        propertyName: '',
        starRating: '',
        email: '',
      };
    },
    setHotelId: (state, action) => {
      state.hotelId = action.payload;
    },
    addBasicInfo: (state, action: PayloadAction<HotelCreationBasicInput>) => {
      state.basic = action.payload;
    },
  },
});

export const {
  setEditHotelData,
  setHotelId,
  addBasicInfo,
  resetEditHotelData,
  setProgressPercentage,
} = hotelSlice.actions;
