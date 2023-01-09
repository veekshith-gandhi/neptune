import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import moment from 'moment';
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import I18 from '../../../../../i18';
import { Locations } from '../../../../../routes';
import {
  deleteHotelInformation,
  getHotelInformation,
} from '../../../../../services/hotel-api-service';
import { addSubmitedIdToHotel } from '../../../../../views/hotel/redux/action';
import { DashboardTableProps } from '../modal';

export const DashboardTable: FunctionComponent<DashboardTableProps> = (
  props
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hotelList, setHotelList] = useState<any[]>([]);
  async function fetchDetails() {
    const { data } = await getHotelInformation();
    setHotelList(data);
  }
  useEffect(() => {
    fetchDetails();
  }, []);

  const deleteHotelDetails = async (id: any) => {
    await deleteHotelInformation(id);
    fetchDetails();
  };

  return props.loading ? (
    <div className="d-flex align-items-center justify-content-center">
      <I18 tkey="Loading..." />
    </div>
  ) : (
    <table className="custom_table">
      <thead>
        <tr>
          <th></th>
          <th>
            <I18 tkey="Hotel ID" />
          </th>
          <th>
            <I18 tkey="Hotel Name" />
          </th>
          <th>
            <I18 tkey="Ratings" />
          </th>
          <th>
            <I18 tkey="Destination" />
          </th>
          <th>
            <I18 tkey="Created Date" />
          </th>
          <th>
            <I18 tkey="Status" />
          </th>
          <th>
            <I18 tkey="State" />
          </th>
          <th>
            <I18 tkey="Action" />
          </th>
        </tr>
      </thead>
      <tbody>
        {hotelList.map((i, j) => {
          return (
            <tr key={i.id}>
              <td></td>
              <td>{i?.id ? j + 1 : '0'}</td>
              <td>{i?.property_name ? i.property_name : 'Palace'}</td>
              <td>{i?.rating}</td>
              <td>{i?.current_location ? i.current_location : 'Bangalore'}</td>
              <td>{moment(i?.taking_booking_since).format('DD/MM/YYYY')}</td>
              <td>{i?.is_active ? 'Approved' : 'Pending'}</td>
              <td>{i?.is_active ? 'Published' : 'Pending'}</td>
              <td>
                <Button
                  type="primary"
                  onClick={() => {
                    dispatch(addSubmitedIdToHotel(i.id));
                    navigate(Locations.ADD_HOTEL);
                  }}
                >
                  <EditOutlined className="mr-2" />
                </Button>
              </td>
              <td>
                <Popconfirm
                  onConfirm={() => deleteHotelDetails(i.id)}
                  title="Delete the task"
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
        })}
      </tbody>
    </table>
  );
};
