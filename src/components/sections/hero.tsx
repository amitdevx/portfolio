'use client';

import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroData, socialLinks } from '@/data/portfolio-data';
import { TextReveal, ScaleOnTap, motion } from '@/components/motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4" aria-label="Hero Section">
      <div className="flex flex-col items-center gap-6 w-full max-w-6xl">
        
        <TextReveal delay={0.05}>
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-primary/70">
            Official Website
          </p>
        </TextReveal>

        <TextReveal delay={0.1}>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Amit </span>
            <span className="text-secondary">Divekar</span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="w-full max-w-4xl break-words text-center text-base leading-relaxed text-primary font-semibold sm:text-lg md:text-xl lg:text-2xl [word-break:break-word] hyphens-auto">
            {heroData.title} from India
          </p>
        </TextReveal>

        <TextReveal delay={0.3}>
          <p className="w-full max-w-3xl text-base sm:text-lg text-foreground/60 leading-relaxed italic">
            {heroData.tagline}
          </p>
        </TextReveal>

        <TextReveal delay={0.4}>
          <p className="w-full max-w-3xl text-base sm:text-lg text-foreground/80 leading-relaxed">
            {heroData.bio}
          </p>
        </TextReveal>
        
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 mt-8 w-full max-w-sm sm:max-w-none px-4 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ScaleOnTap className="w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 py-2.5 sm:px-6 group">
              <Link href={heroData.contactLink}>
                View Engineering Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
            </Button>
          </ScaleOnTap>
          <ScaleOnTap className="w-full sm:w-auto">
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 py-2.5 sm:px-6 group">
              <Link href="/cv" target="_blank" rel="noopener noreferrer">
                View Resume
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
            </Button>
          </ScaleOnTap>
          <ScaleOnTap className="w-full sm:w-auto">
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 py-2.5 sm:px-6 group">
              <Link href="/blogs">
                Engineering Blog
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
            </Button>
          </ScaleOnTap>
          <ScaleOnTap className="w-full sm:w-auto">
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 py-2.5 sm:px-6 group">
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                GitHub Profile
                <Github className="ml-2 h-4 w-4 shrink-0" />
              </Link>
            </Button>
          </ScaleOnTap>
        </motion.div>
      </div>
    </section>
  );
}
