import {
  Button,
  Card,
  Form,
  notification,
  Select,
  Space,
  TimePicker,
  Typography,
} from 'antd';
import Progress from 'antd/es/progress';
import moment from 'moment';

import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPolicyId } from '../../../features/hotel/hotel-slice';
import { hotelPolicy } from '../../../services/hotel-api-service';
import { useAppSelector } from '../../../store';

const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const { Option } = Select;
export const Policies: FC = () => {
  const { progressPercentage, hotelId, policyId } = useAppSelector(
    (state) => state.hotel
  );
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const { editHotelData } = useAppSelector((state) => state.hotel);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const onFinish = async (e: any) => {
    console.log(checkIn);
    console.log(checkOut);
    console.log('-=-=-=', editHotelData);
    try {
      const { data } = await hotelPolicy(
        {
          check_in: checkIn,
          check_out: checkOut,
          cancellation_policies: +e.cancelationpolicy,
          hotel: hotelId,
        },
        ''
      );
      console.log(data);
      dispatch(setPolicyId(data.id));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card style={{ margin: '5px 50px' }}>
      {contextHolder}
      <div
        id="policies-ref"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <Title level={4}>Policies</Title>
          <p>Add hotel level policies</p>
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
      <Form
        {...layout}
        style={{ padding: 24, minHeight: 260, background: 'aliceblue' }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item label="Checkin Checkout time" required name={['timerange']}>
          <TimePicker.RangePicker
            format={'h:mm:s a'}
            showNow
            onChange={(values: any) => {
              const val1 = values ? moment(values[0])?.format('HH:MM') : '';
              const val2 = values ? moment()?.format('HH:MM') : '';
              setCheckIn(val1);
              setCheckOut(val2);
            }}
          />
        </Form.Item>
        <Form.Item label="Cancelation Policy" name={['cancelationpolicy']}>
          <Select placeholder="select Number" allowClear>
            <Option value="1">Free Cancelation upto 24hrs</Option>
            <Option value="2">Free Cancelation upto 48hrs</Option>
            <Option value="3">Free Cancelation upto 72hrs</Option>
            <Option value="4">No Refundable</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Save and Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};
