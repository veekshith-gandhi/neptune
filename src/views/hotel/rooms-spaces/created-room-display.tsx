import {
  CaretRightOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Collapse,
  Popconfirm,
  Result,
  Row,
  Space,
} from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deletRoomList,
  fetchRoomList,
} from '../../../features/hotel/async-thunk';
import { resetRoomId, setRoomId } from '../../../features/hotel/hotel-slice';
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

  if (roomList.length == 0)
    return (
      <Card style={{ border: 'none' }}>
        <Result
          icon={<SmileOutlined />}
          title="No rooms are created!"
          extra={<Button type="primary">Add Rooms</Button>}
        />
      </Card>
    );
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
                  <>
                    <Popconfirm
                      onConfirm={() => {
                        dispatch(deletRoomList(room.id));
                      }}
                      title="Delete the room"
                    >
                      <Button>
                        <DeleteOutlined />
                      </Button>
                      <Button
                        style={{ marginLeft: 2 }}
                        onClick={() => {
                          dispatch(setRoomId(room.id));
                        }}
                      >
                        <EditOutlined className="mr-2" />
                      </Button>
                    </Popconfirm>
                  </>
                }
                bordered={true}
              >
                {room.description}
              </Card>
            </Col>
          ))}
        </Row>
        <Space style={{ marginTop: 20 }}>
          <Button
            onClick={() => {
              document
                ?.getElementById('rooms-spaces-ref')
                ?.scrollIntoView({ behavior: 'smooth' });
              dispatch(resetRoomId(''));
            }}
            icon={<PlusOutlined />}
          >
            Add Rooms
          </Button>
        </Space>
      </Panel>
    </Collapse>
  );
};
