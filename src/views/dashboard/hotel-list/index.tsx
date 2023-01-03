import { FC, Fragment, useEffect } from 'react';
import { fetchHotels } from '../../../features/dashboard/async-thunks';
import { useAppDispatch, useAppSelector } from '../../../store';
import HotelListData from './table-data';
import HotelListTableHeader from './table-header';

const HotelsList: FC = () => {
  const dispatch = useAppDispatch();
  const { hotels, hotelsLoadingState } = useAppSelector(
    (state) => state.dashbaord
  );

  useEffect(() => {
    dispatch(fetchHotels());
  }, []);

  return (
    <div className="dashboard_table_container">
      <table className="custom_table">
        <HotelListTableHeader />
        <tbody>
          {hotelsLoadingState === 'pending' ? (
            <tr>
              <td>
                <p>Loading....</p>
              </td>
            </tr>
          ) : (
            <Fragment>
              {hotels.map((hotel) => (
                <HotelListData key={hotel.id} {...hotel} />
              ))}
            </Fragment>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HotelsList;
