import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import moment from 'moment';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HotelEntity } from '../../../@types/entity/hotel-entity';
import { deletHotel } from '../../../features/dashboard/async-thunks';
import { setEditHotelData } from '../../../features/hotel/hotel-slice';
import { Locations } from '../../../routes';
import { useAppDispatch } from '../../../store';

interface HotelListDataProps {
  data: HotelEntity;
}

const HotelListData: FC<HotelListDataProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    id,
    is_active,
    property_name,
    rating,
    taking_booking_since,
    current_location,
  } = data;
  return (
    <tr>
      <td>
        <a title={id} href="#">
          {id?.split('-')?.[0] || '##'}
        </a>
      </td>
      <td>{property_name ? property_name : 'Palace'}</td>
      <td>{rating}</td>
      <td>{current_location ? current_location : 'Bangalore'}</td>
      <td>{moment(taking_booking_since).format('DD/MM/YYYY')}</td>
      <td>{is_active ? 'Approved' : 'Pending'}</td>
      <td>{is_active ? 'Published' : 'Unpublished'}</td>
      <td>
        <Button
          type="primary"
          onClick={() => {
            dispatch(setEditHotelData(data));
            navigate(Locations.ADD_HOTEL);
          }}
        >
          <EditOutlined className="mr-2" />
        </Button>
      </td>
      <td>
        <Popconfirm
          title="Delete the task"
          onConfirm={() => dispatch(deletHotel(id))}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary">
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      </td>
    </tr>
  );
};

export default HotelListData;
