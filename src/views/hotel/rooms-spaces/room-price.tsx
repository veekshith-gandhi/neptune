import { CaretRightOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  notification,
  Row,
} from 'antd';
import moment from 'moment';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addRoomPrice,
  setProgressPercentage,
  setRoomId,
} from '../../../features/hotel/hotel-slice';
import { submitHotelRoomPriceInformation } from '../../../services/hotel-api-service';
import { AppDispatch, useAppSelector } from '../../../store';
import { HotelRoomPriceCreation } from '../types';

const { RangePicker } = DatePicker;
const Panel = Collapse.Panel;
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
export const RoomPrice: FC = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { hotelId, roomId } = useAppSelector((state) => state.hotel);

  const [api, contextHolder] = notification.useNotification();
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
          available_from: dateFrom.toString(),
          available_to: dateTo.toString(),
          hotel: hotelId,
        },
        roomId
      );
      dispatch(addRoomPrice(e));
      dispatch(setRoomId(data.id));
      dispatch(setProgressPercentage(50));
      document
        ?.getElementById('property-photos-ref')
        ?.scrollIntoView({ behavior: 'smooth' });
      api.success({ message: 'saved Success', placement: 'topRight' });
    } catch (error) {
      api.error({ message: 'error', placement: 'topRight' });
    }
  };

  return (
    <Form
      style={{ padding: '0 25px 0 25px' }}
      {...layout}
      layout="vertical"
      onFinish={onFinishBaseRooms}
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
                      Select date range for which your property is available for
                      booking for guest
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
  );
};
