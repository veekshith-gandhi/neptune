import { combineReducers } from "redux";
import ActionBtnReducer from "../plugins/action-button/redux/reducer";
import UserReducer from "../containers/user/redux/reducer";
import DashboardReducer from "../containers/main-container/overview/dashboard/redux/reducer";

const rootReducer = combineReducers({
	actionBtn: ActionBtnReducer,
	userReducer: UserReducer,
	dashboard: DashboardReducer
	// all reducers
});

export default rootReducer;