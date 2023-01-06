import { Button, Form, notification, Space, Upload } from 'antd';
import { FC } from 'react';
import { hotelMediaUpload } from '../../../services/hotel-api-service';
import { useAppSelector } from '../../../store';

export const MixPhotos: FC = () => {
  const { roomId } = useAppSelector((state) => state.hotel);
  const [api, contextHolder] = notification.useNotification();
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
        api.success({ message: 'saved sucessfuly', placement: 'topRight' });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Form onFinish={onFinish}>
      <div style={{ padding: 24, background: 'aliceblue' }}>
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
