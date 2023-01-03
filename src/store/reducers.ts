import { combineReducers } from 'redux';
import hotelReducer from '../containers/main-container/overview/add-hotel/redux/reducer';
import DashboardReducer from '../containers/main-container/overview/dashboard/redux/reducer';
import UserReducer from '../containers/user/redux/reducer';
import ActionBtnReducer from '../plugins/action-button/redux/reducer';

const rootReducer = combineReducers({
  actionBtn: ActionBtnReducer,
  userReducer: UserReducer,
  dashboard: DashboardReducer,
  hotel: hotelReducer,
  // all reducers
});

export default rootReducer;
