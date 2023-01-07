import { Button, Form, notification, Space, Upload } from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setProgressPercentage } from '../../../features/hotel/hotel-slice';
import { hotelMediaUpload } from '../../../services/hotel-api-service';
import { useAppSelector } from '../../../store';

export const MixPhotos: FC = () => {
  const { roomId } = useAppSelector((state) => state.hotel);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const onFinish = async (e: any) => {
    if (roomId) {
      const { fileList } = e.mixedphotos;
      const formdata = new FormData();
      formdata.append('id', roomId);
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
    <Form onFinish={onFinish}>
      <div id="mixed-room-ref" style={{ padding: 24, background: 'aliceblue' }}>
        {contextHolder}
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
      </div>
      <Space style={{ marginTop: 20 }}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};
