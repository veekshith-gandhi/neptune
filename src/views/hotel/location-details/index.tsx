import { Card, Progress, Space, Typography } from 'antd';

import { FunctionComponent } from 'react';
import { useAppSelector } from '../../../store';
import { GoogleMaps } from './googlemap';

const { Title } = Typography;
export const LocationDetails: FunctionComponent = () => {
  const { progressPercentage } = useAppSelector((state) => state.hotel);
  return (
    <Card style={{ margin: '5px 50px' }}>
      <div
        id="location-details-ref"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <Title level={4}>Location Details</Title>
          <p>Please fill in basic details of your property</p>
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
      <GoogleMaps />
    </Card>
  );
};
