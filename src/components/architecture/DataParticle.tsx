"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DataParticleProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  speed?: number;
  delay?: number;
}

export function DataParticle({ start, end, color = '#ffffff', speed = 1, delay = 0 }: DataParticleProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(-delay);

  const curve = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const mid = startVec.clone().lerp(endVec, 0.5);
    mid.y += 0.5;
    return new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
  }, [start, end]);

  useFrame((state, delta) => {
    timeRef.current += delta * speed * 0.5;
    
    if (timeRef.current >= 1) {
      timeRef.current = 0; // Loop
    }
    
    if (meshRef.current && timeRef.current >= 0) {
      const t = timeRef.current;
      const position = curve.getPoint(t);
      meshRef.current.position.copy(position);
      meshRef.current.visible = true;
      
      // Pulse scale
      const scale = 1 + Math.sin(t * Math.PI * 4) * 0.5;
      meshRef.current.scale.setScalar(scale);
    } else if (meshRef.current) {
      meshRef.current.visible = false;
    }
  });

  return (
    <mesh ref={meshRef} visible={false}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}
