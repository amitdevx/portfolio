'use client';

import { skillsData } from '@/data/portfolio-data';
import { SectionReveal, StaggerContainer, staggerChildVariants, motion } from '@/components/motion';
import { Cloud, BrainCircuit, Palette, ServerCog, Wrench } from 'lucide-react';

const IconMap: Record<string, React.ElementType> = {
  Cloud,
  BrainCircuit,
  Palette,
  ServerCog,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="w-full space-y-12">
        
        <SectionReveal>
          <div className="text-center space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Technical Arsenal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cloud Architecture, DevOps, Frontend & Backend — the full stack, built for scale.
            </p>
          </div>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {skillsData.categories.map((category) => (
            <motion.div
              key={category.name}
              variants={staggerChildVariants}
              className="bg-background/15 backdrop-blur-lg border border-border/40 rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-5">
                {(() => {
                  const Icon = IconMap[category.icon];
                  return Icon ? <Icon className="w-6 h-6 text-primary" /> : <span className="text-2xl">{category.icon}</span>;
                })()}
                <h3 className="text-xl font-headline font-semibold">{category.name}</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background/30 border border-border/20 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 group"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 transition-transform duration-200 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="text-xs text-muted-foreground text-center leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <SectionReveal delay={0.2}>
          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-semibold text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {skillsData.soft.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-background/15 backdrop-blur-lg border border-border/40 text-sm text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
