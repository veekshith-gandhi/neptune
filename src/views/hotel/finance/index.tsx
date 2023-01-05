import { CaretRightOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Checkbox,
  Collapse,
  Form,
  Input,
  message,
  notification,
  Progress,
  Select,
  Space,
  Typography,
  Upload,
  UploadProps,
} from 'antd';
import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setFinanceLegalId,
  setProgressPercentage,
} from '../../../features/hotel/hotel-slice';
import { submitFinanceLegalInformation } from '../../../services/hotel-api-service';
import { useAppSelector } from '../../../store';
import { apiErrorParser } from '../../../utils/error-parser';
const Panel = Collapse.Panel;
const { Option } = Select;
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
const props: UploadProps = {
  beforeUpload: (file, fileList) => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }
    return false;
  },
};

export const FinanceDetails: FunctionComponent = () => {
  const [isDissabled, setIsDissabled] = useState(true);
  const { hotelId, financeLegalId } = useAppSelector((state) => state.hotel);
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const checkBoxChecking = (e: any) => {
    e.target.checked ? setIsDissabled(false) : setIsDissabled(true);
  };

  const onFinish = async (e: any) => {
    if (!hotelId) {
      return api.error({
        message: 'Fill from the Top',
        placement: 'topRight',
      });
    }
    console.log(e.panimage.fileList[0].originFileObj);
    const formData = new FormData();
    formData.append('pan_doc', e?.panimage?.fileList[0]?.originFileObj);
    formData.append(
      'property_info',
      e?.propertyimage?.fileList[0]?.originFileObj
    );
    formData.append('account_number', e.acountnumber);
    formData.append('bank_nmae', e.bankname);
    formData.append('account_holder_name', e.cardholdername);
    formData.append('ifsc', e.ifsccode);
    formData.append('pan_holder_name', e.panholdername);
    formData.append('pan_holder_dob', e.dateofbirth);
    formData.append('gst_number', e.gstnumber);
    formData.append('bank_nmae', e.bankname);
    formData.append('hotel', hotelId ? hotelId : '');
    console.log('id', financeLegalId);
    try {
      const { data } = await submitFinanceLegalInformation(
        formData,
        financeLegalId
      );
      dispatch(setFinanceLegalId(data.id));
      dispatch(setProgressPercentage(100));
      api.success({ message: 'saved Success', placement: 'topRight' });
    } catch (error) {
      api.error({ message: apiErrorParser(error), placement: 'topRight' });
    }
  };

  return (
    <Card style={{ margin: '5px 50px' }}>
      <div
        id="finance-legal-ref"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <Title level={4}>Finance</Title>
          <p>Please fill in basic details of your property</p>
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
      {contextHolder}
      <Form
        style={{ padding: 24, minHeight: 360 }}
        {...layout}
        layout="vertical"
        onFinish={onFinish}
      >
        <Collapse
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? -270 : -180} />
          )}
          bordered={false}
          style={{ background: '#FFFFFF' }}
        >
          <Panel header="Bank Details" key="1" style={customPanelStyle}>
            <div style={{ padding: 24, background: 'aliceblue' }}>
              <Form.Item
                label="Name"
                name={['cardholdername']}
                rules={[
                  {
                    required: true,
                    message: 'Please fill your Name!',
                  },
                ]}
              >
                <Input name="cardholdername" required type="name" />
              </Form.Item>
              <Form.Item
                label="Account Number"
                name={['acountnumber']}
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[0-9]+$/),
                    message: 'Please input your account number!',
                  },
                ]}
              >
                <Input
                  maxLength={12}
                  minLength={12}
                  name="acountnumber"
                  required
                  type="tel"
                />
              </Form.Item>
              <Space>
                <Form.Item
                  label="IFSC Code"
                  name={['ifsccode']}
                  rules={[
                    {
                      required: true,
                      pattern: new RegExp(/^[A-Za-z]{4}\d{7}$/),
                      message: 'Please input your account number!',
                    },
                  ]}
                >
                  <Input allowClear maxLength={11} name="ifsccode" required />
                </Form.Item>
                <Form.Item
                  label="Bank Name"
                  style={{ width: '300px' }}
                  hasFeedback
                  name="bankname"
                >
                  <Select placeholder="select Number" allowClear>
                    <Option value="1">HDFC</Option>
                    <Option value="2">Canara</Option>
                    <Option value="3">SBI</Option>
                    <Option value="4">HSBC</Option>
                  </Select>
                </Form.Item>
              </Space>
            </div>
          </Panel>
          <Panel header="Pan Details" key="2" style={customPanelStyle}>
            <div style={{ padding: 24, background: 'aliceblue' }}>
              <Form.Item
                label="Name"
                name={['panholdername']}
                rules={[{ required: true }]}
              >
                <Input type="name" name="panholdername" allowClear required />
              </Form.Item>

              <Form.Item
                label="Pan Card"
                name={['pancardnumber']}
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/),
                    message: 'Please input valid details!',
                  },
                ]}
              >
                <Input allowClear name="pancardnumber" maxLength={10} />
              </Form.Item>
              <Form.Item
                label="DOB"
                name={['dateofbirth']}
                rules={[{ required: true }]}
              >
                <Input name="dateofbirth" allowClear type="date" required />
              </Form.Item>
              <Form.Item name={['panimage']} rules={[{ required: true }]}>
                <Upload maxCount={1} name="panimage" {...props}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </div>
          </Panel>
          <Panel header="Property Info" key="3" style={customPanelStyle}>
            <div style={{ padding: 24, background: 'aliceblue' }}>
              <Form.Item label="upload images" name={['propertyimage']}>
                <Upload
                  maxCount={1}
                  listType="picture-card"
                  name="propertyimage"
                  beforeUpload={(file) => {
                    return false;
                  }}
                >
                  {'+ Upload'}
                </Upload>
              </Form.Item>
            </div>
          </Panel>
          <Panel header="GST Details" key="4" style={customPanelStyle}>
            <div style={{ padding: 24, background: 'aliceblue' }}>
              <Form.Item
                label="GST number"
                name={['gstnumber']}
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(
                      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
                    ),
                    message: 'Please input valid details!',
                  },
                ]}
              >
                <Input allowClear name="gstnumber" maxLength={15} />
              </Form.Item>
            </div>
          </Panel>
        </Collapse>
        <Form.Item
          name={['checked']}
          rules={[{ required: true }]}
          valuePropName="checked"
        >
          <Checkbox
            onChange={checkBoxChecking}
            name="checked"
            value={'checked'}
          >
            Final verification will be done through a third party. Please give
            your consent in order to initiate the process
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
    </Card>
  );
};
