'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aboutData, heroData } from '@/data/portfolio-data';
import { GraduationCap, Sparkles } from 'lucide-react';
import { SectionReveal, StaggerContainer, staggerChildVariants, motion } from '@/components/motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center" aria-labelledby="about-heading">
      <div className="w-full space-y-12">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="relative w-48 h-48 shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary animate-spin-slow opacity-75 blur-sm" aria-hidden="true"></div>
              
              <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 animate-pulse" aria-hidden="true"></div>
              
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <Image
                  src="/images/amit-divekar-profile.jpg"
                  alt="Amit Divekar Full Stack Developer and Cloud Architect specializing in AWS, GCP, and Kubernetes"
                  fill
                  sizes="(max-width: 768px) 150px, 192px"
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>
              
              <div className="absolute inset-0 animate-spin-slow" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full blur-[1px]"></div>
              </div>
              <div className="absolute inset-0 animate-spin-slow animation-delay-2000" aria-hidden="true">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full blur-[1px]"></div>
              </div>
              <div className="absolute inset-0 animate-spin-slow animation-delay-4000" aria-hidden="true">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full blur-[1px]"></div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 id="about-heading" className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold break-words">About — {heroData.title}</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-4xl">
                {aboutData.bio}
              </p>
            </div>
          </div>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {aboutData.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerChildVariants}
              className="relative group"
            >
              <div className="bg-background/15 backdrop-blur-lg border border-border/40 rounded-xl p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl">
                <p className="text-3xl md:text-4xl font-headline font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div variants={staggerChildVariants}>
            <Card className="bg-background/15 backdrop-blur-lg border border-border/40 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg">{aboutData.education.degree}</h3>
                <p className="text-muted-foreground">{aboutData.education.institution}</p>
                <p className="text-sm text-muted-foreground">{aboutData.education.duration} &bull; {aboutData.education.cgpa}</p>
                <div>
                  <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.education.courses.map((course) => (
                      <Badge key={course} variant="secondary">{course}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={staggerChildVariants}>
            <Card className="bg-background/15 backdrop-blur-lg border border-border/40 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <Sparkles className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">Hobbies & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 list-inside">
                  {aboutData.hobbies.map((hobby) => (
                    <li key={hobby} className="flex items-start gap-3">
                       <span className="h-2 w-2 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span>{hobby}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
