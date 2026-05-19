"use client";

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CameraRig() {
  const vec = new THREE.Vector3();
  
  useFrame((state) => {
    // Cinematic slow pan based on time
    const time = state.clock.getElapsedTime();
    const x = Math.sin(time * 0.2) * 2;
    const z = Math.cos(time * 0.2) * 2 + 8;
    
    state.camera.position.lerp(vec.set(x, 2, z), 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
