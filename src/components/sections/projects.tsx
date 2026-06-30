'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/portfolio-data';
import { Github, ExternalLink, FileText, Database } from 'lucide-react';
import { SectionReveal, StaggerContainer, staggerChildVariants, TiltCard, motion } from '@/components/motion';
import { SystemArchitectureVisual, ArchitectureType } from '@/components/projects/SystemArchitectureVisual';

const getArchitectureType = (title: string): ArchitectureType | null => {
  if (title === 'SelfHealOps') return 'self-healops';
  if (title === 'SchemaSense AI') return 'schemasense';
  if (title === 'Professor Profiler') return 'professor-profiler';
  if (title === 'EatInformed') return 'eatinformed';
  if (title === 'md2pdf') return 'md2pdf';
  return null;
};

export default function Projects() {
  const flagshipProjects = projectsData.filter(p => p.category === 'Featured' || p.category === 'Open Source');
  const otherProjects = projectsData.filter(p => p.category === 'Experiment');

  let flagshipCount = 0;
  let openSourceCount = 0;

  return (
    <section id="projects" className="min-h-screen flex items-center py-24" aria-labelledby="projects-heading">
      <div className="w-full space-y-24">
        
        {/* Featured Systems Section */}
        <div className="space-y-12">
          <SectionReveal>
            <div className="flex flex-col gap-4">
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold break-words tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                Featured Systems
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Production-grade software architectures featuring decoupled multi-agent frameworks, high-speed cached databases, and custom vision reasoning pipelines.
              </p>
            </div>
          </SectionReveal>

          <div className="space-y-36">
            {flagshipProjects.map((project) => (
              <SectionReveal key={project.title}>
                <div className="flex flex-col gap-8 w-full">
                  {/* Text Block & Info */}
                  <div className="space-y-4 max-w-4xl">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {(() => {
                        if (project.category === 'Open Source') {
                          openSourceCount++;
                          return `Open Source Project ${openSourceCount}`;
                        } else {
                          flagshipCount++;
                          return `Flagship System ${flagshipCount}`;
                        }
                      })()}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-headline text-white">{project.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.liveLink && (
                        <Button asChild size="lg" className="group">
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            {project.category === 'Open Source' ? 'npm Package' : 'Live Application'}
                            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                          </Link>
                        </Button>
                      )}
                      {project.docLink && (
                        <Button asChild size="lg" className="group" variant="secondary">
                          <Link href={project.docLink}>
                            {project.category === 'Open Source' ? 'Documentation' : 'Read Case Study'}
                            <FileText className="ml-2 h-4 w-4" aria-hidden="true" />
                          </Link>
                        </Button>
                      )}
                      <Button asChild variant="outline" size="lg">
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                          {project.category === 'Open Source' ? 'GitHub' : 'Source Code'}
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Conceptual Architecture - Full Width */}
                  <div className="w-full">
                    {(() => {
                      const archType = getArchitectureType(project.title);
                      if (archType) {
                        return (
                          <SystemArchitectureVisual 
                            architectureType={archType} 
                            title="System Flow & Data Pipeline"
                            description="Interactive directed graph showing data flows, execution routes, and particle emissions."
                          />
                        );
                      }

                      return (
                        <div className="w-full h-[300px] rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden flex items-center justify-center p-8 group">
                          <div className="w-full h-full border border-dashed border-border rounded-lg flex flex-col items-center justify-center text-muted-foreground/50 gap-4 transition-colors group-hover:border-primary/50 group-hover:text-primary/50">
                            <Database className="w-12 h-12" />
                            <p className="font-mono text-sm">System Architecture Visual</p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Other Experiments Grid */}
        <div className="pt-24 border-t border-border/40">
          <SectionReveal>
            <div className="flex flex-col gap-4 mb-12">
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white">Other Experiments</h3>
              <p className="text-muted-foreground">Smaller learning or exploratory projects.</p>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {otherProjects.map((project) => (
              <motion.div key={project.title} variants={staggerChildVariants} className="h-full">
                <TiltCard>
                  <Card className="bg-background/80 backdrop-blur-md border border-border/40 shadow-lg flex flex-col transition-all duration-300 hover:border-primary/30 h-full">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl text-white">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">+{project.technologies.length - 4}</Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                      {project.liveLink && (
                        <Button asChild variant="outline" size="sm" className="w-full group text-xs border-primary/30 hover:bg-primary/10">
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            Live Application
                            <ExternalLink className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        </Button>
                      )}
                      {project.docLink && (
                        <Button asChild variant="secondary" size="sm" className="w-full group text-xs">
                          <Link href={project.docLink}>
                            Read Case Study
                            <FileText className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        </Button>
                      )}
                      <Button asChild variant="ghost" size="sm" className="w-full group text-xs">
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          Source Code
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}