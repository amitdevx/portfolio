"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
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
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(() => {
    if (meshRef.current && type !== 'sphere') {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
      <group position={position} scale={scale}>
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
        
        {/* Glow halo */}
        {glow && (
          <mesh>
            {type === 'cube' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
            {type === 'cylinder' && <cylinderGeometry args={[0.75, 0.75, 1.4, 32]} />}
            {type === 'sphere' && <sphereGeometry args={[0.9, 32, 32]} />}
            <meshBasicMaterial color={color} transparent opacity={0.15} depthWrite={false} blending={THREE.AdditiveBlending} />
          </mesh>
        )}

        {/* Glassmorphism HTML Label */}
        <Html position={[0, -1.2, 0]} center distanceFactor={10} zIndexRange={[100, 0]}>
          <div className="px-3 py-1.5 rounded-lg backdrop-blur-md bg-black/40 border border-white/10 text-white text-xs font-medium whitespace-nowrap tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <span style={{ textShadow: `0 0 8px ${color}` }}>{label}</span>
          </div>
        </Html>
      </group>
    </Float>
  );
}
