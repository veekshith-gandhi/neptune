import { Button, Card, notification, Progress, Space, Typography } from 'antd';
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { setProgressPercentage } from '../../../features/hotel/hotel-slice';
import { useAppSelector } from '../../../store';
import { CreatedRoomDisplay } from './created-room-display';
import { RoomAmenities } from './room-amenities';
import { RoomDetails } from './room-details';
import { RoomPrice } from './room-price';

const { Title } = Typography;

export const RoomsAndSpacesDetails: FunctionComponent = () => {
  const { progressPercentage } = useAppSelector((state) => state.hotel);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  return (
    <Card id="rooms-spaces-ref" style={{ margin: '5px 50px' }}>
      {contextHolder}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Title level={4}>Rooms & Spaces</Title>
          <p>
            Please include closed rooms and spaces that will be unavailable to
            guests
          </p>
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
      <RoomDetails />
      <RoomPrice />
      <RoomAmenities />
      <CreatedRoomDisplay />
      <Space>
        <Button
          onClick={() => {
            // api.success({ message: 'saved Success', placement: 'topRight' });
            dispatch(setProgressPercentage(65));
            document
              ?.getElementById('property-photos-ref')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ marginTop: 20, marginLeft: 20 }}
          type="primary"
          htmlType="submit"
        >
          Save and Continue
        </Button>
      </Space>
    </Card>
  );
};
