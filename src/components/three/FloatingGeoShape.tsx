import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeoShapeProps {
  mousePosition?: { x: number; y: number };
}

export default function FloatingGeoShape({ mousePosition = { x: 0, y: 0 } }: FloatingGeoShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Rotate the shape
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;

    // Smooth mouse following
    if (mousePosition) {
      const targetX = initialPosition.current.x + (mousePosition.x * 0.1);
      const targetY = initialPosition.current.y + (mousePosition.y * 0.1);
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.1;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.1;
    }
  });

  return (
    <Icosahedron
      ref={meshRef}
      args={[1, 1]} // radius and detail level
      position={[0, 0, 0]}
    >
      <meshStandardMaterial
        color="#5D4A82"
        roughness={0.3}
        metalness={0.7}
        wireframe={true}
      />
    </Icosahedron>
  );
}