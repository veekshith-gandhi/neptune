import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { FC, useEffect, useState } from 'react';
import { FacilityOption } from '../../../@types/entity/hotel-entity';
import {
  checkFacilityOptions,
  getFacilityOptionsByID,
  uncheckFacilityOption,
} from '../../../services/hotel-api-service';
import { useAppSelector } from '../../../store';
import './facilities-amenities.scss';

export const FacilitesOptions: FC<{ amenityID: string }> = ({ amenityID }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FacilityOption[]>([]);

  const { hotelId } = useAppSelector((state) => state.hotel);
  const [selecting, setSelecting] = useState(false);
  useEffect(() => {
    if (amenityID) {
      (async () => {
        try {
          setLoading(true);
          const { data } = await getFacilityOptionsByID(amenityID, hotelId);
          setData(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setData([]);
        }
      })();
    }
  }, [amenityID, hotelId]);

  async function handleCheck(id: string) {
    try {
      setSelecting(true);
      await checkFacilityOptions(hotelId, id);
      setSelecting(false);
    } catch (error) {
      setSelecting(false);
    }
  }
  async function handleUnCheck(id: string) {
    try {
      setSelecting(true);
      await uncheckFacilityOption(hotelId, id);
      setSelecting(false);
    } catch (error) {
      setSelecting(false);
    }
  }

  return (
    <div className="p-2 card" style={{ width: 250 }}>
      <strong className="border-bottom p-2 mb-2">Select Options</strong>
      {loading ? (
        <p>Please wait...</p>
      ) : (
        <div className="d-flex flex-column">
          {data?.map((each) => {
            return (
              <Checkbox
                className="ml-2 my-1"
                key={each.id}
                value={each.id}
                disabled={selecting}
                onChange={(e: CheckboxChangeEvent) =>
                  e.target.checked
                    ? handleCheck(each.id)
                    : handleUnCheck(each.id)
                }
                defaultChecked={each.is_submitted}
              >
                {each.name}
              </Checkbox>
            );
          })}
        </div>
      )}
    </div>
  );
};
