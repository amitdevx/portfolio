'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const ParticleBackground = dynamic(() => import('@/components/particle-background'), { ssr: false });

export default function GlobalBackground() {
  const pathname = usePathname();

  // Disable it on blog post pages (/blogs/[slug]) where reading and smooth scrolling are critical.
  if (pathname?.startsWith('/blogs/')) {
    return null;
  }

  return <ParticleBackground />;
}
