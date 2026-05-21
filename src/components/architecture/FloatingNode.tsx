"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingNodeProps {
  position: [number, number, number];
  label: string;
  color?: string;
  scale?: number;
  type?: 'cylinder' | 'cube' | 'sphere';
  glow?: boolean;
}

export function FloatingNode({ position, label, color = '#00f0ff', scale = 1, type = 'cube', glow = true }: FloatingNodeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.position.y = position[1] + Math.sin(time * 2 + position[0]) * 0.18;
    }

    if (meshRef.current && type !== 'sphere') {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale} userData={{ label }}>
      <mesh ref={meshRef}>
        {type === 'cube' && <boxGeometry args={[1, 1, 1]} />}
        {type === 'cylinder' && <cylinderGeometry args={[0.6, 0.6, 1.2, 32]} />}
        {type === 'sphere' && <sphereGeometry args={[0.7, 32, 32]} />}
        <meshStandardMaterial
          ref={materialRef}
          color={color}
          emissive={color}
          emissiveIntensity={glow ? 1.5 : 0.2}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {glow && (
        <mesh>
          {type === 'cube' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
          {type === 'cylinder' && <cylinderGeometry args={[0.75, 0.75, 1.4, 32]} />}
          {type === 'sphere' && <sphereGeometry args={[0.9, 32, 32]} />}
          <meshBasicMaterial color={color} transparent opacity={0.15} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>
      )}
    </group>
  );
}
