import { FunctionComponent } from "react";
import { Basicinfo } from "../basicinfo";
import { FinanceDetails } from "../finance";
import { LocationDetails } from "../location-details";
import { PropertyPhotos } from "../property-photos";
import { RoomsAndSpacesDetails } from "../rooms-spaces";
import { TabNavigationBar } from "../tab-navbar";


export const AddHotelComponent: FunctionComponent = () => {
	// const basicRef = useRef<HTMLDivElement>(null);
	return (
		<div>
			<TabNavigationBar />
			{/* ref={basicRef} */}
			<Basicinfo />
			<LocationDetails />
			{/* <FacilitiesDetails/> */}
			<RoomsAndSpacesDetails />
			<PropertyPhotos />
			{/* <Button onClick={() => basicRef.current?.scrollIntoView({ behavior: "smooth" })}>sub</Button> */}
			<FinanceDetails />
		</div>
	);
};
