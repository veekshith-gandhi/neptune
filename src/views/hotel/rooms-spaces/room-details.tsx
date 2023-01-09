import { CaretRightOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Collapse,
  Form,
  Input,
  InputNumber,
  notification,
  Row,
  Select,
} from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRoomList } from '../../../features/hotel/async-thunk';
import {
  addRoomDetails,
  setProgressPercentage,
  setRoomId,
} from '../../../features/hotel/hotel-slice';
import { submitHotelRoomInformation } from '../../../services/hotel-api-service';
import { AppDispatch, useAppSelector } from '../../../store';
import { HotelRoomsCreation } from '../types';

const Panel = Collapse.Panel;
const { Option } = Select;
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
export const RoomDetails: FC = () => {
  const { hotelId, roomId } = useAppSelector((state) => state.hotel);
  const dispatch = useDispatch<AppDispatch>();
  const [api, contextHolder] = notification.useNotification();
  const onFinishRooms = async (e: HotelRoomsCreation) => {
    try {
      const { data } = await submitHotelRoomInformation<any>(
        {
          room_name: e.roomname,
          description: e.description,
          available_room: e.availablerooms,
          room_type: e.roomtype,
          is_smoking_allowed: e.smokingallowed,
          room_breadth: e.breadth.toString(),
          room_length: e.length.toString(),
          extra_bed: e.extrabed,
          hotel: hotelId ? hotelId : '',
        },
        roomId
      );
      dispatch(addRoomDetails(e));
      dispatch(setRoomId(data.id));
      dispatch(setProgressPercentage(40));
      dispatch(fetchRoomList(hotelId));
      api.success({ message: 'saved Success', placement: 'topRight' });
    } catch (error) {
      api.error({ message: 'error', placement: 'topRight' });
    }
  };
  return (
    <Form
      style={{ padding: '25px 25px 0 25px' }}
      {...layout}
      layout="vertical"
      onFinish={onFinishRooms}
    >
      {contextHolder}
      <Collapse
        accordion={true}
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? -270 : -180} />
        )}
        bordered={false}
        style={{ background: '#FFFFFF' }}
      >
        <Panel header="Room Details" key="1" style={customPanelStyle}>
          <div style={{ padding: 24, background: 'aliceblue' }}>
            <Row gutter={[8, 24]}>
              <Col span={12}>
                <Form.Item
                  label="Room Name"
                  name={['roomname']}
                  rules={[{ required: true }]}
                >
                  <Input type="name" name="roomname" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Room Description"
                  name={['description']}
                  rules={[{ required: true }]}
                >
                  <Input type="name" name="description" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[8, 24]}>
              <Col span={12}>
                <Form.Item
                  label="Rooms Available"
                  name={['availablerooms']}
                  rules={[{ required: true }]}
                >
                  <Input type="number" name="availablerooms" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Room Type"
                  name={['roomtype']}
                  rules={[{ required: true }]}
                >
                  <Select placeholder="select" allowClear>
                    <Option value="DOUBLE">DOUBLE</Option>
                    <Option value="SINGLE">SINGLE</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[8, 24]}>
              <Col span={12}>
                <Form.Item label="Meal option" name={['mealoption']}>
                  <Select placeholder="select Number" allowClear>
                    <Option value="yes">yes</Option>
                    <Option value="no">no</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={['extrabed']}
                  label="Extra Bed"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Yes" allowClear>
                    <Option value={true}>yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[2, 2]}>
              <Col span={12}>
                <Form.Item
                  label="Smoking allowed"
                  name={['smokingallowed']}
                  rules={[{ required: true }]}
                >
                  <Select placeholder="select" allowClear>
                    <Option value={true}>yes</Option>
                    <Option value={false}>no</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ width: 620 }}>
              <Col span={6}>
                <Form.Item name={['length']} rules={[{ required: true }]}>
                  <InputNumber
                    placeholder="Length"
                    name="length"
                    controls={false}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name={['breadth']} rules={[{ required: true }]}>
                  <InputNumber
                    placeholder="Breadth"
                    name="breadth"
                    controls={false}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name={['squarefeet']} rules={[{ required: true }]}>
                  <Select>
                    <Option value="yes">Sq.ft</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ paddingTop: 15 }} gutter={[42, 42]}>
              <Col span={8}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save and Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Panel>
      </Collapse>
    </Form>
  );
};
