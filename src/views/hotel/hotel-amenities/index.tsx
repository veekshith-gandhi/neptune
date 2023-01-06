import { Button, Card, notification, Space, Typography } from 'antd';
import Progress from 'antd/es/progress';
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFacilites } from '../../../features/hotel/async-thunk';
import { setProgressPercentage } from '../../../features/hotel/hotel-slice';
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

  const [selectedAmenity, setSelectedAmenity] = useState('');
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    dispatch(fetchFacilites('HOTEL'));
  }, []);

  return (
    <Card
      style={{ margin: '5px 50px', maxHeight: 530 }}
      id="amenities-container-ref"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {contextHolder}
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
        <div className="p-2 card" style={{ width: 250 }}>
          <strong className="border-bottom p-2 mb-2">Hotel Amenities</strong>
          <div className="amenities-list-container">
            {hotelFacilitiesList?.map((facility) => (
              <Button
                disabled={selectedAmenity === facility.id}
                onClick={() => setSelectedAmenity(facility.id!)}
                style={{ border: 'none' }}
                className="w-100 border-bottom px-2 text-left"
                key={facility.id}
              >
                {facility.name}
              </Button>
            ))}
          </div>
        </div>
        {selectedAmenity ? (
          <FacilitesOptions amenityID={selectedAmenity} />
        ) : null}
      </div>
      <Space>
        <Button
          onClick={() => {
            api.success({ message: 'saved Success', placement: 'topRight' });
            dispatch(setProgressPercentage(25));
            document
              ?.getElementById('rooms-spaces-ref')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ marginTop: 20 }}
          type="primary"
          htmlType="submit"
        >
          Save and Submit
        </Button>
      </Space>
    </Card>
  );
};
