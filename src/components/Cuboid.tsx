import { useRef } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3, Color3 } from "@babylonjs/core";

const Cuboid = ({ userImage }: any) => {
  const boxRef = useRef(null);

  return (
    <div className="cuboid-container">
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene>
          <arcRotateCamera
            name="camera1"
            target={Vector3.Zero()}
            alpha={(3 * Math.PI) / 4}
            beta={Math.PI / 4}
            radius={2}
          />
          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
            specular={Color3.White()}
            groundColor={Color3.White()}
          />
          <box
            name="map"
            ref={boxRef}
            size={2}
            position={new Vector3(0, 0, 0)}
            height={1}
            width={0.75}
            depth={0.25}
            // faceUV={faceUV}
            wrap
          >
            <standardMaterial name="map">
              <texture url={userImage} assignTo={"diffusiveTexture"} />
            </standardMaterial>
          </box>
        </Scene>
      </Engine>
    </div>
  );
};

export default Cuboid;
