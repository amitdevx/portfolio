'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ZoomIn, ZoomOut, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, RotateCcw } from 'lucide-react';

interface MermaidProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Unique client-side ID to prevent hydration mismatches and collision
  const [elementId, setElementId] = useState<string>('');
  
  // Zoom & Pan state
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setElementId(`mermaid-${Math.floor(Math.random() * 100000)}`);
  }, []);

  useEffect(() => {
    if (!elementId) return;

    const renderChart = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false, // Control rendering manually
          theme: 'dark',
          securityLevel: 'strict', // SECURITY: Prevents XSS via click directives and interactive elements
          fontFamily: 'inherit',
        });
        
        if (ref.current) {
          // Reset container content to raw chart text so re-renders don't re-parse generated SVGs
          // SECURITY: Use textContent instead of innerHTML to prevent HTML/script injection
          ref.current.textContent = chart;
          ref.current.removeAttribute('data-processed');
          
          await mermaid.run({
            nodes: [ref.current]
          });
          setHasError(false);
        }
      } catch (error) {
        console.error("Mermaid rendering error:", error);
        setHasError(true);
      }
    };
    
    renderChart();
  }, [chart, elementId]);

  // Handlers for Zoom / Pan Controls
  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.15, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.15, 0.5));
  
  const handlePanLeft = () => setTranslateX((prev) => prev - 40);
  const handlePanRight = () => setTranslateX((prev) => prev + 40);
  const handlePanUp = () => setTranslateY((prev) => prev - 40);
  const handlePanDown = () => setTranslateY((prev) => prev + 40);

  const handleReset = () => {
    setScale(1);
    setTranslateX(0);
    setTranslateY(0);
  };

  return (
    <div className="w-full flex flex-col space-y-2 my-8 border border-border/50 rounded-xl overflow-hidden bg-black shadow-lg">
      {/* Dedicated Header Bar for Control Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-2 border-b border-border/50 bg-[#0a0a0a]/80 backdrop-blur gap-2 z-10">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
            System Flowchart
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            Zoom: {Math.round(scale * 100)}%
          </span>
        </div>
        
        {/* Floating Zoom & Pan Controls Toolbar */}
        <div className="flex items-center gap-1.5 p-0.5 bg-[#030712]/50 border border-white/5 rounded-lg shadow-sm">
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors duration-150"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors duration-150"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          
          <div className="h-3 w-px bg-white/10 mx-0.5" />
          
          <button
            onClick={handlePanLeft}
            title="Pan Left"
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors duration-150"
            aria-label="Pan Left"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handlePanRight}
            title="Pan Right"
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors duration-150"
            aria-label="Pan Right"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handlePanUp}
            title="Pan Up"
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors duration-150"
            aria-label="Pan Up"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handlePanDown}
            title="Pan Down"
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors duration-150"
            aria-label="Pan Down"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
          
          <div className="h-3 w-px bg-white/10 mx-0.5" />
          
          <button
            onClick={handleReset}
            title="Reset View"
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors duration-150"
            aria-label="Reset View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Viewport for pan & zoom transform */}
      <div className="w-full relative overflow-hidden flex justify-center items-center py-6 px-4 bg-black select-none min-h-[220px]">
        {hasError ? (
          <div className="text-center p-4 border border-red-500/20 rounded bg-red-950/15 max-w-lg">
            <p className="text-xs text-red-400 font-mono">Mermaid Syntax Render Blocked</p>
            <pre className="text-[10px] text-slate-500 font-mono mt-2 overflow-x-auto text-left max-h-32 p-2 bg-slate-950/50 rounded">
              {chart}
            </pre>
          </div>
        ) : (
          <div 
            id={elementId}
            ref={ref} 
            className="mermaid text-sm md:text-base transition-transform duration-200 ease-out origin-center"
            style={{
              transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            }}
          >
            {chart}
          </div>
        )}
      </div>
      <div className="bg-[#030712]/30 px-4 py-1.5 border-t border-border/20 flex items-center justify-between text-[9px] text-slate-500 font-mono">
        <span>Use the controls in the top header to zoom & pan the diagram</span>
        <span>Drag / Hover Enabled</span>
      </div>
    </div>
  );
}
