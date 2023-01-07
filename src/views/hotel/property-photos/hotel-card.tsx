import { DeleteOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Form,
  notification,
  Popconfirm,
  Space,
  Upload,
} from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  resetEditHotelData,
  setProgressPercentage,
} from '../../../features/hotel/hotel-slice';
import {
  deleteHotelInformation,
  hotelMediaUpload,
} from '../../../services/hotel-api-service';
import { AppDispatch, useAppSelector } from '../../../store';

const customPanelStyle = {
  background: '#f6f6f6',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
export const HotelCardCreation: FC = () => {
  const { hotelId, editHotelData } = useAppSelector((state) => state.hotel);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch<AppDispatch>();
  const onFinish = async (e: any) => {
    const { fileList } = e.hotelimages;
    console.log(fileList);
    const formdata = new FormData();
    formdata.append('id', hotelId);
    formdata.append('type', 'hotel');
    fileList.forEach((each: any) => {
      formdata.append('file', each.originFileObj);
    });
    try {
      const data = await hotelMediaUpload(formdata);
      console.log(data);
      api.success({ message: 'saved Success', placement: 'topRight' });
      document
        ?.getElementById('delux-room-ref')
        ?.scrollIntoView({ behavior: 'smooth' });
      dispatch(setProgressPercentage(70));
    } catch (error) {
      api.error({ message: 'failed to upload', placement: 'topRight' });
    }
  };
  const onClickFunction = async () => {
    try {
      await deleteHotelInformation(editHotelData?.id);
      dispatch(resetEditHotelData(''));
    } catch (error) {
      api.error({ message: 'failed to delete', placement: 'topRight' });
    }
  };
  return (
    <Form onFinish={onFinish}>
      <div>
        {contextHolder}
        <div style={{ padding: 24, background: 'aliceblue', display: 'flex' }}>
          <Card
            style={{ width: 200, height: 200 }}
            title={editHotelData?.property_name}
            extra={
              <Popconfirm title="Delete the Hotel" onConfirm={onClickFunction}>
                <Button>
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            }
            bordered={true}
          >
            {<></>}
          </Card>
          <div style={{ marginLeft: 20 }}>
            <Form.Item name={['hotelimages']}>
              <Upload
                maxCount={10}
                listType="picture-card"
                name="hotelimages"
                beforeUpload={(file) => {
                  return false;
                }}
              >
                {'+upload'}
              </Upload>
            </Form.Item>
          </div>
        </div>
        <Space style={{ marginTop: 20 }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Space>
      </div>
    </Form>
  );
};
