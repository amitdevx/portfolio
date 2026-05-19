"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  dashed?: boolean;
  pulse?: boolean;
}

export function AnimatedConnection({ start, end, color = '#00f0ff', dashed = true, pulse = true }: AnimatedConnectionProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lineRef = useRef<any>(null);
  
  const points = useMemo(() => {
    // create a slight curve for aesthetics
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const mid = startVec.clone().lerp(endVec, 0.5);
    mid.y += 0.5; // bow string effect
    
    const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
    return curve.getPoints(50);
  }, [start, end]);

  useFrame(() => {
    if (lineRef.current && dashed && lineRef.current.material) {
      lineRef.current.material.dashOffset -= 0.01;
    }
  });

  return (
    <group>
      <Line
        ref={lineRef}
        points={points}
        color={color}
        lineWidth={2}
        transparent
        opacity={0.4}
        dashed={dashed}
        dashScale={20}
        dashSize={1}
        dashOffset={0}
      />
      {pulse && (
        <Line
          points={points}
          color={color}
          lineWidth={5}
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      )}
    </group>
  );
}
