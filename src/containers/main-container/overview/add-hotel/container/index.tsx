import { FunctionComponent } from "react";
import { Basicinfo } from "../basicinfo";
import { LocationDetails } from "../location-details";
import { TabNavigationBar } from "../tab-navbar";


export const AddHotelComponent: FunctionComponent = () => {
	return (
		<div>
			<TabNavigationBar />
			<Basicinfo/>
			<LocationDetails/>
		</div>
	);
};
