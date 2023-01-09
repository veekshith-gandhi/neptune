import { CaretRightOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Collapse,
  Form,
  Input,
  notification,
  Progress,
  Space,
  Typography,
  Upload,
} from 'antd';

import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { setProgressPercentage } from '../../../features/hotel/hotel-slice';
import { hotelMediaUpload } from '../../../services/hotel-api-service';
import { useAppSelector } from '../../../store';
import { HotelCardCreation } from './hotel-card';

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
  const { progressPercentage, roomList } = useAppSelector(
    (state) => state.hotel
  );
  const dispatch = useDispatch();

  const onFinish = async (e: any) => {
    console.log(e);
    if (e.roomid && e.mixedphotos) {
      const { fileList } = e.mixedphotos;
      console.log(e);
      const formdata = new FormData();
      formdata.append('id', e?.roomid);
      formdata.append('type', 'room');
      fileList.forEach((each: any) => {
        formdata.append('file', each.originFileObj);
      });
      try {
        await hotelMediaUpload(formdata);
        api.success({ message: 'saved Success', placement: 'topRight' });
        document
          ?.getElementById('policies-ref')
          ?.scrollIntoView({ behavior: 'smooth' });
        dispatch(setProgressPercentage(75));
      } catch (error) {
        api.error({ message: 'failed to upload', placement: 'topRight' });
      }
    }
  };
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
        {roomList?.map((room) => (
          <Panel key={room.id} header={room.room_name} style={customPanelStyle}>
            <Form
              fields={[
                {
                  name: ['roomid'],
                  value: room?.id,
                },
              ]}
              onFinish={onFinish}
            >
              <div
                id="mixed-room-ref"
                style={{ padding: 24, background: 'aliceblue' }}
              >
                <Form.Item name={['mixedphotos']}>
                  <Upload
                    maxCount={10}
                    listType="picture-card"
                    name="mixedphotos"
                    beforeUpload={(file) => {
                      return false;
                    }}
                  >
                    {'+ upload'}
                  </Upload>
                </Form.Item>
                <Form.Item hidden name={['roomid']}>
                  <Input></Input>
                </Form.Item>
              </div>
              <Space style={{ marginTop: 20 }}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
};
