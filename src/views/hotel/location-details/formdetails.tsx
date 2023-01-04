import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  notification,
  Row,
  Select,
  Space,
} from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { submitBasicLocationInfo } from '../../../services/hotel-api-service';
import {
  getCountryInfo,
  getStateInfo,
} from '../../../services/state-country-api-service';
import { apiErrorParser } from '../../../utils/error-parser';
import { addLocationHotelCreation } from '../redux/action';
import {
  CountryEntity,
  HotelCreationLocationDetails,
  StateEntity,
} from '../types';

const { Search } = Input;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
/*eslint no-undef: "error"*/
// type PlacesProps = {
//     setOffice: (position: google.maps.LatLngLiteral) => void;
// };
// { setOffice }: PlacesProps
export const FormDetails: FunctionComponent<any> = () => {
  // console.log(setOffice);
  let submitedId = '';
  const [countryStore, setCountryStore] = useState<CountryEntity[]>([]);
  const [stateStore, setStateStore] = useState<StateEntity[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { ready, value, setValue } = usePlacesAutocomplete();
  const [isDissabled, setIsDissabled] = useState(true);
  const onFinish = async (e: HotelCreationLocationDetails) => {
    try {
      await submitBasicLocationInfo<any>(
        {
          country: e.country,
          address: e.address,
          pincode: e.pincode,
          city: e.city,
          state: e.state,
        },
        submitedId
      );
      dispatch(addLocationHotelCreation(e));
      api.success({ message: 'saved Success', placement: 'topRight' });
    } catch (error) {
      api.error({ message: apiErrorParser(error), placement: 'topRight' });
    }
  };
  const checkBoxChecking = (e: any) => {
    e.target.checked ? setIsDissabled(false) : setIsDissabled(true);
  };
  useEffect(() => {
    async function fetchState() {
      const id = selectedItem ? selectedItem : '98';
      const data = await getStateInfo(id);
      setStateStore(data?.data);
    }
    fetchState();
  }, [selectedItem]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await getCountryInfo();
      setCountryStore(data);
    }
    fetchData();
  }, []);
  return (
    <Form
      autoComplete="off"
      style={{ padding: 24, minHeight: 360, background: 'aliceblue' }}
      onFinish={onFinish}
      {...layout}
      layout="vertical"
      name="nest-messages"
    >
      {contextHolder}
      <Form.Item label="Search Location">
        <Search
          value={value}
          disabled={!ready}
          placeholder="Enter input"
          allowClear
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Item>
      <Row gutter={[8, 24]}>
        <Col span={8}>
          <Form.Item label="Latitude">
            <Input type="tel" placeholder="lat" allowClear />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Longitude">
            <Input type="tel" allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Locality">
        <Input type="Name" allowClear />
      </Form.Item>
      <Form.Item
        name={['address']}
        label="Address"
        rules={[{ required: true }]}
      >
        <Input type="name" allowClear />
      </Form.Item>
      <Row gutter={[8, 24]}>
        <Col span={8}>
          <Form.Item
            label="Country"
            hasFeedback
            name={['country']}
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              placeholder="Country"
              value={selectedItem}
              filterOption={(input, option) =>
                (option?.label ?? '').includes(input)
              }
              onChange={(e) => {
                setSelectedItem(e);
              }}
              options={countryStore.map((item: any) => ({
                id: item.id,
                value: item.id,
                label: item.name,
              }))}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="State"
            name={['state']}
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              placeholder="State"
              value={selectedItem}
              filterOption={(input, option) =>
                (option?.label ?? '').includes(input)
              }
              onChange={(e) => {
                setSelectedItem(e);
              }}
              options={stateStore.map((item: any) => ({
                id: item.id,
                value: item.id,
                label: item.name,
              }))}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[8, 24]}>
        <Col span={8}>
          <Form.Item label="City" name={['city']} rules={[{ required: true }]}>
            <Input type="name" allowClear />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Pincode"
            name={['pincode']}
            rules={[{ required: true }]}
          >
            <Input type="tel" allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name={['checked']}
        rules={[{ required: true }]}
        valuePropName="checked"
      >
        <Checkbox onChange={checkBoxChecking} value={'checked'}>
          I agree to all your terms and condition
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" disabled={isDissabled} htmlType="submit">
            Save and Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
