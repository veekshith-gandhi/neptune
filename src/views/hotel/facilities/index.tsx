import { Card, Radio, Space, Typography } from 'antd';
import Progress from 'antd/es/progress';
import { FunctionComponent } from 'react';
import { useAppSelector } from '../../../store';
import './facilities-amenities.scss';

const { Title } = Typography;

export const FacilitiesDetails: FunctionComponent = () => {
  const { progressPercentage } = useAppSelector((state) => state.hotel);

  return (
    <Card style={{ margin: '5px 50px' }} id="amenities-container-ref">
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
      <div style={{ display: 'flex' }}>
        <Card title="All Amenities" bordered={true} style={{ width: 200 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card title" bordered={true} style={{ width: 300 }}>
          <Space direction="vertical">
            <Radio>Card content</Radio>
            <Radio>Card content</Radio>
            <Radio>Card content</Radio>
            <Radio>Card content</Radio>
            <Radio>Card content</Radio>
            <Radio>Card content</Radio>
          </Space>
        </Card>
      </div>
    </Card>
  );
};
