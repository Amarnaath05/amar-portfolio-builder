import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import characterImage from "@assets/3d_stylized_character_of_a_software_engineer_1763815808967.png";

function CharacterModel() {
  const groupRef = useRef(null);
  const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
  const texture = useMemo(() => textureLoader.load(characterImage), [textureLoader]);

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
        <mesh scale={[3, 4, 0.1]} position={[0, 0, 0]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            map={texture}
            transparent={true}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Character3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, -5, 5]} intensity={0.8} color="#00ffff" />
      <CharacterModel />
    </Canvas>
  );
}
