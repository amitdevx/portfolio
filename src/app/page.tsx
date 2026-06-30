import { Suspense } from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import { heroData, aboutData, socialLinks } from '@/data/portfolio-data';
import { safeJsonLd } from '@/lib/security';

export const metadata: Metadata = {
  title: 'Amit Divekar | Cloud Architect & Full-Stack Engineer from India',
  description: 'Cloud Architect and Full-Stack Engineer specializing in scalable AWS/GCP architectures, Kubernetes orchestration, and AI-integrated Next.js ecosystems.',
  alternates: {
    canonical: 'https://amitdevx.tech',
  },
};

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
  const siteUrl = 'https://amitdevx.tech';
  
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: heroData.name,
    alternateName: 'amitdevx',
    url: siteUrl,
    jobTitle: heroData.title,
    description: heroData.bio,
    nationality: {
      '@type': 'Country',
      name: 'India',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: aboutData.education.institution,
    },
    knowsAbout: [
      'Cloud Computing', 'DevOps', 'AI', 'Machine Learning', 'Full-Stack Development', 
      'TypeScript', 'JavaScript', 'Python', 'React', 'Next.js', 'Node.js',
      'AWS', 'Google Cloud Platform', 'Docker', 'Kubernetes',
      'CI/CD', 'Microservices', 'System Design', 'Web Development'
    ],
    knowsLanguage: ['English', 'Hindi', 'Marathi'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    },
    sameAs: [
      socialLinks.github,
      socialLinks.linkedin,
      socialLinks.x,
      socialLinks.instagram,
      socialLinks.kaggle
    ],
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(personSchema) }}
      />
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
