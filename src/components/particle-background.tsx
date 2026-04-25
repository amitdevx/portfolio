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
    camera.position.set(0, 3, 6);
    camera.lookAt(0, 0, 0);

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

    // ─── Low-Poly Topography Grid ───────────────────────
    const gridSize = isMobile || isLowEndDevice ? 20 : isTablet ? 35 : 50;
    const gridSpacing = 0.35;
    const geometry = new THREE.PlaneGeometry(
      gridSize * gridSpacing,
      gridSize * gridSpacing,
      gridSize,
      gridSize
    );
    geometry.rotateX(-Math.PI / 2.5);

    // Displace vertices to create terrain
    const positions = geometry.attributes.position.array as Float32Array;
    const originalPositions = new Float32Array(positions.length);
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const z = positions[i + 2];
      // Smooth rolling hills with layered noise
      const height = 
        Math.sin(x * 0.3) * Math.cos(z * 0.3) * 0.5 +
        Math.sin(x * 0.7 + 1) * Math.cos(z * 0.5 + 2) * 0.3 +
        Math.sin(x * 1.5 + 3) * Math.cos(z * 1.2 + 1) * 0.15;
      positions[i + 1] = height;
    }
    
    originalPositions.set(positions);
    geometry.computeVertexNormals();

    // Wireframe material with warm accent color matching the theme
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color('hsl(31, 32%, 63%)'), // primary color
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.06 : 0.08,
    });

    const terrain = new THREE.Mesh(geometry, material);
    terrain.position.y = -1.5;
    scene.add(terrain);

    // Floating particles above the grid
    const particleCount = isMobile || isLowEndDevice ? 100 : isTablet ? 300 : 800;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = Math.random() * 4 - 0.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.02 : 0.015,
      color: 0xffffff,
      transparent: true,
      opacity: isMobile ? 0.4 : 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse interaction
    const mouse = new THREE.Vector2(0, 0);
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const onMouseMove = (event: MouseEvent) => {
      if (isReducedMotion) return;
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.001;
      lastScrollY = currentScrollY;
    };

    if (!isMobile && !isReducedMotion) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }
    window.addEventListener('scroll', onScroll, { passive: true });

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

      // Animate terrain vertices
      const terrainPositions = terrain.geometry.attributes.position.array as Float32Array;
      
      if (!isReducedMotion) {
        for (let i = 0; i < originalPositions.length; i += 3) {
          // On mobile or low-end, update less frequently or use simpler math
          if ((isMobile || isLowEndDevice) && i % 6 !== 0) continue;
          
          const x = originalPositions[i];
          const z = originalPositions[i + 2];
          const originalY = originalPositions[i + 1];
          
          // Subtle wave animation
          const wave = Math.sin(x * 0.5 + elapsedTime * 0.3) * 
                       Math.cos(z * 0.5 + elapsedTime * 0.2) * 0.08;
          
          // Scroll-reactive displacement
          const scrollDisplace = scrollVelocity * Math.sin(x * 0.3) * 0.5;
          
          terrainPositions[i + 1] = originalY + wave + scrollDisplace;
        }
        terrain.geometry.attributes.position.needsUpdate = true;
      }

      // Rotate particles
      particles.rotation.y = elapsedTime * 0.03;
      
      // Dampen scroll velocity
      scrollVelocity *= 0.95;

      // Subtle camera movement based on mouse
      if (!isMobile && !isReducedMotion) {
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
        camera.position.y += (3 + mouse.y * 0.3 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);
      }

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
      window.removeEventListener('scroll', onScroll);
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
      geometry.dispose();
      material.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
