import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncThunkStates } from '../../@types';
import {
  FacilitiesEntity,
  HotelEntity,
} from '../../@types/entity/hotel-entity';
import {
  HotelCreationBasicInput,
  HotelCreationLocationDetails,
  HotelRoomPriceCreation,
  HotelRoomsCreation,
} from '../../views/hotel/types';
import { fetchFacilites } from './async-thunk';

interface AddHotelState {
  addBasicInfoLoadingState: AsyncThunkStates;
  hotelId: string;
  roomId: string;
  financeLegalId: string;
  basic: HotelCreationBasicInput;
  editHotelData: HotelEntity | null;
  progressPercentage: number;
  location: HotelCreationLocationDetails;
  room: HotelRoomsCreation;
  roomprice: HotelRoomPriceCreation;
  hotelFacilitiesLoadingState: AsyncThunkStates;
  hotelFacilitiesList: FacilitiesEntity[] | undefined;
}

const initialState: AddHotelState = {
  addBasicInfoLoadingState: 'idle',
  hotelFacilitiesLoadingState: 'idle',
  editHotelData: null,
  progressPercentage: 0,
  basic: {
    propertyName: '',
    starRating: '',
    date: '',
    contactNumber: '',
    email: '',
  },
  location: {
    lat: '',
    lng: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  },
  room: {
    roomname: '',
    description: '',
    availablerooms: 1,
    roomtype: '',
    smokingallowed: true,
    length: '',
    breadth: '',
    squarefeet: '',
    extrabed: true,
  },
  roomprice: {
    baseoccupancy: 1,
    baseprice: '',
    extraadults: 1,
    extrachild: 1,
    adultsprice: '',
    noguestallowed: 1,
    pricerange1: '',
    pricerange2: '',
    availablefrom: '',
    avilableto: '',
  },
  hotelId: '',
  roomId: '',
  financeLegalId: '',
  hotelFacilitiesList: [],
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
      state.location = {
        address: action.payload.address,
        country: action.payload.country,
        state: action.payload.state,
        city: action.payload.state,
        pincode: action.payload.pincode,
        lng: '',
        locality: '',
        lat: '',
      };
    },
    setProgressPercentage: (state, action) => {
      state.progressPercentage = action.payload;
    },
    resetEditHotelData: (state, action) => {
      state.editHotelData = null;
      state.progressPercentage = 0;
      state.basic = {
        contactNumber: '',
        date: '',
        propertyName: '',
        starRating: '',
        email: '',
      };
      state.location = {
        address: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        lng: '',
        locality: '',
        lat: '',
      };

      state.hotelId = '';
      state.roomId = '';
      state.financeLegalId = '';
    },
    setHotelId: (state, action) => {
      state.hotelId = action.payload;
    },
    addBasicInfo: (state, action: PayloadAction<HotelCreationBasicInput>) => {
      state.basic = action.payload;
    },
    addLocationDetails: (state, action) => {
      state.location = action.payload;
    },
    addRoomDetails: (state, action) => {
      state.room = action.payload;
    },
    addRoomPrice: (state, action) => {
      state.roomprice = action.payload;
    },
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
    setFinanceLegalId: (state, action) => {
      state.financeLegalId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFacilites.fulfilled, (state, action) => {
      (state.hotelFacilitiesLoadingState = action.meta.requestStatus),
        (state.hotelFacilitiesList = action.payload);
    }),
      builder.addCase(fetchFacilites.pending, (state, action) => {
        state.hotelFacilitiesLoadingState = action.meta.requestStatus;
      });
  },
});

export const {
  setEditHotelData,
  setHotelId,
  addBasicInfo,
  resetEditHotelData,
  setProgressPercentage,
  addLocationDetails,
  addRoomDetails,
  setRoomId,
  setFinanceLegalId,
  addRoomPrice,
} = hotelSlice.actions;
