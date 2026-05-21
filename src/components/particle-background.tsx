'use client';

import { useEffect, useRef, memo } from 'react';
import * as THREE from 'three';

const ParticleBackground = memo(() => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Detect device capabilities
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    const isLowEndDevice = navigator.hardwareConcurrency <= 2;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReducedMotion) {
      return;
    }

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile && !isLowEndDevice,
      alpha: true,
      powerPreference: isMobile || isLowEndDevice ? 'low-power' : 'high-performance',
      stencil: false,
      precision: isMobile ? 'lowp' : 'mediump',
    });

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.sortObjects = false;
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Floating particles (Maintained particle design as requested)
    const particleCount = isMobile || isLowEndDevice ? 150 : isTablet ? 400 : 900;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 10;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.025 : 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: isMobile ? 0.4 : 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const targetMouse = new THREE.Vector2(0, 0);
    const currentMouse = new THREE.Vector2(0, 0);

    const onMouseMove = (event: MouseEvent) => {
      if (isReducedMotion) return;
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    if (!isMobile && !isReducedMotion) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    // Animation loop
    const clock = new THREE.Clock();
    const targetFPS = isMobile ? 30 : 60;
    const frameDuration = 1000 / targetFPS;
    let lastFrameTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastFrameTime;

      if (deltaTime < frameDuration && isMobile) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      lastFrameTime = now;
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation for particles
      if (!isMobile && !isReducedMotion) {
        currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
        currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;
      }

      // Physics slow drifting rotation
      particles.rotation.y = elapsedTime * 0.03 + currentMouse.x * 0.25;
      particles.rotation.x = elapsedTime * 0.015 - currentMouse.y * 0.15;

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animationIdRef.current = requestAnimationFrame(animate);

    // Handle Resize
    let resizeTimeout: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!currentMount || !rendererRef.current) return;
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }, 300);
    };

    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', onResize);
      if (!isMobile && !isReducedMotion) {
        window.removeEventListener('mousemove', onMouseMove);
      }

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (currentMount && rendererRef.current?.domElement) {
        currentMount.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
        rendererRef.current = null;
      }

      // Cleanup Three.js resources
      particleGeo.dispose();
      particleMat.dispose();
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
