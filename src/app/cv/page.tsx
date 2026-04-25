import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Download, Github, Globe, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
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
} from '@/data/portfolio-data';

const siteUrl = 'https://amitdevx.tech';

export const metadata: Metadata = {
  title: 'CV',
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
    title: 'Amit Divekar - CV',
    description:
      'Cloud Architect and Full-Stack Engineer specializing in AWS/GCP infrastructure, container orchestration, and AI-powered developer tooling.',
    siteName: 'Amit Divekar',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Amit Divekar - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Divekar - CV',
    description:
      'Cloud Architect and Full-Stack Engineer specializing in AWS/GCP infrastructure, container orchestration, and AI-powered developer tooling.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@amitdevx_',
  },
};

// Structured data for enhanced SEO
const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amit Divekar',
  url: siteUrl,
  jobTitle: 'Cloud Architect & Full-Stack Engineer',
  description: 'Cloud Architect and Full-Stack Engineer specializing in AWS/GCP infrastructure, container orchestration, and AI-powered developer tooling.',
  sameAs: [
    socialLinks.github,
    socialLinks.linkedin,
    socialLinks.x,
  ],
  email: socialLinks.email,
};

const contactLinks = [
  { href: siteUrl, label: 'Website', icon: Globe },
  { href: `mailto:${socialLinks.email}`, label: 'Email', icon: Mail },
  { href: socialLinks.github, label: 'GitHub', icon: Github },
  { href: socialLinks.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: socialLinks.x, label: 'X', icon: Twitter },
].filter((link) => Boolean(link.href));

const spotlightProjects = projectsData.filter(p => p.title !== "2FA Password Protector").slice(0, 3);
const primarySkills = skillsData.technical;

export default function CvPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background/90 to-background/70 pb-16 print:bg-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0,rgba(179,165,200,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_35%)]"
        aria-hidden="true"
      />

      <main className="container mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-16">
        <header className="rounded-3xl border border-primary/30 bg-card/70 p-8 shadow-2xl backdrop-blur print:border print:bg-white print:text-black">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold sm:text-4xl">{heroData.name}</h1>
                <Badge variant="secondary" className="rounded-lg px-3 py-1 text-xs font-medium">
                  <MapPin className="mr-1 h-4 w-4" />
                  India · Remote friendly
                </Badge>
              </div>
              <p className="max-w-2xl break-words text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">{heroData.title}</p>
              <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">{aboutData.bio}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/doc/Amit_Divekar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    Jump to projects
                  </Link>
                </Button>
                <span className="hidden items-center text-xs text-muted-foreground print:flex">
                  Press Ctrl+P to print
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:max-w-[240px] sm:justify-end">
              {contactLinks.map((link) => (
                <Button
                  key={link.label}
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border/70 bg-background/80 text-foreground hover:bg-primary/10 print:border-foreground"
                >
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-6 print:mt-6">
          <Card className="bg-card/70 backdrop-blur print:bg-white print:text-black">
            <CardHeader>
              <CardTitle className="text-xl">About</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground sm:text-base">
              <p className="leading-relaxed">
                {aboutData.bio}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur print:bg-white print:text-black">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Work Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experienceData.map((role) => (
                <div key={role.company} className="rounded-xl border border-border/60 p-4 sm:p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold">{role.company}</h3>
                        <Badge variant="secondary" className="rounded-md px-2 py-0.5 text-[11px]">
                          {role.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{role.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{role.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur print:bg-white print:text-black">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base">
              <div className="rounded-xl border border-border/60 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{aboutData.education.institution}</h3>
                  <span className="text-xs text-muted-foreground">{aboutData.education.duration}</span>
                </div>
                <p className="text-muted-foreground">{aboutData.education.degree}</p>
                <p className="text-muted-foreground">{aboutData.education.cgpa}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur print:bg-white print:text-black" id="skills">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {primarySkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="rounded-md border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/90"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground sm:text-sm">
                {skillsData.soft.map((skill) => (
                  <span key={skill} className="rounded-full border border-border/40 px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur print:bg-white print:text-black" id="projects">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Selected Projects</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {spotlightProjects.map((project) => (
                <div key={project.title} className="h-full rounded-xl border border-border/60 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    {(project.liveLink || project.githubLink || project.docLink) && (
                      <Link
                        href={project.liveLink || project.githubLink || project.docLink!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition hover:text-primary"
                        aria-label={`${project.title} external link`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
    </>
  );
}
