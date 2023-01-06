import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Card, Collapse, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRoomFacilites } from '../../../features/hotel/async-thunk';
import { AppDispatch, useAppSelector } from '../../../store';
import { RoomOptions } from './room-options';
import './room-space.scss';
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
const { Title } = Typography;
const Panel = Collapse.Panel;
export const RoomAmenities: FC = () => {
  const { roomFacilitiesList, roomFacilitiesLoadingState, roomId } =
    useAppSelector((state) => state.hotel);
  const [selectedAmenity, setSelectedAmenity] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchRoomFacilites('ROOM'));
  }, []);
  if (!roomId) return <p></p>;
  return (
    <Collapse
      style={{ padding: '0px 25px 0 25px', background: '#FFFFFF' }}
      {...layout}
      accordion={true}
      expandIconPosition="right"
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? -270 : -180} />
      )}
      bordered={false}
    >
      <Panel header="Room Amenities" key="1" style={customPanelStyle}>
        <Card style={{ margin: '5px 50px', maxHeight: 430 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Please select general facilities available at your property</p>
            </div>
          </div>
          <div className="room-main-container">
            <div className="p-2 card" style={{ width: 250 }}>
              <strong className="border-bottom p-2 mb-2">Room Amenities</strong>
              <div className="amenities-list-container">
                {roomFacilitiesList?.map((facility) => (
                  <Button
                    disabled={selectedAmenity === facility.id}
                    onClick={() => setSelectedAmenity(facility.id!)}
                    style={{ border: 'none' }}
                    className="w-100 border-bottom px-2 text-left"
                    key={facility.id}
                  >
                    {facility.name}
                  </Button>
                ))}
              </div>
            </div>
            {selectedAmenity ? (
              <RoomOptions amenityID={selectedAmenity} />
            ) : null}
          </div>
        </Card>
      </Panel>
    </Collapse>
  );
};
