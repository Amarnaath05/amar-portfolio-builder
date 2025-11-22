import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, OrbitControls, Environment, PerspectiveCamera, Text, Plane } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import characterImage from "@assets/3d_stylized_character_of_a_software_engineer_1763815808967.png";

function FloatingPanel({ position, rotation, children, color = "#00ffff" }) {
  const panelRef = useRef(null);

  useFrame(({ clock }) => {
    if (panelRef.current) {
      panelRef.current.position.y += Math.sin(clock.getElapsedTime() + position[0]) * 0.0008;
      panelRef.current.rotation.z += 0.0002;
    }
  });

  return (
    <group ref={panelRef} position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[1.2, 0.7]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          wireframe={false}
          transparent={true}
          opacity={0.1}
        />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1.2, 0.7]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}

function FloatingCodeElement({ position, text, color = "#00ffff" }) {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y += Math.sin(clock.getElapsedTime() * 0.5 + position[1]) * 0.0005;
      groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 0.4, 0.05]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent={true}
          opacity={0.15}
        />
      </mesh>
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[0.98, 0.38, 0.02]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive={color}
          emissiveIntensity={0.2}
          transparent={true}
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

function Character3DModel() {
  const groupRef = useRef(null);
  const texture = useTexture(characterImage);

  useMemo(() => {
    if (texture) {
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearFilter;
    }
  }, [texture]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[3.5, 4.5, 0.5]}>
      {/* Main character */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 0.2]} />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          side={THREE.DoubleSide}
          metalness={0.05}
          roughness={0.3}
        />
      </mesh>

      {/* Rim light glow */}
      <mesh position={[0, 0, -0.2]}>
        <boxGeometry args={[1.05, 1.05, 0.1]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.1}
        />
      </mesh>

      {/* Purple rim accent */}
      <mesh position={[0.52, 0, 0]}>
        <boxGeometry args={[0.08, 1, 0.4]} />
        <meshStandardMaterial
          emissive="#8b5cf6"
          emissiveIntensity={0.4}
          transparent={true}
          opacity={0.15}
        />
      </mesh>

      {/* Cyan rim accent */}
      <mesh position={[-0.52, 0, 0]}>
        <boxGeometry args={[0.08, 1, 0.4]} />
        <meshStandardMaterial
          emissive="#00ffff"
          emissiveIntensity={0.4}
          transparent={true}
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

function Particles() {
  const particlesRef = useRef(null);

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(300);
    for (let i = 0; i < 300; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current && particlesRef.current.geometry) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(clock.getElapsedTime() * 0.3 + i) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particlePositions}
          count={particlePositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        sizeAttenuation={true}
        color="#00ffff"
        emissive="#00ffff"
        transparent={true}
        opacity={0.4}
      />
    </points>
  );
}

export default function Character3D() {
  const cameraRef = useRef(null);

  useFrame(({ camera, clock }) => {
    if (cameraRef.current) {
      const time = clock.getElapsedTime() * 0.3;
      camera.position.x = Math.sin(time) * 3;
      camera.position.z = 6 + Math.cos(time) * 1;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <Canvas
      camera={{ position: [3, 0, 6], fov: 45 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      gl={{
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
        toneMappingExposure: 1.2,
      }}
    >
      <PerspectiveCamera ref={cameraRef} makeDefault position={[3, 0, 6]} fov={45} />

      {/* Lighting Setup */}
      <ambientLight intensity={0.5} color="#ffffff" />

      {/* Cyan rim light */}
      <directionalLight
        position={[8, 5, 8]}
        intensity={1.2}
        color="#00ffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Purple accent light */}
      <directionalLight position={[-8, 3, 5]} intensity={0.8} color="#8b5cf6" />

      {/* Blue fill light */}
      <directionalLight position={[0, -5, -5]} intensity={0.6} color="#0070f3" />

      {/* Point lights for atmosphere */}
      <pointLight position={[5, 3, 3]} intensity={0.5} color="#00ffff" distance={20} />
      <pointLight position={[-5, 3, 3]} intensity={0.5} color="#8b5cf6" distance={20} />

      {/* Volumetric light effect with fog */}
      <fog attach="fog" args={["#0f172a", 5, 20]} />

      {/* Floating UI Panels */}
      <FloatingPanel position={[4, 2, -2]} rotation={[0, -0.3, 0]} color="#00ffff" />
      <FloatingPanel position={[-4, 1, -2]} rotation={[0, 0.3, 0]} color="#8b5cf6" />
      <FloatingPanel position={[3, -2, -1]} rotation={[0.2, 0.2, 0.1]} color="#0070f3" />

      {/* Floating Code Elements */}
      <FloatingCodeElement position={[2, 3.5, -3]} text="React" color="#00ffff" />
      <FloatingCodeElement position={[-2, 2, -2.5]} text="Node.js" color="#8b5cf6" />
      <FloatingCodeElement position={[0, -3, -1.5]} text="MongoDB" color="#0070f3" />

      {/* Particles */}
      <Particles />

      {/* Character Model */}
      <Character3DModel />

      {/* Environment */}
      <Environment preset="night" intensity={0.4} />
    </Canvas>
  );
}
