'use client';

import React, { useEffect, useRef } from 'react';

interface MermaidProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderChart = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: true,
          theme: 'dark',
          securityLevel: 'loose',
          fontFamily: 'inherit',
        });
        
        if (ref.current) {
          ref.current.removeAttribute('data-processed');
          await mermaid.run({
            nodes: [ref.current]
          });
        }
      } catch (error) {
        console.error("Mermaid rendering error:", error);
      }
    };
    
    renderChart();
  }, [chart]);

  return (
    <div className="w-full flex justify-center my-8 overflow-x-auto p-4 bg-card/20 border border-border/50 rounded-xl">
      <div ref={ref} className="mermaid text-sm md:text-base">
        {chart}
      </div>
    </div>
  );
}
