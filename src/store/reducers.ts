import { combineReducers } from 'redux';
import hotelReducer from '../containers/main-container/overview/add-hotel/redux/reducer';
import UserReducer from '../containers/user/redux/reducer';
import { dashboardSlice } from '../features/dashboard/dashboard-slice';
import ActionBtnReducer from '../plugins/action-button/redux/reducer';

const rootReducer = combineReducers({
  actionBtn: ActionBtnReducer,
  userReducer: UserReducer,
  hotel: hotelReducer,

  [dashboardSlice.name]: dashboardSlice.reducer,
});

export default rootReducer;
