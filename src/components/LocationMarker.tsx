import { Marker, Popup, useMapEvents } from "react-leaflet";
import { LatLng, LatLngTuple } from "leaflet";

interface LocationMarkerProps {
  position: LatLngTuple;
  setPosition: (position: LatLng) => void;
}

const LocationMarker = ({ position, setPosition }: LocationMarkerProps) => {
  const map = useMapEvents({
    click: (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 18);
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>This is your location</Popup>
    </Marker>
  ) : null;
};

export default LocationMarker;
