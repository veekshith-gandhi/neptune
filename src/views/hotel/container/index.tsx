import { FunctionComponent } from 'react';
import { Basicinfo } from '../basicinfo';
import { FacilitiesDetails } from '../facilities';
import { FinanceDetails } from '../finance';
import { LocationDetails } from '../location-details';
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
      <FinanceDetails />
    </div>
  );
};
