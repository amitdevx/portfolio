'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode, type CSSProperties } from 'react';


export const springPresets = {
  snappy: { type: 'spring' as const, stiffness: 400, damping: 30, mass: 0.8 },
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 20, mass: 1 },
  gentle: { type: 'spring' as const, stiffness: 200, damping: 25, mass: 1.2 },
  slow: { type: 'spring' as const, stiffness: 100, damping: 20, mass: 1.5 },
};


export function FadeInUp({ 
  children, 
  delay = 0, 
  className = '',
  ...props
}: { children: ReactNode; delay?: number; className?: string } & Omit<HTMLMotionProps<'div'>, 'children' | 'className'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ ...springPresets.gentle, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}


export function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.08,
}: { children: ReactNode; className?: string; staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: 'blur(0px)',
    transition: springPresets.gentle 
  },
};


export function ScaleOnTap({ 
  children, 
  className = '',
  scale = 0.97,
}: { children: ReactNode; className?: string; scale?: number }) {
  return (
    <motion.div
      whileTap={{ scale }}
      transition={springPresets.snappy}
      className={className}
    >
      {children}
    </motion.div>
  );
}


export function TiltCard({ 
  children, 
  className = '',
  style,
}: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: springPresets.snappy,
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
      style={{ ...style, transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}


export function SectionReveal({ 
  children, 
  className = '',
  delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...springPresets.slow, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


export function MagneticElement({ 
  children, 
  className = '',
  strength: _strength = 0.3,
}: { children: ReactNode; className?: string; strength?: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={springPresets.snappy}
      className={className}
    >
      {children}
    </motion.div>
  );
}


export function TextReveal({
  children,
  className = '',
  delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { motion };
