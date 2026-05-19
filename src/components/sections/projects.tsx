'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/portfolio-data';
import { Github, ExternalLink, FileText, ArrowRight, Database } from 'lucide-react';
import { SectionReveal, StaggerContainer, staggerChildVariants, TiltCard, ScaleOnTap, motion } from '@/components/motion';
import { SystemArchitectureVisual, ArchitectureType } from '@/components/projects/SystemArchitectureVisual';

const getArchitectureType = (title: string): ArchitectureType | null => {
  if (title === 'SchemaSense AI') return 'schemasense';
  if (title === 'Professor Profiler') return 'professor-profiler';
  if (title === 'EatInformed') return 'eatinformed';
  return null;
};

export default function Projects() {
  const flagshipProjects = projectsData.slice(0, 3);
  const otherProjects = projectsData.slice(3);

  return (
    <section id="projects" className="min-h-screen flex items-center py-24" aria-labelledby="projects-heading">
      <div className="w-full space-y-24">
        <SectionReveal>
          <div className="flex flex-col gap-4">
            <h2 id="projects-heading" className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold break-words tracking-tight">
              Featured Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Production-grade systems I've architected, focusing on AI pipelines, scalable backends, and performance optimization.
            </p>
          </div>
        </SectionReveal>

        {/* Flagship Projects Showcase */}
        <div className="space-y-32">
          {flagshipProjects.map((project, index) => (
            <SectionReveal key={project.title}>
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Project {index + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-headline">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 pb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.liveLink && (
                      <Button asChild size="lg" className="group">
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          Live Application
                          <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    )}
                    {project.docLink && (
                      <Button asChild size="lg" className="group">
                        <Link href={project.docLink} target="_blank" rel="noopener noreferrer">
                          Read Case Study
                          <FileText className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    )}
                    <Button asChild variant="outline" size="lg">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Conceptual Architecture/Visual Placeholder */}
                {(() => {
                  const archType = getArchitectureType(project.title);
                  if (archType) {
                    return (
                      <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <SystemArchitectureVisual architectureType={archType} />
                      </div>
                    );
                  }
                  return (
                    <div className="w-full lg:w-1/2 h-[400px] rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden flex items-center justify-center p-8 group">
                      <div className="w-full h-full border border-dashed border-border rounded-lg flex flex-col items-center justify-center text-muted-foreground/50 gap-4 transition-colors group-hover:border-primary/50 group-hover:text-primary/50">
                        <Database className="w-12 h-12" />
                        <p className="font-mono text-sm">System Architecture Visual</p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="pt-24 border-t border-border/40">
          <SectionReveal>
            <h3 className="text-2xl font-bold mb-8">Other Experiments</h3>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {otherProjects.map((project) => (
              <motion.div key={project.title} variants={staggerChildVariants} className="h-full">
                <TiltCard>
                  <Card className="bg-background/15 backdrop-blur-lg border border-border/40 shadow-lg flex flex-col transition-all duration-300 hover:border-primary/30 h-full">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
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
                    <CardFooter>
                      <Button asChild variant="ghost" size="sm" className="w-full group">
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Source
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