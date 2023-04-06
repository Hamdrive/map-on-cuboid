import { useState } from "react";
import Cuboid from "./components/Cuboid";
import Maps from "./components/Map";
import Button from "./components/Button";
import "./index.css";

export default function App() {
  const [image, setImage] = useState<string>("");
  const [viewCuboid, setViewCuboid] = useState<boolean>(false);

  const handleButtonClick = () => {
    setViewCuboid((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <div className="map-container">
        <Maps userImage={image} setUserImage={setImage} />
        {image ? (
          <Button
            onClick={handleButtonClick}
            text={viewCuboid ? "Close Cuboid view" : "View on Cuboid"}
          />
        ) : null}
      </div>
      {/* {image ? <Cuboid userImage={image} /> : null}  */}
      <Cuboid userImage={image} viewCuboid={viewCuboid} />
    </div>
  );
}
