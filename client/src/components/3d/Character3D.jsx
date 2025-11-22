import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import characterImage from "@assets/3d_stylized_character_of_a_software_engineer_1763815808967.png";

function Character3DModel() {
  const groupRef = useRef(null);
  const texture = useTexture(characterImage);
  
  useMemo(() => {
    if (texture) {
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearFilter;
    }
  }, [texture]);

  return (
    <group ref={groupRef} scale={[3, 4, 0.5]}>
      {/* Main character mesh */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 0.2]} />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          side={THREE.DoubleSide}
          metalness={0.1}
          roughness={0.4}
        />
      </mesh>

      {/* Back face for depth */}
      <mesh position={[0, 0, -0.15]}>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial
          color="#0a1628"
          transparent={true}
          opacity={0.3}
        />
      </mesh>

      {/* Edge lighting for depth */}
      <mesh position={[0.5, 0, -0.1]} scale={[0.1, 1, 0.4]}>
        <boxGeometry />
        <meshStandardMaterial
          emissive="#00ffff"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.2}
        />
      </mesh>

      <mesh position={[-0.5, 0, -0.1]} scale={[0.1, 1, 0.4]}>
        <boxGeometry />
        <meshStandardMaterial
          emissive="#ff00ff"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

export default function Character3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1.2} 
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight 
        position={[-5, -5, 5]} 
        intensity={0.8} 
        color="#00ffff" 
      />
      <directionalLight 
        position={[5, -5, -5]} 
        intensity={0.6} 
        color="#ff00ff" 
      />
      
      {/* Environment glow */}
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#00ffff" />
      <pointLight position={[0, 0, -3]} intensity={0.5} color="#ff00ff" />

      {/* Model */}
      <Character3DModel />
    </Canvas>
  );
}
