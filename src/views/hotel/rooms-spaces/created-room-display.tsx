import { CaretRightOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, Collapse, Popconfirm, Row } from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRoomList } from '../../../features/hotel/async-thunk';
import { AppDispatch, useAppSelector } from '../../../store';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const customPanelStyle = {
  background: '#f6f6f6',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
const Panel = Collapse.Panel;
export const CreatedRoomDisplay: FC = () => {
  const { hotelId, roomList } = useAppSelector((state) => state.hotel);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (hotelId) {
      dispatch(fetchRoomList(hotelId));
    }
  }, [hotelId]);

  return (
    <Collapse
      style={{ padding: '0px 25px 0 25px', background: '#FFFFFF' }}
      {...layout}
      accordion={true}
      defaultActiveKey={['1']}
      expandIconPosition="right"
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? -270 : -180} />
      )}
      bordered={false}
    >
      <Panel header="Rooms" key="1" style={customPanelStyle}>
        <Row gutter={[16, 16]}>
          {roomList?.map((room) => (
            <Col span={8} key={room.id}>
              <Card
                title={room.room_name}
                extra={
                  <Popconfirm title="Delete the room">
                    <Button>
                      <DeleteOutlined />
                    </Button>
                  </Popconfirm>
                }
                bordered={true}
              >
                {room.description}
              </Card>
            </Col>
          ))}
        </Row>
      </Panel>
    </Collapse>
  );
};
