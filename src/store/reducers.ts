import { combineReducers } from 'redux';
import UserReducer from '../containers/user/redux/reducer';
import { dashboardSlice } from '../features/dashboard/dashboard-slice';
import { hotelSlice } from '../features/hotel/hotel-slice';
import ActionBtnReducer from '../plugins/action-button/redux/reducer';

const rootReducer = combineReducers({
  actionBtn: ActionBtnReducer,
  userReducer: UserReducer,
  [hotelSlice.name]: hotelSlice.reducer,
  [dashboardSlice.name]: dashboardSlice.reducer,
});

export default rootReducer;
