import { Button, Card, Space, Typography } from 'antd';
import Progress from 'antd/es/progress';
import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFacilites } from '../../../features/hotel/async-thunk';
import { AppDispatch, useAppSelector } from '../../../store';
import './facilities-amenities.scss';
import { FacilitesOptions } from './facilities-options';

const { Title } = Typography;

export const FacilitiesDetails: FunctionComponent = () => {
  const {
    progressPercentage,
    hotelFacilitiesList,
    hotelFacilitiesLoadingState,
  } = useAppSelector((state) => state.hotel);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchFacilites('HOTEL'));
  }, []);
  return (
    <Card
      style={{ margin: '5px 50px', maxHeight: 480 }}
      id="amenities-container-ref"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Title level={4}>Facilites</Title>
          <p>Please select general facilities available at your property</p>
        </div>
        <div>
          <Progress
            percent={progressPercentage}
            status="active"
            strokeColor={{ from: '#108ee9', to: '#87d068' }}
          />
          <Space wrap>
            <Progress
              type="circle"
              width={50}
              percent={progressPercentage}
              strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
            />
          </Space>
        </div>
      </div>
      <div className="amenities-main-container">
        <Card title="Hotel Amenities" style={{ width: 250 }}>
          <div className="amenities-list-container">
            {hotelFacilitiesList?.map((hotel) => (
              <Button style={{ border: 'none' }} key={hotel.id}>
                {hotel.name}
              </Button>
            ))}
          </div>
        </Card>
        <FacilitesOptions />
      </div>
    </Card>
  );
};
