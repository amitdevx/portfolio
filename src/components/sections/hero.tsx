'use client';

import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroData, socialLinks } from '@/data/portfolio-data';
import { SkillsMarquee } from '@/components/ui/skills-marquee';
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
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
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
          <p className="w-full max-w-3xl text-lg text-foreground/60 leading-relaxed italic">
            {heroData.tagline}
          </p>
        </TextReveal>

        <TextReveal delay={0.4}>
          <p className="w-full max-w-3xl text-lg text-foreground/80 leading-relaxed">
            {heroData.bio}
          </p>
        </TextReveal>
        
        <motion.div 
          className="w-full max-w-5xl my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <SkillsMarquee />
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ScaleOnTap>
            <Button asChild size="lg" className="group">
              <Link href={heroData.contactLink}>
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScaleOnTap>
          <ScaleOnTap>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/cv" target="_blank" rel="noopener noreferrer">
                View Resume
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScaleOnTap>
          <ScaleOnTap>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/blogs">
                Read the Blog
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScaleOnTap>
          <ScaleOnTap>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                GitHub Profile
                <Github className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScaleOnTap>
        </motion.div>
      </div>
    </section>
  );
}
