import { memo, Suspense } from "react";
import {
  Engine,
  Scene,
  Task,
  TaskType,
  useAssetManager,
} from "react-babylonjs";
import { Vector3, Color3 } from "@babylonjs/core";

interface ShapeProps {
  userImage: string;
}

interface CuboidProps extends ShapeProps { viewCuboid: boolean}

const Cuboid = ({ userImage, viewCuboid }: CuboidProps) => {
  const Shape = ({ userImage }: ShapeProps) => {
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

  const arePropsEqual = (prevProps:Readonly<ShapeProps>, nextProps:Readonly<ShapeProps>) => {
    return prevProps.userImage === nextProps.userImage
  }

  const MemoizedShape = memo(Shape, arePropsEqual);

  return (
    <div
      className="cuboid-container"
      style={{ display: viewCuboid ? "block" : "none" }}
    >
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
            <MemoizedShape userImage={userImage} />
          </Suspense>
        </Scene>
      </Engine>
    </div>
  );
};

export default Cuboid;
