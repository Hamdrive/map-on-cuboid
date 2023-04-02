import { useState } from "react";
import Cuboid from "./components/Cuboid";
import Maps from "./components/Map";
import "./index.css";

export default function App() {
  const [image, setImage] = useState<string>("");

  return (
    <div className="wrapper">
      <Maps userImage={image} setUserImage={setImage} />
      {image ? <Cuboid userImage={image} /> : null} 
    </div>
  );
}
