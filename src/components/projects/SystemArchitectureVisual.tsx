"use client";

import dynamic from 'next/dynamic';
import { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Lazy load the 3D scene to avoid SSR issues and optimize initial load
const ArchitectureScene = dynamic(
  () => import('@/components/architecture/ArchitectureScene'),
  { ssr: false }
);

export type ArchitectureType = "schemasense" | "professor-profiler" | "eatinformed";

interface SystemArchitectureVisualProps {
  architectureType: ArchitectureType;
  title?: string;
  description?: string;
}

export function SystemArchitectureVisual({
  architectureType,
  title = "System Architecture Visual",
  description = "Cinematic animated 3D visualization of the system infrastructure."
}: SystemArchitectureVisualProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full rounded-2xl border border-white/10 bg-[#050510] relative overflow-hidden h-[260px] md:h-[320px] lg:h-[420px] flex items-center justify-center">
        <div className="text-white/50 text-sm">Loading 3D Visual...</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col space-y-4 my-8">
      <div className="space-y-1">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          {title}
        </h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#050510] to-[#0a0a1a] relative overflow-hidden h-[260px] md:h-[320px] lg:h-[420px] group shadow-2xl shadow-cyan-900/20"
      >
        {/* Glassmorphism overlay edges */}
        <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
        <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-cyan-500/30 transition-all duration-700" />
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/30 rounded-br-2xl z-20 pointer-events-none" />

        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-[#050510]">
            <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <ArchitectureScene type={architectureType} />
        </Suspense>
      </motion.div>
    </div>
  );
}
