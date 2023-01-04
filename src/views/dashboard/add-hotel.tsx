import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  resetEditHotelData,
  setHotelId,
} from '../../features/hotel/hotel-slice';
import I18 from '../../i18';
import { Locations } from '../../routes';
import { AppDispatch } from '../../store';

const AddHotel: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="text-right pb-2 pt-3">
      <button
        className="primary_btn border_radius_4"
        onClick={() => {
          dispatch(resetEditHotelData(''));
          dispatch(setHotelId(''));
          navigate(Locations.ADD_HOTEL);
        }}
      >
        <I18 tkey="Add Hotel" />
      </button>
    </div>
  );
};

export default AddHotel;
