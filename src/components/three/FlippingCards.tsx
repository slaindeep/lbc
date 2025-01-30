import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useSpring, animated } from '@react-spring/three';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3, Euler, Group } from 'three';

// Import images directly
import img1 from '../../assets/images/aboutimg/1.png';
import img2 from '../../assets/images/aboutimg/2.png';
import img3 from '../../assets/images/aboutimg/3.png';
import img4 from '../../assets/images/aboutimg/4.png';
import img5 from '../../assets/images/aboutimg/5.png';
import img6 from '../../assets/images/aboutimg/6.png';
import img7 from '../../assets/images/aboutimg/7.png';
import img8 from '../../assets/images/aboutimg/8.png';
import img9 from '../../assets/images/aboutimg/9.png';
import img10 from '../../assets/images/aboutimg/10.png';
import img11 from '../../assets/images/aboutimg/11.png';
import img12 from '../../assets/images/aboutimg/12.png';
import img13 from '../../assets/images/aboutimg/13.png';

// Create array of imported images
const imageUrls = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13
];

interface CardProps {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  index: number;
  totalCards: number;
}

function Card({ position, rotation, url, index, totalCards }: CardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, url);
  
  // Create a staggered animation delay based on index
  const delay = index * 0.2;
  
  const springs = useSpring({
    from: { 
      flip: 0,
      opacity: 0 
    },
    to: async (next) => {
      while (true) {
        await next({ 
          flip: 1,
          opacity: 1,
          delay: delay 
        });
        await next({ 
          flip: 0,
          opacity: 0.8,
          delay: 3 
        });
      }
    },
    config: { 
      mass: 1,
      tension: 170,
      friction: 26 
    },
    loop: true
  });

  useFrame((state) => {
    if (meshRef.current) {
      // Add subtle floating movement
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + index) * 0.1;
      
      // Update rotation based on spring
      meshRef.current.rotation.y = springs.flip.get() * Math.PI;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={new Vector3(...position)}
      rotation={new Euler(...rotation)}
    >
      <Plane args={[2, 3]}>
        <animated.meshBasicMaterial
          attach="material"
          map={texture}
          transparent
          opacity={springs.opacity}
          side={THREE.DoubleSide}
        />
        <meshStandardMaterial
          attach="material-border"
          color="#ffffff"
          metalness={0.5}
          roughness={0.2}
          wireframe={true}
          transparent
          opacity={0.8}
        />
      </Plane>
    </animated.mesh>
  );
}

export default function FlippingCards() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Add subtle group rotation
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {imageUrls.map((url, index) => {
        // Create a circular arrangement
        const angle = (index / imageUrls.length) * Math.PI * 2;
        const radius = 4; // Increased radius for better spacing
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = -2; // All cards slightly back

        return (
          <Card
            key={url}
            url={url}
            position={[x, y, z]}
            rotation={[0, 0, angle]}
            index={index}
            totalCards={imageUrls.length}
          />
        );
      })}
    </group>
  );
}