import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";
import Button from "./Button";
import { useState } from "react";
import * as htmlToImage from "html-to-image";

interface MapsProps {
  setUserImage: (img: string) => void;
  userImage: string;
}

const Maps = ({ setUserImage, userImage }: MapsProps) => {
  const [position, setPosition] = useState<any>(null);

  const defaultProps = {
    center: {
      lat: 19.076,
      lng: 72.8777,
    },
    zoom: 11,
  };

  const handleButtonClick = async () => {
    if (userImage) setUserImage("");
    else {
      const doc: HTMLElement = document.querySelector(".leaflet-container")!;
      const canvas = await htmlToImage.toJpeg(doc, { quality: 1 });
      setUserImage(canvas);
    }
  };

  return (
    <div className="map-container">
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
      {position ? (
        <Button
          clickHandler={handleButtonClick}
          text={userImage ? "Close Cuboid view" : "View on Cuboid"}
        />
      ) : null}
    </div>
  );
};

export default Maps;
