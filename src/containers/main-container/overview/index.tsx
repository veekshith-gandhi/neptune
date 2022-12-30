import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Locations } from "../../../locations";
import { AddHotel } from "./add-hotel/container";
import { Dashboard } from "./dashboard/container";
import { Profile } from "./profile";

export const Overview: FunctionComponent  = () =>  {
	return (
		<div className="main_content_container">
			<Routes>
				<Route path={Locations.DASHBOARD} element={<Dashboard />}/>
				<Route path={Locations.ADD_HOTEL} element={<AddHotel />}/>
				<Route path={Locations.PROFILE} element={<Profile />}/>
				<Route
					path="*"
					element={<Navigate to={Locations.DASHBOARD} replace />}
				/>
			</Routes>
		</div>
	);
};