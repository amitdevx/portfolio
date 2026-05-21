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
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Professional Development</h2>
            <p className="text-lg text-muted-foreground mt-2">Simulated environments and applied engineering initiatives.</p>
          </div>
        </SectionReveal>
        <div className="relative">
          {/* Vertical line: left-4 on mobile, centered on md */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/40" />
          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isIntern = 'isInternship' in exp && exp.isInternship;
              return (
                <FadeInUp key={exp.company} delay={index * 0.15}>
                  <div className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group">
                    {/* Icon: left-4 on mobile, centered on md */}
                    <div className={`flex items-center justify-center rounded-full absolute left-4 md:left-1/2 -translate-x-1/2 border-2 transition-all duration-300 z-10 bg-background ${
                      isIntern 
                        ? "w-8 h-8 border-primary/60" 
                        : "w-10 h-10 border-primary"
                    }`}>
                      <Briefcase className={isIntern ? "w-4 h-4 text-primary/80" : "w-5 h-5 text-primary"} />
                    </div>
                    {/* Card container: padded left on mobile to avoid icon, half-width on md */}
                    <div className="w-full pl-10 md:pl-0 md:w-[calc(50%-2.5rem)]">
                       <div className={`bg-background/80 backdrop-blur-md border border-border/40 rounded-lg shadow-lg transform transition-transform duration-300 md:group-hover:scale-105 ${
                         isIntern ? "p-4" : "p-6"
                       }`}>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                             <h3 className={`text-foreground ${isIntern ? "font-semibold text-base" : "font-bold text-lg"}`}>{exp.company}</h3>
                             <p className="text-xs text-muted-foreground whitespace-nowrap mt-1 font-mono">{exp.duration}</p>
                          </div>
                          <h4 className={isIntern ? "text-sm text-primary/90 mt-0.5" : "font-medium text-primary mt-1"}>{exp.role}</h4>
                          <p className={`text-muted-foreground leading-relaxed ${isIntern ? "text-xs mt-2" : "text-sm mt-3"}`}>{exp.description}</p>
                       </div>
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
