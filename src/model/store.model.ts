import { DashboardReducer } from "../containers/main-container/overview/dashboard/modal";
import { UserModelReducer } from "../containers/user/model";
import { ActionBtnReducer } from "../plugins/action-button/redux/model";

export interface AppStore {
    userReducer: UserModelReducer,
    actionBtn: ActionBtnReducer,
    dashboard: DashboardReducer
}