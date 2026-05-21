"use client";

import { useEffect, useRef } from 'react';

type ArchitectureType = "schemasense" | "professor-profiler" | "eatinformed";

interface ArchitectureSceneProps {
  type: ArchitectureType;
}

const COLORS = {
  schemasense: ['#00f0ff', '#b026ff', '#4f8cff', '#00ff88'],
  'professor-profiler': ['#ffffff', '#b026ff', '#ff4d9d', '#ff9f43'],
  eatinformed: ['#00f0ff', '#4f8cff', '#b026ff', '#00ff88'],
};

export default function ArchitectureScene({ type }: ArchitectureSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const palette = COLORS[type];
    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      frame += 0.014;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#050510';
      ctx.fillRect(0, 0, width, height);

      const points = [
        [0.14, 0.5],
        [0.32, 0.34],
        [0.5, 0.52],
        [0.68, 0.32],
        [0.84, 0.58],
        [0.42, 0.76],
      ];

      ctx.lineWidth = 2;
      points.slice(1).forEach((point, index) => {
        const from = points[index];
        const color = palette[index % palette.length];
        const pulse = (Math.sin(frame * 3 + index) + 1) / 2;
        ctx.globalAlpha = 0.22 + pulse * 0.22;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(from[0] * width, from[1] * height);
        ctx.quadraticCurveTo(width * 0.5, height * 0.28, point[0] * width, point[1] * height);
        ctx.stroke();
      });

      points.forEach((point, index) => {
        const color = palette[index % palette.length];
        const x = point[0] * width;
        const y = point[1] * height + Math.sin(frame * 2 + index) * 5;
        ctx.globalAlpha = 1;
        ctx.shadowColor = color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, index === 2 ? 16 : 11, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [type]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
