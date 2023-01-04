import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import {
  FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FormDetails } from './formdetails';
import './location-details.scss';

/*global , google*/

type LatLngLiteral = google.maps.LatLngLiteral;

export const GoogleMaps: FunctionComponent = () => {
  const [office, setOffice] = useState<LatLngLiteral>();
  // console.log("office", office);
  const center = useMemo(() => ({ lat: 12.9716, lng: 77.5946 }), []);

  const mapRef = useRef<GoogleMap>();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
    libraries: ['places'],
  });

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const options = useMemo(
    () => ({
      // disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  if (office) {
    return <div>map</div>;
  }
  if (!isLoaded) {
    return <div>is loading</div>;
  }
  return (
    <div className="main-map-container">
      <GoogleMap
        zoom={10}
        center={center}
        onLoad={onLoad}
        options={options}
        mapContainerClassName="map-container"
      ></GoogleMap>
      <FormDetails
        setOffice={(position: any): void => {
          setOffice(position);
          mapRef.current?.panTo(position);
        }}
      />
    </div>
  );
};
