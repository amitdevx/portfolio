'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const ParticleBackground = dynamic(() => import('@/components/particle-background'), { ssr: false });

export default function GlobalBackground() {
  const pathname = usePathname();

  // The 3D background is heavy on scrolling and battery. 
  // Disable it on blog pages where reading and smooth scrolling are critical.
  if (pathname?.startsWith('/blogs')) {
    return null;
  }

  return <ParticleBackground />;
}
