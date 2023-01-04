import { CaretRightOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Checkbox,
  Collapse,
  Form,
  Input,
  Progress,
  Select,
  Space,
  Typography,
  Upload,
  UploadProps,
} from 'antd';
import ImgCrop from 'antd-img-crop';
import type { UploadFile } from 'antd/es/upload/interface';
import { RcFile } from 'antd/lib/upload';
import { FunctionComponent, useState } from 'react';
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
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
      // message.error(`${file.name} is not a png file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  // onChange: info => {
  // 	console.log(info.fileList);
  // }
};

export const FinanceDetails: FunctionComponent = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const [isDissabled, setIsDissabled] = useState(true);

  const checkBoxChecking = (e: any) => {
    e.target.checked ? setIsDissabled(false) : setIsDissabled(true);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    // 	console.log(image);
    // console.log(src);

    // 	const imgWindow = window.open(src);
    // 	imgWindow?.document.write(image.outerHTML);
  };
  // const checkForAccountNumber = (e:any) => {

  // 	console.log(e);

  // };
  const onFinish = (e: any) => {
    e.propertyimage = fileList;
    // console.log(e);
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
                  name={['state']}
                  rules={[
                    {
                      required: true,
                      pattern: new RegExp(/^[A-Za-z]{4}\d{7}$/),
                      message: 'Please input your account number!',
                    },
                  ]}
                >
                  <Input allowClear maxLength={11} required />
                </Form.Item>
                <Form.Item
                  label="Bank Name"
                  style={{ width: '300px' }}
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
              </Space>
            </div>
          </Panel>
          <Panel header="Pan Details" key="2" style={customPanelStyle}>
            <div style={{ padding: 24, background: 'aliceblue' }}>
              <Form.Item
                label="Name"
                name={['name']}
                rules={[{ required: true }]}
              >
                <Input type="name" allowClear required />
              </Form.Item>

              <Form.Item
                label="Pan Card"
                name={['pancard']}
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/),
                    message: 'Please input valid details!',
                  },
                ]}
              >
                <Input allowClear name="pancard" maxLength={10} />
              </Form.Item>
              <Form.Item
                label="DOB"
                name={['date']}
                rules={[{ required: true }]}
              >
                <Input name="date" allowClear type="date" required />
              </Form.Item>
              <Form.Item name={['panimage']} rules={[{ required: true }]}>
                <Upload maxCount={1} {...props}>
                  <Button icon={<UploadOutlined />}>Upload png only</Button>
                </Upload>
              </Form.Item>
            </div>
          </Panel>
          <Panel header="Property Info" key="3" style={customPanelStyle}>
            <div style={{ padding: 24, background: 'aliceblue' }}>
              <Form.Item label="upload images" name={['propertyimage']}>
                <ImgCrop rotate>
                  <Upload
                    listType="picture-card"
                    name="propertyimage"
                    fileList={fileList}
                    onPreview={onPreview}
                    onChange={onChange}
                  >
                    {fileList.length < 5 && '+ Upload'}
                  </Upload>
                </ImgCrop>
              </Form.Item>
            </div>
          </Panel>
          <Panel header="Property Info" key="4" style={customPanelStyle}>
            <div style={{ padding: 24, background: 'aliceblue' }}>
              <Form.Item
                label="GST Details"
                name={['gstdetails']}
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
                <Input allowClear name="gstdetails" maxLength={15} />
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
