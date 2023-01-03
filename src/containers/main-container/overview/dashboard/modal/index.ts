import { ResponseType } from '../../../../../constants';

export interface HotelList {
  hotelName: string;
  hotelStar: number;
  location: string;
  state: string;
  mobile: string;
  email: string;
  createdDate: Date;
  rooms: number;
}

export interface DashboardTableProps {
  loading: boolean;
  hotelList: HotelList[];
}

export interface DashboardReducer {
  hotelList: HotelList[];
  getHotelCompleted: ResponseType.FULFILLED | ResponseType.REJECTED | null;
}
