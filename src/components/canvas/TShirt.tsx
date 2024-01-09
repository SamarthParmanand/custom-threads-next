"use client";

import { useFrame } from "@react-three/fiber";
import {useSnapshot} from 'valtio';
import { easing } from "maath";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import tshirtContext from "@/contexts/TShirtContext";
import state from "@/contexts";

export default function TShirt() {
  const tshirt = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  
  const logoTexture = useTexture(tshirt.logoDecal);
  const fullTexture = useTexture(tshirt.fullDecal);

  useFrame((state, delta) => {
    //@ts-ignore
    easing.dampC(materials.lambert1.color, tshirt.color, 0.25, delta);
  });

  const stateString = JSON.stringify(tshirt);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        //@ts-ignore
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {tshirt.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {tshirt.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            //@ts-ignore
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
}
