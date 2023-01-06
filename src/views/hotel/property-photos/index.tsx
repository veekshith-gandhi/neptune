import { CaretRightOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Collapse,
  notification,
  Progress,
  Space,
  Typography,
} from 'antd';

import { FunctionComponent } from 'react';
import { DeluxPhotos } from './delux-photos';
import { HotelCardCreation } from './hotel-card';
import { MixPhotos } from './mix-photos';

const { Title } = Typography;
const customPanelStyle = {
  background: '#f6f6f6',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const Panel = Collapse.Panel;
export const PropertyPhotos: FunctionComponent = () => {
  const [api, contextHolder] = notification.useNotification();
  return (
    <Card style={{ margin: '5px 50px' }}>
      {contextHolder}
      <div
        id="property-photos-ref"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <Title level={4}>Photos</Title>
          <p>Add quality photos showcase all your property</p>
        </div>
        <div>
          <Progress
            percent={40}
            status="active"
            strokeColor={{ from: '#108ee9', to: '#87d068' }}
          />
          <Space wrap>
            <Progress
              type="circle"
              width={50}
              percent={40}
              strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
            />
          </Space>
        </div>
      </div>

      <Collapse
        expandIconPosition="right"
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? -270 : -180} />
        )}
        bordered={false}
        style={{ background: '#FFFFFF' }}
      >
        <Panel header="Hotel" key="1" style={customPanelStyle}>
          <HotelCardCreation />
        </Panel>
        <Panel header="Delux Room" key="2" style={customPanelStyle}>
          <DeluxPhotos />
        </Panel>
        <Panel header="Mixed Room" key="3" style={customPanelStyle}>
          <MixPhotos />
        </Panel>
      </Collapse>
      <Button type="primary" htmlType="submit">
        Save and Submit
      </Button>
    </Card>
  );
};
