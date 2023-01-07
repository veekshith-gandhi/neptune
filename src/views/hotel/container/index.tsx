import { FunctionComponent } from 'react';
import { Basicinfo } from '../basicinfo';
import { FinanceDetails } from '../finance';
import { FacilitiesDetails } from '../hotel-amenities';
import { LocationDetails } from '../location-details';
import { Policies } from '../policies';
import { PropertyPhotos } from '../property-photos';
import { RoomsAndSpacesDetails } from '../rooms-spaces';
import { TabNavigationBar } from '../tab-navbar';

export const AddHotelComponent: FunctionComponent = () => {
  return (
    <div>
      <TabNavigationBar />
      <Basicinfo />
      <LocationDetails />
      <FacilitiesDetails />
      <RoomsAndSpacesDetails />
      <PropertyPhotos />
      <Policies />
      <FinanceDetails />
    </div>
  );
};
