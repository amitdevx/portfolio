"use client";

import React, { useState, useEffect } from 'react';

export type ArchitectureType = "schemasense" | "professor-profiler" | "eatinformed";

interface SystemArchitectureVisualProps {
  architectureType: ArchitectureType;
  title?: string;
  description?: string;
}

const COLORS = {
  cyan: '#dfa579',    // Warm copper gold (site primary)
  purple: '#c5b8a5',  // Sand gold (site secondary)
  blue: '#a67c52',    // Bronze
  green: '#d9a75d',   // Pale gold
  orange: '#f59e0b',  // Amber
  white: '#fcf8f2',   // Warm cream
  pink: '#e07a5f',    // Terracotta rust
};

interface FlowNode {
  id: string;
  label: string;
  desc: string;
  color: string;
  x: number; // coordinates in 960x400 viewBox
  y: number;
}

interface FlowLink {
  from: string;
  to: string;
  label?: string;
}

const SYSTEM_NODES: Record<ArchitectureType, FlowNode[]> = {
  schemasense: [
    { id: 'ui', label: 'Client UI', desc: 'Next.js 15 App Interface', color: COLORS.cyan, x: 120, y: 200 },
    { id: 'ingest', label: 'DDL Ingest', desc: 'Fetches database metadata', color: COLORS.blue, x: 340, y: 80 },
    { id: 'cache', label: 'Cache Check', desc: 'SQLite DDL SHA256 Check', color: COLORS.purple, x: 620, y: 80 },
    { id: 'sanitizer', label: 'Sanitizer', desc: 'Multi-layer security gate', color: COLORS.pink, x: 620, y: 320 },
    { id: 'deepseek', label: 'DeepSeek-V3', desc: 'AI Inference Engine', color: COLORS.orange, x: 840, y: 320 },
    { id: 'mapper', label: 'ER Mapper', desc: 'Generates relationships graph', color: COLORS.green, x: 840, y: 200 },
    { id: 'sse', label: 'SSE Stream', desc: 'Server-Sent Events emitter', color: COLORS.white, x: 480, y: 200 },
  ],
  'professor-profiler': [
    { id: 'upload', label: 'PDF Upload', desc: 'Upload exams & syllabus', color: COLORS.cyan, x: 120, y: 130 },
    { id: 'parser', label: 'OCR Parser', desc: 'Extracts formula tokens', color: COLORS.blue, x: 340, y: 130 },
    { id: 'root', label: 'Root Agent', desc: 'HMAS Coordinator (Gemini)', color: COLORS.purple, x: 560, y: 200 },
    { id: 'tax', label: 'Taxonomist', desc: 'Bloom\'s Level classifier', color: COLORS.pink, x: 840, y: 70 },
    { id: 'trend', label: 'Trend Spotter', desc: 'Frequency pattern analyst', color: COLORS.orange, x: 840, y: 200 },
    { id: 'strat', label: 'Strategist', desc: 'Study guidelines compiler', color: COLORS.green, x: 840, y: 330 },
    { id: 'dashboard', label: 'Dashboard', desc: 'Interactive Study Guide', color: COLORS.white, x: 120, y: 270 },
  ],
  eatinformed: [
    { id: 'camera', label: 'Camera API', desc: 'Captures product ingredient label', color: COLORS.cyan, x: 120, y: 120 },
    { id: 'api', label: 'Next.js API', desc: 'JSON payload packaging', color: COLORS.blue, x: 340, y: 120 },
    { id: 'llama', label: 'Llama NIM', desc: 'Step 1: OCR Text Extraction', color: COLORS.purple, x: 620, y: 120 },
    { id: 'deepseek', label: 'DeepSeek NIM', desc: 'Step 2: Nutritional logic', color: COLORS.pink, x: 840, y: 280 },
    { id: 'additive', label: 'Additive Engine', desc: 'Additive hazard scoring', color: COLORS.orange, x: 560, y: 280 },
    { id: 'dashboard', label: 'Scorecard UI', desc: 'Displays risk alerts', color: COLORS.green, x: 220, y: 280 },
  ]
};

const SYSTEM_LINKS: Record<ArchitectureType, FlowLink[]> = {
  schemasense: [
    { from: 'ui', to: 'ingest', label: 'Connection' },
    { from: 'ingest', to: 'cache', label: 'Verify Hash' },
    { from: 'cache', to: 'sse', label: 'Cache Hit (Instant)' },
    { from: 'cache', to: 'sanitizer', label: 'Cache Miss' },
    { from: 'sanitizer', to: 'deepseek', label: 'Sanitized' },
    { from: 'deepseek', to: 'mapper', label: 'AI Output' },
    { from: 'mapper', to: 'sse', label: 'Relationships' },
    { from: 'sse', to: 'ui', label: 'Stream SSE' },
  ],
  'professor-profiler': [
    { from: 'upload', to: 'parser', label: 'Input PDF' },
    { from: 'parser', to: 'root', label: 'JSON Text' },
    { from: 'root', to: 'tax', label: 'Delegate' },
    { from: 'tax', to: 'root', label: 'Taxonomy JSON' },
    { from: 'root', to: 'trend', label: 'Delegate' },
    { from: 'trend', to: 'root', label: 'Stats JSON' },
    { from: 'root', to: 'strat', label: 'Delegate' },
    { from: 'strat', to: 'root', label: 'Strategy' },
    { from: 'root', to: 'dashboard', label: 'Save PDF' },
  ],
  eatinformed: [
    { from: 'camera', to: 'api', label: 'Image Base64' },
    { from: 'api', to: 'llama', label: 'Extract text' },
    { from: 'llama', to: 'deepseek', label: 'Clean ingredients' },
    { from: 'deepseek', to: 'additive', label: 'Additive profiles' },
    { from: 'additive', to: 'dashboard', label: 'Risk Scores' },
    { from: 'dashboard', to: 'camera', label: 'Reset scanner' },
  ]
};

const getCardPadding = (dx: number, dy: number) => {
  const angle = Math.abs(Math.atan2(dy, dx));
  const width = 150;
  const height = 60;
  return Math.sqrt(
    Math.pow(Math.cos(angle) * (width / 2 + 8), 2) +
    Math.pow(Math.sin(angle) * (height / 2 + 8), 2)
  );
};

const getShortenedLine = (x1: number, y1: number, x2: number, y2: number) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const padStart = getCardPadding(dx, dy);
  const padEnd = getCardPadding(-dx, -dy);
  
  if (dist < padStart + padEnd) return { x1, y1, x2, y2 };
  
  return {
    x1: x1 + (dx / dist) * padStart,
    y1: y1 + (dy / dist) * padStart,
    x2: x2 - (dx / dist) * padEnd,
    y2: y2 - (dy / dist) * padEnd
  };
};

export function SystemArchitectureVisual({
  architectureType,
  title = "Application Flowchart",
  description = "Execution flow and data processing pipeline."
}: SystemArchitectureVisualProps) {
  const [mounted, setMounted] = useState(false);
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  
  const nodes = SYSTEM_NODES[architectureType];
  const links = SYSTEM_LINKS[architectureType];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setActiveLinkIndex((prev) => (prev + 1) % links.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [mounted, links.length]);

  if (!mounted) {
    return (
      <div className="w-full flex flex-col space-y-4 my-4">
        <div className="space-y-1">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            {title}
          </h3>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
        <div className="w-full h-80 rounded-2xl border border-white/10 bg-slate-950/40 animate-pulse flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Loading architecture flowchart...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col space-y-4 my-4">
      {/* Title & Desc */}
      <div className="space-y-1">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          {title}
        </h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>

      {/* SVG Canvas Container */}
      <div className="w-full rounded-2xl border border-white/10 bg-black p-1 shadow-2xl relative overflow-hidden">
        <svg 
          viewBox="0 0 960 400" 
          width="100%" 
          height="100%" 
          className="w-full h-auto select-none overflow-visible"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          <defs>
            {/* Soft backdrop radial glow - matching the site's warm gold theme */}
            <radialGradient id="ambient-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#dfa579" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            
            <marker
              id="arrow-inactive"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="rgba(255, 255, 255, 0.15)" />
            </marker>
            {Object.entries(COLORS).map(([name, color]) => (
              <marker
                key={name}
                id={`arrow-${color.replace('#', '')}`}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={color} />
              </marker>
            ))}
          </defs>

          {/* Ambient background glow */}
          <rect width="960" height="400" fill="url(#ambient-glow)" />

          {/* Draw connecting lines and animated dots */}
          {links.map((link, index) => {
            const fromNode = nodes.find(n => n.id === link.from);
            const toNode = nodes.find(n => n.id === link.to);
            if (!fromNode || !toNode) return null;

            const line = getShortenedLine(fromNode.x, fromNode.y, toNode.x, toNode.y);
            const isLinkActive = activeLinkIndex === index;
            const strokeColor = isLinkActive ? fromNode.color : "rgba(255, 255, 255, 0.08)";
            const strokeWidth = isLinkActive ? 2.5 : 1.2;
            const colorId = fromNode.color.replace('#', '');

            const pathD = `M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`;

            return (
              <g key={`connection-${index}`}>
                {/* Connection line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  markerEnd={isLinkActive ? `url(#arrow-${colorId})` : 'url(#arrow-inactive)'}
                  style={{
                    filter: isLinkActive ? `drop-shadow(0 0 5px ${fromNode.color}66)` : 'none',
                    transition: 'stroke 0.4s ease, stroke-width 0.4s ease'
                  }}
                />
                
                {/* Glowing Flow Dot Indicator */}
                {isLinkActive && (
                  <circle
                    r="5"
                    fill={fromNode.color}
                    style={{ filter: `drop-shadow(0 0 8px ${fromNode.color})` }}
                  >
                    <animateMotion
                      dur="2.4s"
                      repeatCount="indefinite"
                      path={pathD}
                      calcMode="linear"
                    />
                  </circle>
                )}

                {/* Arrow Labels */}
                {link.label && (
                  <g>
                    {/* Tiny text box background to prevent text overlapping line */}
                    <rect
                      x={((fromNode.x + toNode.x) / 2) - 35}
                      y={((fromNode.y + toNode.y) / 2) - 16}
                      width="70"
                      height="12"
                      rx="3"
                      fill="#000000"
                      opacity="0.95"
                    />
                    <text
                      x={(fromNode.x + toNode.x) / 2}
                      y={(fromNode.y + toNode.y) / 2 - 7}
                      fill={isLinkActive ? fromNode.color : "rgba(255, 255, 255, 0.3)"}
                      fontSize="8.5"
                      fontWeight="bold"
                      fontFamily="monospace"
                      textAnchor="middle"
                      style={{ transition: 'fill 0.4s ease' }}
                    >
                      {link.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Native SVG Node Cards (Ensures 100% sharp vector rendering on high-DPI/4K screens) */}
          {nodes.map((node, index) => {
            const cardWidth = 150;
            const cardHeight = 60;

            const activeLink = links[activeLinkIndex];
            const isActive = activeLink.from === node.id || activeLink.to === node.id;
            const isTarget = activeLink.to === node.id;

            return (
              <g 
                key={node.id}
                className="cursor-pointer"
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              >
                {/* Outer Glow for Active Card */}
                {isActive && (
                  <rect
                    x={node.x - cardWidth / 2 - 4}
                    y={node.y - cardHeight / 2 - 4}
                    width={cardWidth + 8}
                    height={cardHeight + 8}
                    rx="12"
                    ry="12"
                    fill="none"
                    stroke={node.color}
                    strokeWidth="1.5"
                    opacity="0.3"
                    style={{ filter: `blur(4px)` }}
                  />
                )}

                {/* Main Card Shape */}
                <rect
                  x={node.x - cardWidth / 2}
                  y={node.y - cardHeight / 2}
                  width={cardWidth}
                  height={cardHeight}
                  rx="10"
                  ry="10"
                  fill="#0a0a0c"
                  stroke={isActive ? node.color : "rgba(255, 255, 255, 0.08)"}
                  strokeWidth={isActive ? 2 : 1}
                  style={{
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />

                {/* Index Number */}
                <text
                  x={node.x - cardWidth / 2 + 15}
                  y={node.y - cardHeight / 2 + 18}
                  fill={isActive ? node.color : "rgba(255, 255, 255, 0.2)"}
                  fontSize="8.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                  style={{ transition: 'fill 0.4s ease' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </text>

                {/* Node Title */}
                <text
                  x={node.x}
                  y={node.y}
                  fill="#ffffff"
                  fontSize="10.5"
                  fontWeight="bold"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  textAnchor="middle"
                >
                  {node.label}
                </text>

                {/* Node Sub-text */}
                <text
                  x={node.x}
                  y={node.y + 15}
                  fill="rgba(255, 255, 255, 0.45)"
                  fontSize="7.5"
                  fontWeight="500"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  textAnchor="middle"
                >
                  {node.desc}
                </text>

                {/* Bottom Active indicator line */}
                {isTarget && (
                  <line
                    x1={node.x - 30}
                    y1={node.y + cardHeight / 2 - 3}
                    x2={node.x + 30}
                    y2={node.y + cardHeight / 2 - 3}
                    stroke={node.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* CAD design corner decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/5 rounded-tl-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/5 rounded-br-2xl pointer-events-none" />
      </div>
    </div>
  );
}
