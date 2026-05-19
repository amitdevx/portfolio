"use client";

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import { FloatingNode } from './FloatingNode';
import { AnimatedConnection } from './AnimatedConnection';
import { DataParticle } from './DataParticle';
import { CameraRig } from './CameraRig';
import { GlowEffects } from './GlowEffects';

type ArchitectureType = "schemasense" | "professor-profiler" | "eatinformed";

interface ArchitectureSceneProps {
  type: ArchitectureType;
}

// Color palettes
const COLORS = {
  cyan: '#00f0ff',
  purple: '#b026ff',
  blue: '#0066ff',
  green: '#00ff66',
  orange: '#ff6600',
  white: '#ffffff',
  pink: '#ff007f',
};

function SchemaSenseScene() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Nodes */}
      <FloatingNode position={[-4, 1, 0]} label="Client Browser" type="sphere" color={COLORS.cyan} />
      <FloatingNode position={[-2, 1, -1]} label="Next.js Frontend" type="cube" color={COLORS.cyan} />
      <FloatingNode position={[0, 1, -2]} label="API Gateway" type="cube" color={COLORS.purple} />
      <FloatingNode position={[2, 1, -1]} label="FastAPI Backend" type="cube" color={COLORS.blue} />
      
      <FloatingNode position={[4, 2, 0]} label="Schema Extraction" type="cube" color={COLORS.blue} />
      <FloatingNode position={[4, 0, 0]} label="Relationship Mapper" type="cube" color={COLORS.blue} />
      
      <FloatingNode position={[0, 3, 0]} label="AI Orchestration Layer" type="sphere" color={COLORS.pink} scale={1.2} />
      <FloatingNode position={[0, -1, 2]} label="PostgreSQL DB" type="cylinder" color={COLORS.green} />
      <FloatingNode position={[-2, -1, 1]} label="SQLite Cache Layer" type="cylinder" color={COLORS.cyan} />
      
      <FloatingNode position={[-2, 3, 1]} label="Prompt Injection Defense" type="cube" color={COLORS.orange} />
      <FloatingNode position={[2, 3, 1]} label="DeepSeek-V3" type="sphere" color={COLORS.pink} />
      <FloatingNode position={[3, 4, 2]} label="OpenRouter Fallback" type="cube" color={COLORS.orange} scale={0.8} />

      {/* Connections */}
      <AnimatedConnection start={[-4, 1, 0]} end={[-2, 1, -1]} color={COLORS.cyan} />
      <AnimatedConnection start={[-2, 1, -1]} end={[0, 1, -2]} color={COLORS.cyan} />
      <AnimatedConnection start={[0, 1, -2]} end={[2, 1, -1]} color={COLORS.purple} />
      
      <AnimatedConnection start={[2, 1, -1]} end={[4, 2, 0]} color={COLORS.blue} />
      <AnimatedConnection start={[2, 1, -1]} end={[4, 0, 0]} color={COLORS.blue} />
      
      <AnimatedConnection start={[2, 1, -1]} end={[0, -1, 2]} color={COLORS.green} />
      <AnimatedConnection start={[2, 1, -1]} end={[-2, -1, 1]} color={COLORS.green} />
      
      <AnimatedConnection start={[0, 1, -2]} end={[0, 3, 0]} color={COLORS.pink} />
      <AnimatedConnection start={[0, 3, 0]} end={[-2, 3, 1]} color={COLORS.pink} />
      <AnimatedConnection start={[0, 3, 0]} end={[2, 3, 1]} color={COLORS.pink} />
      <AnimatedConnection start={[2, 3, 1]} end={[3, 4, 2]} color={COLORS.orange} dashed={false} />

      {/* Particles */}
      {[0, 0.5, 1].map((delay) => (
        <DataParticle key={`p1-${delay}`} start={[-4, 1, 0]} end={[-2, 1, -1]} color={COLORS.cyan} delay={delay} />
      ))}
      {[0, 0.5].map((delay) => (
        <DataParticle key={`p2-${delay}`} start={[-2, 1, -1]} end={[0, 1, -2]} color={COLORS.cyan} delay={delay} />
      ))}
      <DataParticle start={[0, 1, -2]} end={[0, 3, 0]} color={COLORS.pink} speed={1.5} />
      <DataParticle start={[0, 3, 0]} end={[2, 3, 1]} color={COLORS.pink} speed={1.5} delay={0.2} />
      <DataParticle start={[2, 1, -1]} end={[0, -1, 2]} color={COLORS.green} speed={1.2} />
      <DataParticle start={[0, -1, 2]} end={[2, 1, -1]} color={COLORS.green} speed={1.2} delay={0.5} />
    </group>
  );
}

function ProfessorProfilerScene() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Central Orchestrator */}
      <FloatingNode position={[0, 1, 0]} label="Multi-Agent Orchestrator" type="sphere" color={COLORS.purple} scale={1.5} />
      
      {/* Inputs / Outputs */}
      <FloatingNode position={[-4, 1, 0]} label="Input Exam Papers" type="cube" color={COLORS.white} />
      <FloatingNode position={[-2, 1, 0]} label="OCR & Parsing" type="cube" color={COLORS.cyan} />
      <FloatingNode position={[4, 1, 0]} label="Output Study Plan" type="cube" color={COLORS.green} />
      <FloatingNode position={[2, 1, 0]} label="Result Aggregator" type="cube" color={COLORS.blue} />

      {/* Orbiting Agents */}
      <FloatingNode position={[0, 3, -2]} label="Analyzer Agent" type="sphere" color={COLORS.pink} scale={0.8} />
      <FloatingNode position={[2, 2, 2]} label="Pattern Agent" type="sphere" color={COLORS.orange} scale={0.8} />
      <FloatingNode position={[-2, 2, 2]} label="Psychology Agent" type="sphere" color={COLORS.cyan} scale={0.8} />
      <FloatingNode position={[0, -1, -2]} label="Strategy Gen Agent" type="sphere" color={COLORS.blue} scale={0.8} />

      {/* Connections */}
      <AnimatedConnection start={[-4, 1, 0]} end={[-2, 1, 0]} color={COLORS.white} />
      <AnimatedConnection start={[-2, 1, 0]} end={[0, 1, 0]} color={COLORS.cyan} />
      
      <AnimatedConnection start={[0, 1, 0]} end={[0, 3, -2]} color={COLORS.purple} />
      <AnimatedConnection start={[0, 1, 0]} end={[2, 2, 2]} color={COLORS.purple} />
      <AnimatedConnection start={[0, 1, 0]} end={[-2, 2, 2]} color={COLORS.purple} />
      <AnimatedConnection start={[0, 1, 0]} end={[0, -1, -2]} color={COLORS.purple} />
      
      <AnimatedConnection start={[0, 3, -2]} end={[2, 1, 0]} color={COLORS.pink} />
      <AnimatedConnection start={[2, 2, 2]} end={[2, 1, 0]} color={COLORS.orange} />
      <AnimatedConnection start={[-2, 2, 2]} end={[2, 1, 0]} color={COLORS.cyan} />
      <AnimatedConnection start={[0, -1, -2]} end={[2, 1, 0]} color={COLORS.blue} />
      
      <AnimatedConnection start={[2, 1, 0]} end={[4, 1, 0]} color={COLORS.green} />

      {/* Particles */}
      <DataParticle start={[-4, 1, 0]} end={[-2, 1, 0]} color={COLORS.white} speed={2} />
      <DataParticle start={[-2, 1, 0]} end={[0, 1, 0]} color={COLORS.cyan} speed={2} delay={0.2} />
      
      <DataParticle start={[0, 1, 0]} end={[0, 3, -2]} color={COLORS.purple} speed={1.5} delay={0.1} />
      <DataParticle start={[0, 1, 0]} end={[2, 2, 2]} color={COLORS.purple} speed={1.5} delay={0.3} />
      <DataParticle start={[0, 1, 0]} end={[-2, 2, 2]} color={COLORS.purple} speed={1.5} delay={0.5} />
      
      <DataParticle start={[0, 3, -2]} end={[2, 1, 0]} color={COLORS.pink} speed={1.5} delay={0.6} />
      <DataParticle start={[2, 1, 0]} end={[4, 1, 0]} color={COLORS.green} speed={2} delay={0.8} />
    </group>
  );
}

function EatInformedScene() {
  return (
    <group position={[0, -0.5, 0]}>
      <FloatingNode position={[-3, 0, 0]} label="Mobile Client" type="cube" color={COLORS.cyan} />
      <FloatingNode position={[-1, 0, 0]} label="Image Upload Gateway" type="cube" color={COLORS.blue} />
      
      <FloatingNode position={[0, 2, -1]} label="OCR Vision Layer" type="cube" color={COLORS.orange} />
      <FloatingNode position={[1, 0, -2]} label="Gemini Vision Model" type="sphere" color={COLORS.purple} scale={1.3} />
      <FloatingNode position={[1, -2, -1]} label="Llama 3.2 Fallback" type="cube" color={COLORS.pink} scale={0.9} />
      
      <FloatingNode position={[3, 0, 0]} label="Nutrition Analysis Engine" type="cube" color={COLORS.green} />
      <FloatingNode position={[4, 2, 1]} label="Health Recommendation" type="cube" color={COLORS.green} />
      <FloatingNode position={[4, -2, 1]} label="Real-Time Response UI" type="cube" color={COLORS.cyan} />

      {/* Connections */}
      <AnimatedConnection start={[-3, 0, 0]} end={[-1, 0, 0]} color={COLORS.cyan} />
      <AnimatedConnection start={[-1, 0, 0]} end={[0, 2, -1]} color={COLORS.blue} />
      <AnimatedConnection start={[-1, 0, 0]} end={[1, 0, -2]} color={COLORS.blue} />
      <AnimatedConnection start={[-1, 0, 0]} end={[1, -2, -1]} color={COLORS.blue} dashed={false} />
      
      <AnimatedConnection start={[0, 2, -1]} end={[3, 0, 0]} color={COLORS.orange} />
      <AnimatedConnection start={[1, 0, -2]} end={[3, 0, 0]} color={COLORS.purple} />
      <AnimatedConnection start={[1, -2, -1]} end={[3, 0, 0]} color={COLORS.pink} />
      
      <AnimatedConnection start={[3, 0, 0]} end={[4, 2, 1]} color={COLORS.green} />
      <AnimatedConnection start={[3, 0, 0]} end={[4, -2, 1]} color={COLORS.cyan} />
      <AnimatedConnection start={[4, 2, 1]} end={[-3, 0, 0]} color={COLORS.cyan} dashed={true} />

      {/* Particles */}
      <DataParticle start={[-3, 0, 0]} end={[-1, 0, 0]} color={COLORS.cyan} speed={1.5} />
      <DataParticle start={[-1, 0, 0]} end={[1, 0, -2]} color={COLORS.purple} speed={1.5} delay={0.3} />
      <DataParticle start={[1, 0, -2]} end={[3, 0, 0]} color={COLORS.purple} speed={1.5} delay={0.6} />
      <DataParticle start={[3, 0, 0]} end={[4, -2, 1]} color={COLORS.green} speed={2} delay={0.9} />
    </group>
  );
}

export default function ArchitectureScene({ type }: ArchitectureSceneProps) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#050510']} />
        <fog attach="fog" args={['#050510', 5, 20]} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color={COLORS.purple} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color={COLORS.cyan} />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <Suspense fallback={null}>
          {type === 'schemasense' && <SchemaSenseScene />}
          {type === 'professor-profiler' && <ProfessorProfilerScene />}
          {type === 'eatinformed' && <EatInformedScene />}
          <Environment preset="night" />
          <GlowEffects />
        </Suspense>
        
        <CameraRig />
      </Canvas>
    </div>
  );
}
