import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from './LocationMarker';
import Button from './Button';
import { useState } from 'react';


const Maps = () => {
    const [position, setPosition] = useState<any>(null);

  const defaultProps = {
    center: {
      lat: 19.076,
      lng: 72.8777,
    },
    zoom: 11,
  };
  return (
    <div className='map-container'>
      <MapContainer
        center={[defaultProps.center.lat, defaultProps.center.lng]}
        zoom={defaultProps.zoom}
        style={{ height: "100vh", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={position} setPosition={setPosition} />
      </MapContainer>
      {position ? <Button text='Click to meet bill'/> : null}
    </div>
  );
};

export default Maps;
