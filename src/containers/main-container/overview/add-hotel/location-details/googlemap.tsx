import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { FunctionComponent, useCallback, useMemo, useRef } from "react";
import "./location-details.scss";


// type LatLngLiteral = google.maps.LatLngLiteral;

// type PlacesProps = {
// 	setOffice: (position: google.maps.LatLngLiteral) => void
// }

export const GoogleMaps: FunctionComponent = () => {
	// const [office, setOffice] = useState < LatLngLiteral>();
	// const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();
	const center = useMemo(() => ({ lat: 12.9716, lng: 77.5946 }), []);
	const mapRef = useRef<GoogleMap>();
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
		libraries: ["places"]
	});
	const onLoad = useCallback((map:any) => (mapRef.current = map), []);
	const options = useMemo(() => ({		
		// disableDefaultUI: true,
		clickableIcons: false
	}), []);

	if (!isLoaded) {return <div>is loading</div>;}
	return (
		<div className="main-map-container">
			<GoogleMap zoom={10} center={center} onLoad={onLoad} options={options} mapContainerClassName="map-container"></GoogleMap>
		</div>
	);
};