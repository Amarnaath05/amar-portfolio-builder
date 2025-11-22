import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import characterImage from "@assets/3d_stylized_character_of_a_software_engineer-removebg-preview_1763831991124.png";

function Character3DModel() {
  const texture = useTexture(characterImage);
  
  useMemo(() => {
    if (texture) {
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearFilter;
    }
  }, [texture]);

  return (
    <mesh position={[0, 0, 0]} scale={[2.8, 3.8, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        map={texture}
        transparent={true}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}


export default function Character3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true, clearColor: 0x000000, clearAlpha: 0 }}
      shadows
    >
      {/* Simple lighting */}
      <ambientLight intensity={1} />

      {/* Character Model */}
      <Character3DModel />
    </Canvas>
  );
}
