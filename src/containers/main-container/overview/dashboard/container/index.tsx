import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ResponseType } from '../../../../../constants';
import I18 from '../../../../../i18';
import { AppStore } from '../../../../../model/store.model';
import { Locations } from '../../../../../routes';
import { DashboardTable } from '../components';
import { HotelList } from '../modal';
import { clearGetAllHotel, getAllHotel } from '../redux/action';
import './dashboard.scss';

export const Dashboard: FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dashboardReducer = useSelector((state: AppStore) => state.dashboard);
  const [hotelList, setHotelList] = useState<HotelList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    dispatch(getAllHotel());
  }, []);

  useEffect(() => {
    if (dashboardReducer.getHotelCompleted === ResponseType.FULFILLED) {
      setHotelList(dashboardReducer.hotelList);
      setLoading(false);
      dispatch(clearGetAllHotel());
    }
    if (dashboardReducer.getHotelCompleted === ResponseType.REJECTED) {
      setHotelList(dashboardReducer.hotelList);
      setLoading(false);
      dispatch(clearGetAllHotel());
    }
  }, [dashboardReducer.getHotelCompleted]);

  return (
    <div className="dashboard_container">
      <div className="dashboard_card_container">
        <div className="dashboard_card dashboard_card_1">
          <div className="dashboard_card_details">
            <div className="dashboard_card_count">{hotelList.length}</div>
            <div className="dashboard_card_name">
              <I18 tkey="Hotel" />
            </div>
          </div>
          <div className="dashboard_card_icon">
            <svg
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.0611 39.4402L13.7104 52.5947C12.9941 53.2089 11.9873 53.3497 11.1271 52.9556C10.2697 52.5614 9.7226 51.7041 9.7226 50.7597C9.7226 50.7597 9.7226 26.8794 9.7226 14.5028C9.7226 9.16424 14.0517 4.83655 19.3904 4.83655H38.7289C44.0704 4.83655 48.3995 9.16424 48.3995 14.5028V50.7597C48.3995 51.7041 47.8495 52.5614 46.9922 52.9556C46.1348 53.3497 45.1252 53.2089 44.4088 52.5947L29.0611 39.4402ZM43.5656 14.5028C43.5656 11.8335 41.3996 9.66841 38.7289 9.66841C33.0207 9.66841 25.1014 9.66841 19.3904 9.66841C16.7196 9.66841 14.5565 11.8335 14.5565 14.5028V45.5056L27.4873 34.4215C28.3926 33.646 29.7266 33.646 30.6319 34.4215L43.5656 45.5056V14.5028Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
        <div className="dashboard_card dashboard_card_2">
          <div className="dashboard_card_details">
            <div className="dashboard_card_count">
              {+hotelList.map((el) => el.rooms)}
            </div>
            <div className="dashboard_card_name">
              <I18 tkey="Rooms" />
            </div>
          </div>
          <div className="dashboard_card_icon">
            <svg
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.0611 39.4402L13.7104 52.5947C12.9941 53.2089 11.9873 53.3497 11.1271 52.9556C10.2697 52.5614 9.7226 51.7041 9.7226 50.7597C9.7226 50.7597 9.7226 26.8794 9.7226 14.5028C9.7226 9.16424 14.0517 4.83655 19.3904 4.83655H38.7289C44.0704 4.83655 48.3995 9.16424 48.3995 14.5028V50.7597C48.3995 51.7041 47.8495 52.5614 46.9922 52.9556C46.1348 53.3497 45.1252 53.2089 44.4088 52.5947L29.0611 39.4402ZM43.5656 14.5028C43.5656 11.8335 41.3996 9.66841 38.7289 9.66841C33.0207 9.66841 25.1014 9.66841 19.3904 9.66841C16.7196 9.66841 14.5565 11.8335 14.5565 14.5028V45.5056L27.4873 34.4215C28.3926 33.646 29.7266 33.646 30.6319 34.4215L43.5656 45.5056V14.5028Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
        <div className="dashboard_card dashboard_card_3">
          <div className="dashboard_card_details">
            <div className="dashboard_card_count">899</div>
            <div className="dashboard_card_name">
              <I18 tkey="Something" />
            </div>
          </div>
          <div className="dashboard_card_icon">
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.0611 39.4402L13.7104 52.5947C12.9941 53.2089 11.9873 53.3497 11.1271 52.9556C10.2697 52.5614 9.7226 51.7041 9.7226 50.7597C9.7226 50.7597 9.7226 26.8794 9.7226 14.5028C9.7226 9.16424 14.0517 4.83655 19.3904 4.83655H38.7289C44.0704 4.83655 48.3995 9.16424 48.3995 14.5028V50.7597C48.3995 51.7041 47.8495 52.5614 46.9922 52.9556C46.1348 53.3497 45.1252 53.2089 44.4088 52.5947L29.0611 39.4402ZM43.5656 14.5028C43.5656 11.8335 41.3996 9.66841 38.7289 9.66841C33.0207 9.66841 25.1014 9.66841 19.3904 9.66841C16.7196 9.66841 14.5565 11.8335 14.5565 14.5028V45.5056L27.4873 34.4215C28.3926 33.646 29.7266 33.646 30.6319 34.4215L43.5656 45.5056V14.5028Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="text-right pb-2">
        <button
          className="primary_btn border_radius_4"
          onClick={() => navigate(Locations.ADD_HOTEL)}
        >
          <I18 tkey="Add Hotel" />
        </button>
      </div>
      <div className="dashboard_table_container">
        <DashboardTable loading={loading} hotelList={hotelList} />
      </div>
    </div>
  );
};
