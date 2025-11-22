import { Canvas } from "@react-three/fiber";
import { useTexture, Sphere } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import characterImage from "@assets/3d_stylized_character_of_a_software_engineer_1763815808967.png";

function Character3DModel() {
  const texture = useTexture(characterImage);
  
  useMemo(() => {
    if (texture) {
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearFilter;
    }
  }, [texture]);

  return (
    <group scale={[2.8, 3.8, 1.2]}>
      {/* Main character front face */}
      <mesh castShadow receiveShadow position={[0, 0, 0.3]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          side={THREE.FrontSide}
          metalness={0.05}
          roughness={0.4}
        />
      </mesh>

      {/* Character side depth - right */}
      <mesh castShadow position={[0.5, 0, 0]}>
        <planeGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#0a0f1a"
          transparent={true}
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Character side depth - left */}
      <mesh castShadow position={[-0.5, 0, 0]}>
        <planeGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#0a0f1a"
          transparent={true}
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Character back - subtle dark */}
      <mesh position={[0, 0, -0.3]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#050a15"
          transparent={true}
          opacity={0.4}
        />
      </mesh>

      {/* Top edge rim light - cyan */}
      <mesh position={[0, 0.52, 0]} scale={[1.1, 0.08, 1]}>
        <boxGeometry />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.6}
          transparent={true}
          opacity={0.3}
        />
      </mesh>

      {/* Bottom edge rim light - purple */}
      <mesh position={[0, -0.52, 0]} scale={[1.1, 0.08, 1]}>
        <boxGeometry />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.6}
          transparent={true}
          opacity={0.3}
        />
      </mesh>

      {/* Right edge rim light */}
      <mesh position={[0.52, 0, 0]} scale={[0.08, 1.1, 1]}>
        <boxGeometry />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.5}
          transparent={true}
          opacity={0.25}
        />
      </mesh>

      {/* Left edge rim light */}
      <mesh position={[-0.52, 0, 0]} scale={[0.08, 1.1, 1]}>
        <boxGeometry />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          transparent={true}
          opacity={0.25}
        />
      </mesh>

      {/* Glow halo around character */}
      <mesh position={[0, 0, -0.5]} scale={[1.3, 1.3, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#0070f3"
          emissive="#0070f3"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

function BackgroundEnvironment() {
  return (
    <>
      {/* Floating background spheres for depth */}
      <Sphere position={[4, 2, -3]} scale={0.4} castShadow>
        <meshStandardMaterial
          color="#0070f3"
          emissive="#0070f3"
          emissiveIntensity={0.2}
          transparent={true}
          opacity={0.1}
          metalness={0.3}
          roughness={0.4}
        />
      </Sphere>

      <Sphere position={[-4, -1, -2]} scale={0.3} castShadow>
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.2}
          transparent={true}
          opacity={0.08}
          metalness={0.3}
          roughness={0.4}
        />
      </Sphere>

      {/* Ground plane for shadows */}
      <mesh position={[0, -2.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#000000"
          transparent={true}
          opacity={0.1}
        />
      </mesh>
    </>
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
      {/* Lighting Setup - Enhanced for 3D depth */}
      <ambientLight intensity={0.6} color="#ffffff" />

      {/* Main directional light - creates shadows */}
      <directionalLight 
        position={[6, 5, 4]} 
        intensity={1.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Cyan rim light - right side */}
      <directionalLight 
        position={[8, 3, 6]} 
        intensity={1.2} 
        color="#00ffff"
      />

      {/* Purple rim light - left side */}
      <directionalLight 
        position={[-8, 2, 6]} 
        intensity={0.9} 
        color="#8b5cf6" 
      />

      {/* Blue fill light - bottom */}
      <directionalLight 
        position={[0, -4, -3]} 
        intensity={0.5} 
        color="#0070f3" 
      />
      
      {/* Point lights for atmosphere and glow */}
      <pointLight 
        position={[5, 3, 4]} 
        intensity={0.6} 
        color="#00ffff" 
        distance={15}
        castShadow
      />
      <pointLight 
        position={[-5, 2, 4]} 
        intensity={0.6} 
        color="#8b5cf6" 
        distance={15}
        castShadow
      />
      <pointLight 
        position={[0, 0, 3]} 
        intensity={0.4} 
        color="#0070f3" 
        distance={10}
      />

      {/* Background environment */}
      <BackgroundEnvironment />

      {/* Character Model */}
      <Character3DModel />
    </Canvas>
  );
}
