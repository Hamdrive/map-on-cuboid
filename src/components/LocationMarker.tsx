import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from "react";
import { LatLng, LatLngTuple } from 'leaflet';

interface LocationMarkerProps {
    position: LatLngTuple;
    setPosition: (position: LatLng) => void
}

const LocationMarker = ({position, setPosition}: LocationMarkerProps) => {
  const map = useMapEvents({
    click: (e) => {
    setPosition(e.latlng);
    map.flyTo(e.latlng, 18);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Are you ready to meet Bill?</Popup>
    </Marker>
  );
};

export default LocationMarker;
