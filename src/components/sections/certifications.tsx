'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { certificationsData } from '@/data/portfolio-data';
import { ExternalLink } from 'lucide-react';
import { SectionReveal, StaggerContainer, staggerChildVariants, TiltCard, ScaleOnTap, motion } from '@/components/motion';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Certifications</h2>
            <p className="text-lg text-muted-foreground mt-2">
              My credentials and qualifications.
            </p>
          </div>
        </SectionReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
          {certificationsData.map((cert) => (
            <motion.div key={cert.title} variants={staggerChildVariants}>
              <TiltCard>
                <Card className="bg-background/15 backdrop-blur-lg border border-border/40 shadow-lg flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl h-full">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    {cert.companyLogo && (
                      <div className="relative h-12 w-12 rounded-md overflow-hidden bg-white shrink-0">
                        <Image
                          src={cert.companyLogo}
                          alt={`${cert.issuer} logo`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <CardTitle className="font-headline text-xl leading-tight">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Issued by {cert.issuer}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    {cert.link && cert.link !== '#' && (
                      <ScaleOnTap className="w-full">
                        <Button asChild className="w-full">
                          <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Certificate
                          </Link>
                        </Button>
                      </ScaleOnTap>
                    )}
                  </CardFooter>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
