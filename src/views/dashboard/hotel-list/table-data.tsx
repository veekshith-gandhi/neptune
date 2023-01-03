import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import moment from 'moment';
import type { FC } from 'react';
import { HotelEntity } from '../../../@types/entity/hotel-entity';

interface HotelListDataProps extends HotelEntity {}

const HotelListData: FC<HotelListDataProps> = ({
  completion,
  contact_number,
  created_at,
  email,
  hotel_type,
  id,
  is_active,
  property_name,
  rating,
  taking_booking_since,
  updated_at,
  address,
  city,
  country,
  current_location,
  hotel_name,
  pincode,
  state,
}) => {
  return (
    <tr>
      <td>{id || '##'}</td>
      <td>{property_name ? property_name : 'Palace'}</td>
      <td>{rating}</td>
      <td>{current_location ? current_location : 'Bangalore'}</td>
      <td>{moment(taking_booking_since).format('DD/MM/YYYY')}</td>
      <td>{is_active ? 'Approved' : 'Pending'}</td>
      <td>{is_active ? 'Published' : 'Pending'}</td>
      <td>
        <Button
          type="primary"
          onClick={() => {
            // dispatch(addSubmitedIdToHotel(id));
            // navigate(Locations.ADD_HOTEL);
          }}
        >
          <EditOutlined className="mr-2" />
        </Button>
      </td>
      <td>
        <Popconfirm title="Delete the task" okText="Yes" cancelText="No">
          <Button type="primary">
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      </td>
    </tr>
  );
};

export default HotelListData;
