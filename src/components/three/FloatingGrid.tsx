import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useSpring, animated } from '@react-spring/three';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3, Euler } from 'three';

// Import images
import img1 from '../../assets/images/aboutimg/1.png';
import img2 from '../../assets/images/aboutimg/2.png';
import img3 from '../../assets/images/aboutimg/3.png';
import img4 from '../../assets/images/aboutimg/4.png';
import img5 from '../../assets/images/aboutimg/5.png';
import img6 from '../../assets/images/aboutimg/6.png';
import img7 from '../../assets/images/aboutimg/7.png';
import img8 from '../../assets/images/aboutimg/8.png';
import img9 from '../../assets/images/aboutimg/9.png';

// Create array of imported images (using fewer images for better performance)
const imageUrls = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

interface GridItemProps {
  position: [number, number, number];
  url: string;
  index: number;
}

function GridItem({ position, url, index }: GridItemProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, url);

  // Create a staggered animation delay
  const delay = index * 0.1;

  const { scale, positionZ, opacity } = useSpring({
    from: {
      scale: 0.8,
      positionZ: position[2] - 2,
      opacity: 0
    },
    to: {
      scale: 1,
      positionZ: position[2],
      opacity: 0.9
    },
    delay: delay * 1000,
    config: {
      mass: 1,
      tension: 280,
      friction: 60
    }
  });

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      // Subtle floating movement
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + index) * 0.05;
      // Gentle rotation
      meshRef.current.rotation.z = Math.sin(time * 0.3 + index) * 0.02;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      position-x={position[0]}
      position-y={position[1]}
      position-z={positionZ}
      scale-x={scale}
      scale-y={scale}
      scale-z={scale}
    >
      <Plane args={[1.5, 1]}>
        <animated.meshBasicMaterial
          attach="material"
          map={texture}
          transparent
          opacity={opacity}
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </Plane>
    </animated.mesh>
  );
}

export default function FloatingGrid() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Very subtle overall movement
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {imageUrls.map((url, index) => {
        // Calculate grid position
        const row = Math.floor(index / 3);
        const col = index % 3;
        const x = (col - 1) * 2; // Center the grid
        const y = (row - 1) * 1.4; // Adjust spacing
        const z = 0;

        return (
          <GridItem
            key={url}
            url={url}
            position={[x, y, z]}
            index={index}
          />
        );
      })}
    </group>
  );
}