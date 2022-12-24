import { MainContainer } from "../containers/main-container";
import { User }  from "../containers/user";
import { Routes, Route, Navigate } from "react-router-dom";
import { Locations } from "../locations";
import { StoredKeys } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../model/store.model";
import { UserModelReducer } from "../containers/user/model";
import { setLogin } from "../containers/user/redux/action";

export const Router = () => {
	const dispatch = useDispatch();
	const userReducer: UserModelReducer = useSelector((data: AppStore) => data.userReducer);

	let storedData: string | null = "{}";

	if (localStorage.getItem(StoredKeys.USER_DETAILS) && (!userReducer.loginDetails.access && !userReducer.userDetails.access)) {
		storedData = localStorage.getItem(StoredKeys.USER_DETAILS) ? localStorage.getItem(StoredKeys.USER_DETAILS) : "";
		storedData = typeof storedData === "string" ? window.atob(storedData) : null;
		if (storedData && JSON.parse(storedData).access) {
			dispatch(setLogin(JSON.parse(storedData)));
		}
	}

	if ((storedData && Object.keys(JSON.parse(storedData)).length) || userReducer.userDetails.access) {
		return (
			<Routes>
				<Route path={`${Locations.DASHBOARD}*`} element={<MainContainer />}/>
				<Route
					path="*"
					element={<Navigate to={Locations.DASHBOARD} replace />}
				/>
			</Routes>
		);
	} 
	return (
		<Routes>
			<Route path={`${Locations.DASHBOARD}*`} element={<User />}/>
			<Route
				path="*"
				element={<Navigate to={Locations.DASHBOARD} replace />}
			/>
		</Routes>
	);
};