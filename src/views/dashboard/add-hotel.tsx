import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import I18 from '../../i18';
import { Locations } from '../../routes';

const AddHotel: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-right pb-2 pt-3">
      <button
        className="primary_btn border_radius_4"
        onClick={() => navigate(Locations.ADD_HOTEL)}
      >
        <I18 tkey="Add Hotel" />
      </button>
    </div>
  );
};

export default AddHotel;
