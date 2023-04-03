import { Suspense } from "react";
import {
  Engine,
  Scene,
  Task,
  TaskType,
  useAssetManager,
} from "react-babylonjs";
import { Vector3, Color3 } from "@babylonjs/core";

const Cuboid = ({ userImage }: any) => {
  const RenderImage = ({ userImage }: any) => {
    const textureAssets: Task[] = [
      {
        taskType: TaskType.Texture,
        url: userImage,
        name: "tap",
      },
    ];

    const assetManagerResult = useAssetManager(textureAssets, {
      useDefaultLoadingScreen: true,
    });

    return (
      <box
        name="map"
        size={2}
        position={new Vector3(0, 0, 0)}
        height={1}
        width={0.75}
        depth={0.25}
        wrap
      >
        <standardMaterial name="map">
          <texture url={userImage} assignTo="emissiveTexture" />
        </standardMaterial>
      </box>
    );
  };

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
          <Suspense fallback={null}>
            <RenderImage userImage={userImage} />
          </Suspense>
        </Scene>
      </Engine>
    </div>
  );
};

export default Cuboid;
