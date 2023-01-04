import { CaretRightOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  InputNumber,
  notification,
  Progress,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import moment from 'moment';
import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  submitHotelRoomInformation,
  submitHotelRoomPriceInformation,
} from '../../../services/hotel-api-service';
import {
  addHotelRoomsCreation,
  addHotelRoomsPriceCreation,
  addSubmitedIdToRoom,
} from '../redux/action';
import { HotelRoomPriceCreation, HotelRoomsCreation } from '../types';
const { RangePicker } = DatePicker;
const { Title } = Typography;
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
export const RoomsAndSpacesDetails: FunctionComponent = () => {
  const [api, contextHolder] = notification.useNotification();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const dispatch = useDispatch();
  let submitedId = '';
  let submitedRoomId = '';
  const onFinishRooms = async (e: HotelRoomsCreation) => {
    try {
      const { data } = await submitHotelRoomInformation<any>(
        {
          room_name: e.roomname,
          description: e.description,
          available_room: e.availablerooms,
          room_type: e.roomtype,
          is_smoking_allowed: e.smokingallowed,
          room_breadth: String(e.breadth),
          room_length: String(e.length),
          extra_bed: e.extrabed,
          hotel: submitedId ? submitedId : '',
        },
        submitedRoomId
      );
      dispatch(addHotelRoomsCreation(e));
      dispatch(addSubmitedIdToRoom(data.id));
      api.success({ message: 'saved Success', placement: 'topRight' });
    } catch (error) {
      api.error({ message: 'error', placement: 'topRight' });
    }
  };

  const onFinishBaseRooms = async (e: HotelRoomPriceCreation) => {
    try {
      const { data } = await submitHotelRoomPriceInformation<any>(
        {
          base_occupancy: e.baseoccupancy,
          base_price: e.baseprice,
          child_price_range_1: e.pricerange1,
          child_price_range_2: e.pricerange2,
          max_number_guest: e.noguestallowed,
          extra_adult_price: e.adultsprice,
          number_of_extra_adult: e.extraadults,
          number_of_child: e.extrachild,
          available_from: String(dateFrom),
          available_to: String(dateTo),
          hotel: submitedId,
        },
        submitedRoomId
      );
      dispatch(addHotelRoomsPriceCreation(e));
      dispatch(addSubmitedIdToRoom(data.id));
      api.success({ message: 'saved Success', placement: 'topRight' });
    } catch (error) {
      api.error({ message: 'error', placement: 'topRight' });
    }
  };
  return (
    <Card id="rooms-spaces-ref" style={{ width: '140vh', margin: 'auto' }}>
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

      <Form
        style={{ padding: '25px 25px 0 25px' }}
        {...layout}
        layout="vertical"
        onFinish={onFinishRooms}
      >
        <Collapse
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
                  <Form.Item label="Bed Type" name={['bedtype']}>
                    <Select placeholder="select Number" allowClear>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                      <Option value="5">5</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Meal option" name={['mealoption']}>
                    <Select placeholder="select Number" allowClear>
                      <Option value="yes">yes</Option>
                      <Option value="no">no</Option>
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
                <Col span={12}>
                  <Form.Item label="View" name={['view']}>
                    <Select placeholder="select Number" allowClear>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
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
              <Row>
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
      <Form
        style={{ padding: '0 25px 0 25px' }}
        {...layout}
        layout="vertical"
        onFinish={onFinishBaseRooms}
      >
        <Collapse
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? -270 : -180} />
          )}
          bordered={false}
          style={{ background: '#FFFFFF' }}
        >
          <Panel
            header="Base Room Price and Availablity"
            key="2"
            style={customPanelStyle}
          >
            <div style={{ padding: 24, background: 'aliceblue' }}>
              <Row gutter={[8, 24]}>
                <Col span={12}>
                  <Form.Item
                    label="Base Occupancy"
                    name={['baseoccupancy']}
                    rules={[{ required: true }]}
                  >
                    <Input type="tel" name="baseoccupancy" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Base Price"
                    name={['baseprice']}
                    rules={[{ required: true }]}
                  >
                    <Input type="tel" name="baseprice" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 24]}>
                <Col span={12}>
                  <Form.Item
                    label="No of extra adults allowed"
                    // style={{ width: "450px" }}
                    name={['extraadults']}
                    rules={[{ required: true }]}
                  >
                    <Input type="tel" name="extraadults" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    // style={{ width: "550px" }}
                    label="No of extra child allowed"
                    name={['extrachild']}
                    rules={[{ required: true }]}
                  >
                    <Input type="tel" name="extrachild" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 24]}>
                <Col span={12}>
                  <Form.Item
                    label="Price for adults (12yrs and above)"
                    // style={{ width: "450px" }}
                    name={['adultsprice']}
                    rules={[{ required: true }]}
                  >
                    <Input type="tel" name="adultsprice" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Max no of guest allowed"
                    name={['noguestallowed']}
                    rules={[{ required: true }]}
                  >
                    <Input type="tel" name="guestallowed" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[2, 2]}>
                <Col span={12}>
                  <Form.Item
                    label={
                      <p style={{ fontSize: 12 }}>Price for child (0-5yrs)</p>
                    }
                    name={['pricerange1']}
                    rules={[{ required: true }]}
                  >
                    <Input type="tel" name="pricerange1" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={
                      <p style={{ fontSize: 11 }}>Price for child (6-12yrs)</p>
                    }
                    name={['pricerange2']}
                    rules={[{ required: true }]}
                  >
                    <Input type="tel" name="pricerange2" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={18}>
                  <Form.Item
                    rules={[{ required: true }]}
                    name={['daterange']}
                    label={
                      <p style={{ fontSize: 10 }}>
                        Select date range for which your property is available
                        for booking for guest
                      </p>
                    }
                  >
                    <RangePicker
                      onChange={(values: any) => {
                        const val1 = values
                          ? moment(values[0])?.format('DD-MM-YYYY')
                          : '';
                        const val2 = values
                          ? moment(values[1])?.format('DD-MM-YYYY')
                          : '';
                        setDateFrom(val1);
                        setDateTo(val2);
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[42, 42]}>
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
    </Card>
  );
};
