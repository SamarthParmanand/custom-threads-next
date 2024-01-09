import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import TShirt from "./TShirt";

const TShirtCanvas = () => {
  return (
    <>
      <div className="w-[30rem] h-[30rem] rounded-full bg-gradient-to-b from-gray-500 to-gray-200 absolute top-[10%] right-[27%] shadow" />
      <div className="w-[15rem] h-[15rem] rounded-full bg-gradient-to-b from-gray-500 to-gray-200 absolute top-[55%] right-[20%] shadow" />
      <div className="w-[30rem] h-[30rem] rounded-full bg-gradient-to-b from-gray-500 to-gray-200 absolute top-[5%] left-[15%] shadow" />
      <div className="w-[15rem] h-[15rem] rounded-full bg-gradient-to-b from-gray-500 to-gray-200 absolute top-[50%] left-[33%] shadow" />
      <Canvas
        shadows
        camera={{ position: [0, 0, 2], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <OrbitControls
          maxZoom={1}
          minZoom={1}
          enableZoom={true}
          enablePan={false}
          enableDamping
          dampingFactor={0.25}
          rotateSpeed={0.3}
        />
        <TShirt />
      </Canvas>
    </>
  );
};

export default TShirtCanvas;
