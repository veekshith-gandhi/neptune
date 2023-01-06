import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { FC, useEffect, useState } from 'react';
import { FacilityOption } from '../../../@types/entity/hotel-entity';
import {
  checkAminitieOptions,
  getRoomFacilityOptionsByID,
  uncheckAminitieOption,
} from '../../../services/hotel-api-service';
import { useAppSelector } from '../../../store';

export const RoomOptions: FC<{ amenityID: string }> = ({ amenityID }) => {
  const { roomId } = useAppSelector((state) => state.hotel);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FacilityOption[]>([]);
  const [selecting, setSelecting] = useState(false);

  useEffect(() => {
    if (amenityID) {
      (async () => {
        try {
          setLoading(true);
          const { data } = await getRoomFacilityOptionsByID(amenityID, roomId);
          setData(data);
          setLoading(false);
        } catch (error) {
          setLoading(true);
          setData([]);
        }
      })();
    }
  }, [amenityID]);

  async function handleCheck(id: string) {
    try {
      setSelecting(true);
      await checkAminitieOptions(roomId, id);
      setSelecting(false);
    } catch (error) {
      setSelecting(false);
    }
  }
  async function handleUnCheck(id: string) {
    try {
      setSelecting(true);
      await uncheckAminitieOption(roomId, id);
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
                key={each.id}
                value={each.id}
                disabled={selecting}
                className="ml-2 my-1"
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
