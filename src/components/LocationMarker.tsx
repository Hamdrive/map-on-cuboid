import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLng, LatLngTuple } from "leaflet";

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

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
    iconSize: [38, 38],
  });

  return position ? (
    <Marker position={position} icon={customIcon}>
      <Popup>This is your location</Popup>
    </Marker>
  ) : null;
};

export default LocationMarker;
