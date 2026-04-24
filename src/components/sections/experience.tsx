'use client';

import { experienceData } from '@/data/portfolio-data';
import { Briefcase } from 'lucide-react';
import { SectionReveal, FadeInUp } from '@/components/motion';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center">
      <div className="w-full space-y-12">
        <SectionReveal>
          <div className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Professional Experience</h2>
            <p className="text-lg text-muted-foreground mt-2">My journey in Cloud Architecture, DevOps, and Full-Stack Engineering.</p>
          </div>
        </SectionReveal>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/40" />
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <FadeInUp key={exp.company} delay={index * 0.15}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border-2 border-primary absolute left-1/2 -translate-x-1/2 md:group-odd:left-1/2 md:group-even:left-1/2">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                     <div className="bg-background/15 backdrop-blur-lg border border-border/40 p-6 rounded-lg shadow-lg transform transition-transform duration-300 md:group-hover:scale-105">
                       <div className="flex justify-between items-start">
                          <h3 className="font-bold text-lg text-foreground">{exp.company}</h3>
                          <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.duration}</p>
                       </div>
                       <h4 className="font-medium text-primary mt-1">{exp.role}</h4>
                       <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{exp.description}</p>
                     </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
