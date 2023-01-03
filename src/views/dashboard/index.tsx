import type { FC } from 'react';
import AddHotel from './add-hotel';
import HotelsList from './hotel-list';

const DashboardView: FC = () => {
  return (
    <div className="dashboard_container">
      <AddHotel />
      <HotelsList />
    </div>
  );
};

export default DashboardView;
