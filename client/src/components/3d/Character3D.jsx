import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import characterImage from "@assets/3d_stylized_character_of_a_software_engineer_1763815808967.png";

function CharacterModel() {
  const groupRef = useRef(null);
  const textureRef = useRef(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={1.5}
      floatingRange={[-0.3, 0.3]}
    >
      <group ref={groupRef}>
        <mesh scale={[3, 4, 0.1]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            map-encoding={THREE.sRGBEncoding}
            transparent={true}
            alphaMap={textureRef}
          >
            <canvasTexture 
              ref={textureRef}
              attach="map"
              args={[createCharacterTexture()]}
            />
          </meshStandardMaterial>
        </mesh>
      </group>
    </Float>
  );
}

function createCharacterTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  
  const img = new Image();
  img.src = characterImage;
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  
  return canvas;
}

export default function Character3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -5, 5]} intensity={0.8} color="#00ffff" />
        <Environment preset="night" />
        <CharacterModel />
      </Canvas>
    </div>
  );
}
