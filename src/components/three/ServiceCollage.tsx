import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useSpring, animated } from '@react-spring/three';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3, Euler, Mesh, Group } from 'three';

// Define interface for ImagePlane props
interface ImagePlaneProps {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  opacity?: number;
  scale?: number;
}

// Define the services we want to showcase
const serviceImages = [
  '/images/services/banners/accounting/accounting_1280.webp',
  '/images/services/banners/advisory/advisory_1280.webp',
  '/images/services/banners/corporate/corporate_1280.webp',
  '/images/services/banners/audit/audit_1280.webp',
  '/images/services/banners/business-admin/business-admin_1280.webp',
] as const;

function ImagePlane({ position, rotation, url, opacity = 1, scale = 1 }: ImagePlaneProps) {
  const texture = useLoader(TextureLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);

  // Define spring animations with proper typing
  const { springOpacity, springScale } = useSpring({
    springOpacity: opacity,
    springScale: scale,
    config: { mass: 1, tension: 20, friction: 15 },
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.02;
      meshRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.02;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={new Vector3(...position)}
      rotation={new Euler(...rotation)}
      scale={springScale.to(s => [s, s, s])}
    >
      <Plane args={[3, 2]}>
        <animated.meshBasicMaterial
          attach="material"
          map={texture}
          transparent
          opacity={springOpacity}
          side={THREE.DoubleSide}
          depthTest={true}
          depthWrite={false}
          blending={THREE.CustomBlending}
          blendSrc={THREE.SrcAlphaFactor}
          blendDst={THREE.OneMinusSrcAlphaFactor}
        />
      </Plane>
    </animated.mesh>
  );
}

export default function ServiceCollage() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {serviceImages.map((url, index) => {
        const angle = (index / serviceImages.length) * Math.PI * 2;
        const radius = 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = -index * 0.5;

        return (
          <ImagePlane
            key={url}
            url={url}
            position={[x, y, z]}
            rotation={[0, 0, angle]}
            opacity={0.8 - index * 0.1}
            scale={1 - index * 0.1}
          />
        );
      })}
    </group>
  );
}