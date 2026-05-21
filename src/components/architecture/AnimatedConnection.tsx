"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AnimatedConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  dashed?: boolean;
  pulse?: boolean;
}

export function AnimatedConnection({ start, end, color = '#00f0ff', dashed = true, pulse = true }: AnimatedConnectionProps) {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  
  const geometry = useMemo(() => {
    // create a slight curve for aesthetics
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const mid = startVec.clone().lerp(endVec, 0.5);
    mid.y += 0.5; // bow string effect
    
    const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
    return new THREE.TubeGeometry(curve, 32, 0.015, 8, false);
  }, [start, end]);

  useFrame((state) => {
    if (materialRef.current && dashed) {
      materialRef.current.opacity = 0.28 + Math.sin(state.clock.getElapsedTime() * 2) * 0.12;
    }
  });

  return (
    <group>
      <mesh geometry={geometry}>
        <meshBasicMaterial ref={materialRef} color={color} transparent opacity={0.4} />
      </mesh>
      {pulse && (
        <mesh geometry={geometry}>
          <meshBasicMaterial color={color} transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      )}
    </group>
  );
}
