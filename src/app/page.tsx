import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ParticleBackground from '@/components/particle-background';
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';

const Projects = dynamic(() => import('@/components/sections/projects'), {
  loading: () => null,
});
const Certifications = dynamic(() => import('@/components/sections/certifications'), {
  loading: () => null,
});
const Skills = dynamic(() => import('@/components/sections/skills'), {
  loading: () => null,
});
const Contact = dynamic(() => import('@/components/sections/contact'), {
  loading: () => null,
});
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip">
      <ParticleBackground />
      <Header />
      <main id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-8" role="main">
        <article className="flex flex-col gap-20 sm:gap-28 md:gap-40">
          <Hero />
          <About />
          <Experience />
          <Suspense fallback={null}>
            <Projects />
          </Suspense>
          <Suspense fallback={null}>
            <Certifications />
          </Suspense>
          <Suspense fallback={null}>
            <Skills />
          </Suspense>
        </article>
      </main>
      <div className="mt-24 sm:mt-32 md:mt-48">
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
