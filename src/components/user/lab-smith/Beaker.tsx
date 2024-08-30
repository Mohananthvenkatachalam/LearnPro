import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import beaker from "../assets/3d/beaker.glb";

export default function Beaker(props) {
  const { nodes, materials } = useGLTF(beaker);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.003"]}
        position={[0.07, 0.34, -0.853]}
        rotation={[0, -1.315, 0]}
        scale={[-0.146, -0.108, -0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.Water}
        position={[0.07, 0.34, -0.853]}
        rotation={[0, -1.315, 0]}
        scale={[-0.144, -0.107, -0.144]}
      />
    </group>
  );
}

useGLTF.preload(beaker);