import {
  ContactsOutlined,
  HomeOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  notification,
  Progress,
  Select,
  Space,
  Typography,
} from 'antd';
import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HotelEntity } from '../../../@types/entity/hotel-entity';
import {
  addBasicInfo,
  setEditHotelData,
  setHotelId,
  setProgressPercentage,
} from '../../../features/hotel/hotel-slice';

import { submitBasicHotelInfo } from '../../../services/hotel-api-service';
import { AppDispatch, useAppSelector } from '../../../store';
import { apiErrorParser } from '../../../utils/error-parser';
import type { HotelCreationBasicInput } from '../types';

const { Title } = Typography;
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

export const Basicinfo: FunctionComponent = () => {
  const { userDetails } = useAppSelector((state) => state.userReducer);
  const { basic, hotelId, progressPercentage } = useAppSelector(
    (state) => state.hotel
  );
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch<AppDispatch>();
  const [dateString, setDateString] = useState('');
  const onFinish = async (e: HotelCreationBasicInput) => {
    e.date = dateString;
    try {
      const { data } = await submitBasicHotelInfo<HotelEntity>(
        {
          contact_number: e.contactNumber,
          email: e.email,
          rating: e.starRating,
          taking_booking_since: e.date,
          property_name: e.propertyName,
        },
        hotelId
      );
      dispatch(addBasicInfo(e));
      dispatch(setEditHotelData(data));
      dispatch(setHotelId(data.id));
      dispatch(setProgressPercentage(10));
      document
        ?.getElementById('location-details-ref')
        ?.scrollIntoView({ behavior: 'smooth' });
      api.success({ message: 'saved Success', placement: 'topRight' });
    } catch (error) {
      api.error({ message: apiErrorParser(error), placement: 'topRight' });
    }
  };
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDateString(dateString);
  };
  return (
    <Card style={{ margin: '5px 50px' }}>
      {contextHolder}
      <div
        id="basic-info-ref"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <Title level={4}>Welcome to Travell App</Title>
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
      <Form
        {...layout}
        style={{ padding: 24, minHeight: 360, background: 'aliceblue' }}
        layout="vertical"
        fields={[
          {
            name: ['propertyName'],
            value: basic.propertyName,
          },
          {
            name: ['starRating'],
            value: basic.starRating,
          },
          {
            name: ['contactNumber'],
            value: basic.contactNumber,
          },
          {
            name: ['email'],
            value: userDetails?.email,
          },
        ]}
        onFinish={onFinish}
      >
        <Form.Item
          rules={[{ required: true, message: 'Please input property name' }]}
          label="Property Name"
          hasFeedback
          name="propertyName"
        >
          <Input type="Name" prefix={<HomeOutlined />} allowClear />
        </Form.Item>
        <Form.Item
          label="Hotel Star Ratings"
          rules={[{ required: true, message: 'Please select hotel rating' }]}
          hasFeedback
          name="starRating"
        >
          <Select placeholder="select Number" allowClear>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Taking booking since year"
          rules={[{ required: true, message: 'Please select year' }]}
          hasFeedback
          name="date"
        >
          <DatePicker onChange={onChange} picker="year" />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          rules={[{ required: true, message: 'Please input contact number' }]}
          hasFeedback
          name="contactNumber"
        >
          <Input type="tel" allowClear prefix={<ContactsOutlined />} />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[{ required: true, message: 'Please input valid email id' }]}
          hasFeedback
          name="email"
        >
          <Input type="Email" allowClear prefix={<MailOutlined />} />
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
