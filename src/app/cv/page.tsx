import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Download, Github, Globe, Linkedin, Mail, MapPin, Twitter, Zap, Shield, Brain, Code2 } from 'lucide-react';
import { safeJsonLd } from '@/lib/security';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  aboutData,
  experienceData,
  heroData,
  projectsData,
  skillsData,
  socialLinks,
  certificationsData,
} from '@/data/portfolio-data';
import ObfuscatedEmail from '@/components/obfuscated-email';
import Header from '@/components/header';
import Footer from '@/components/footer';

const siteUrl = 'https://amitdevx.tech';

export const metadata: Metadata = {
  title: 'Resume | Amit Divekar',
  description:
    'Cloud Architect and Full-Stack Engineer specializing in AWS/GCP infrastructure, container orchestration, and AI-powered developer tooling. View experience, projects, and skills.',
  alternates: {
    canonical: `${siteUrl}/cv`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'profile',
    url: `${siteUrl}/cv`,
    title: `${heroData.name} - Resume`,
    description:
      'Cloud Architect and Full-Stack Engineer specializing in AWS/GCP infrastructure, container orchestration, and AI-powered developer tooling.',
    siteName: heroData.name,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${heroData.name} - Software Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${heroData.name} - Resume`,
    description:
      'Cloud Architect and Full-Stack Engineer specializing in AWS/GCP infrastructure, container orchestration, and AI-powered developer tooling.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@amitdevx_',
  },
};

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: heroData.name,
  url: siteUrl,
  jobTitle: heroData.title,
  description: 'Cloud Architect and Full-Stack Engineer specializing in AWS/GCP infrastructure, container orchestration, and AI-powered developer tooling.',
  sameAs: [
    socialLinks.github,
    socialLinks.linkedin,
    socialLinks.x,
  ],
};

const contactLinks = [
  { href: siteUrl, label: 'Website', icon: Globe },
  { isEmail: true, label: 'Email', icon: Mail },
  { href: socialLinks.github, label: 'GitHub', icon: Github },
  { href: socialLinks.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: socialLinks.x, label: 'X', icon: Twitter },
].filter((link) => Boolean(link.href) || link.isEmail);

const spotlightProjects = projectsData.slice(0, 3);
const topCerts = certificationsData.slice(0, 4);

export default function CvPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(personStructuredData) }}
      />
    <div className="relative min-h-screen overflow-x-clip">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        
        {/* Hero Header */}
        <header className="rounded-2xl border border-border/40 bg-background/80 backdrop-blur-md p-8 sm:p-10 shadow-2xl mb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-headline text-3xl font-bold sm:text-4xl">{heroData.name}</h1>
                <Badge variant="secondary" className="rounded-lg px-3 py-1 text-xs font-medium bg-primary/10 text-primary">
                  <MapPin className="mr-1 h-3 w-3" />
                  India - Remote
                </Badge>
              </div>
              <p className="text-lg sm:text-xl text-primary font-medium">{heroData.title}</p>
              <p className="max-w-3xl text-sm text-muted-foreground sm:text-base leading-relaxed">{heroData.tagline}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild>
                  <Link href="/doc/Amit_Divekar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#projects">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    View Projects
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:max-w-[240px] sm:justify-end">
              {contactLinks.map((link) => (
                <Button
                  key={link.label}
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border/50 bg-background/30 backdrop-blur hover:bg-primary/10"
                >
                  {link.isEmail ? (
                    <ObfuscatedEmail user={socialLinks.emailUser} domain={socialLinks.emailDomain}>
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </ObfuscatedEmail>
                  ) : (
                    <Link href={link.href!} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </header>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="rounded-xl border border-border/40 bg-background/80 backdrop-blur-md p-5 text-center">
            <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{aboutData.stats[0].value}</p>
            <p className="text-xs text-muted-foreground">{aboutData.stats[0].label}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/80 backdrop-blur-md p-5 text-center">
            <Shield className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">{aboutData.stats[1].value}</p>
            <p className="text-xs text-muted-foreground">{aboutData.stats[1].label}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/80 backdrop-blur-md p-5 text-center">
            <Code2 className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{aboutData.stats[2].value}</p>
            <p className="text-xs text-muted-foreground">{aboutData.stats[2].label}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/80 backdrop-blur-md p-5 text-center">
            <Brain className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">{aboutData.stats[3].value}</p>
            <p className="text-xs text-muted-foreground">{aboutData.stats[3].label}</p>
          </div>
        </div>

        <div className="grid gap-8">

          {/* Skills - Front and Center */}
          <Card className="bg-background/80 backdrop-blur-md border-border/40 shadow-xl" id="skills">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-headline">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillsData.categories.map((category) => (
                <div key={category.name}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="outline"
                        className="rounded-md border-border/50 bg-background/30 px-3 py-1.5 text-xs font-medium gap-2"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={skill.icon} alt="" className="w-4 h-4" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Selected Projects */}
          <Card className="bg-background/80 backdrop-blur-md border-border/40 shadow-xl" id="projects">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-headline">Featured Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {spotlightProjects.map((project) => (
                <div key={project.title} className="rounded-xl border border-border/40 bg-background/10 p-5 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {project.liveLink && (
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${project.title} live`}>
                          <ArrowUpRight className="h-5 w-5" />
                        </Link>
                      )}
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${project.title} source`}>
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-md bg-secondary/60 px-2 py-0.5 text-[11px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Professional Development */}
          <Card className="bg-background/80 backdrop-blur-md border-border/40 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-headline">Professional Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {experienceData.map((role) => {
                const isIntern = 'isInternship' in role && role.isInternship;
                return (
                  <div 
                    key={role.company} 
                    className={`rounded-xl border border-border/40 bg-background/40 transition-all duration-300 ${
                      isIntern ? "p-4" : "p-5"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className={`font-bold text-foreground ${isIntern ? "text-base" : "text-lg"}`}>{role.company}</h3>
                      <Badge variant="secondary" className="rounded-md px-2 py-0.5 text-[11px]">
                        {role.duration}
                      </Badge>
                    </div>
                    <p className={`text-primary font-medium ${isIntern ? "text-xs" : "text-sm"}`}>{role.role}</p>
                    <p className={`leading-relaxed text-muted-foreground ${isIntern ? "mt-1.5 text-xs" : "mt-2 text-sm"}`}>{role.description}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Education & Certifications Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background/80 backdrop-blur-md border-border/40 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-headline">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl border border-border/40 bg-background/10 p-5">
                  <h3 className="text-lg font-bold">{aboutData.education.institution}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{aboutData.education.degree}</p>
                  <p className="text-xs text-muted-foreground mt-1">{aboutData.education.duration}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {aboutData.education.courses.map((course) => (
                      <Badge key={course} variant="outline" className="text-[10px] px-2 py-0.5">{course}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-md border-border/40 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-headline">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topCerts.map((cert) => (
                  <Link
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border/40 bg-background/10 p-3 hover:border-primary/30 transition-colors group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cert.companyLogo} alt="" className="w-6 h-6 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
