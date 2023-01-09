import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncThunkStates } from '../../@types';
import {
  FacilitiesEntity,
  HotelEntity,
  RoomList,
} from '../../@types/entity/hotel-entity';
import {
  HotelCreationBasicInput,
  HotelCreationLocationDetails,
  HotelRoomPriceCreation,
  HotelRoomsCreation,
} from '../../views/hotel/types';
import {
  deletRoomList,
  fetchFacilites,
  fetchRoomFacilites,
  fetchRoomList,
} from './async-thunk';

interface AddHotelState {
  addBasicInfoLoadingState: AsyncThunkStates;
  hotelId: string;
  roomId: string;
  policyId: string;
  financeLegalId: string;
  basic: HotelCreationBasicInput;
  editHotelData: HotelEntity | null;
  progressPercentage: number;
  location: HotelCreationLocationDetails;
  room: HotelRoomsCreation;
  roomprice: HotelRoomPriceCreation;
  hotelFacilitiesLoadingState: AsyncThunkStates;
  roomFacilitiesLoadingState: AsyncThunkStates;
  hotelFacilitiesList: FacilitiesEntity[] | undefined;
  roomFacilitiesList: FacilitiesEntity[] | undefined;
  roomList: RoomList[];
  roomListLoadingState: AsyncThunkStates;
}

const initialState: AddHotelState = {
  addBasicInfoLoadingState: 'idle',
  hotelFacilitiesLoadingState: 'idle',
  roomFacilitiesLoadingState: 'idle',
  roomListLoadingState: 'idle',
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
  policyId: '',
  financeLegalId: '',
  hotelFacilitiesList: [],
  roomFacilitiesList: [],
  roomList: [],
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
      state.roomList = [];
      state.hotelFacilitiesList = [];
      state.roomFacilitiesList = [];
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
    resetRoomId: (state, action) => {
      state.roomId = action.payload;
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
    setPolicyId: (state, action) => {
      state.policyId = action.payload;
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
    builder.addCase(fetchRoomFacilites.fulfilled, (state, action) => {
      (state.roomFacilitiesLoadingState = action.meta.requestStatus),
        (state.roomFacilitiesList = action.payload);
    }),
      builder.addCase(fetchRoomFacilites.pending, (state, action) => {
        state.roomFacilitiesLoadingState = action.meta.requestStatus;
      });
    builder.addCase(fetchRoomList.fulfilled, (state, action) => {
      (state.roomListLoadingState = action.meta.requestStatus),
        (state.roomList = action.payload);
    }),
      builder.addCase(fetchRoomList.pending, (state, action) => {
        state.roomListLoadingState = action.meta.requestStatus;
      });
    builder.addCase(deletRoomList.fulfilled, (state, action) => {
      (state.roomListLoadingState = action.meta.requestStatus),
        (state.roomList = state.roomList?.filter(
          (room) => room.id !== action.payload
        ));
    }),
      builder.addCase(deletRoomList.pending, (state, action) => {
        state.roomListLoadingState = action.meta.requestStatus;
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
  resetRoomId,
  setPolicyId,
} = hotelSlice.actions;
