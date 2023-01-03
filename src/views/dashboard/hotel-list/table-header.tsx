import type { FC } from 'react';
import I18 from '../../../i18';

const HotelListTableHeader: FC = () => {
  return (
    <thead>
      <tr>
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
        <th colSpan={2}>
          <I18 tkey="Action" />
        </th>
      </tr>
    </thead>
  );
};

export default HotelListTableHeader;
