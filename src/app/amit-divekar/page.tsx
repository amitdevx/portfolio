import type { Metadata } from 'next';
import { safeJsonLd } from '@/lib/security';
import Link from 'next/link';
import { heroData, aboutData, experienceData, projectsData, socialLinks } from '@/data/portfolio-data';
import { getAllPosts } from '@/lib/blog';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase, Code2, BookOpen, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MotionDetails } from '@/components/motion';
import GithubGraph from '@/components/github-graph';


const siteUrl = 'https://amitdevx.tech';

export const metadata: Metadata = {
  title: 'Who is Amit Divekar?',
  description: 'Official profile of Amit Divekar, detailing his background, education, and journey as a Cloud Architect and Full-Stack Engineer from India.',
  keywords: [
    'who is Amit Divekar',
    'Amit Divekar developer',
    'Amit Divekar portfolio',
    'Amit Divekar engineer',
    'amitdevx',
    'Amit Divekar India',
    'Amit Divekar Cloud Architect',
    'Amit Divekar Full Stack Developer',
  ],
  alternates: {
    canonical: `${siteUrl}/amit-divekar`,
  },
  openGraph: {
    title: 'Who is Amit Divekar?',
    description: 'Official profile of Amit Divekar, detailing his background, education, and journey as a Cloud Architect and Full-Stack Engineer from India.',
    url: `${siteUrl}/amit-divekar`,
    type: 'profile',
    siteName: 'Amit Divekar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who is Amit Divekar?',
    description: 'Official profile of Amit Divekar, detailing his background, education, and journey as a Cloud Architect and Full-Stack Engineer from India.',
    creator: '@amitdevx_',
  },
};

export default function AmitDivekarPage() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 5);

  const profilePageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Amit Divekar',
      alternateName: 'amitdevx',
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      jobTitle: 'Cloud Architect and Full-Stack Engineer',
      description: heroData.bio,
      nationality: {
        '@type': 'Country',
        name: 'India',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: aboutData.education.institution,
      },
      knowsAbout: [
        'Cloud Computing', 'AWS', 'Google Cloud Platform', 'Kubernetes', 'Docker',
        'Next.js', 'React', 'TypeScript', 'Python', 'Node.js',
        'AI Integration', 'RAG Pipelines', 'System Design', 'DevOps',
      ],
      knowsLanguage: ['English', 'Hindi', 'Marathi'],
      sameAs: [
        'https://www.linkedin.com/in/divekar-amit',
        'https://github.com/amitdevx',
        'https://www.kaggle.com/divekaramit',
        'https://x.com/amitdevx_',
        'https://instagram.com/amitdevx',
        'https://medium.com/@amitdivekar',
      ],
    },
  };


  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Amit Divekar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cloud Architect & Full-Stack Engineer from India - building AI-powered systems, production-grade cloud infrastructure, and open-source developer tools.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Amit Divekar do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Amit Divekar architects cloud-native systems on AWS and Google Cloud, builds production-grade web applications with Next.js and React, and develops AI-powered developer tools. His work spans RAG pipelines, multi-agent AI systems, container orchestration, and performance-optimized frontend applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What projects has Amit Divekar built?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Amit Divekar has built multiple production projects including: ${projectsData.slice(0, 5).map(p => p.title).join(', ')}. His work spans cloud architecture, AI integration, and full-stack web development.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Amit Divekar from?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Amit Divekar is a Cloud Architect and Full-Stack Engineer based in the Pune/Nashik region of Maharashtra, India. He is currently pursuing Computer Science at Savitribai Phule Pune University (2024-2027).',
        },
      },
      {
        '@type': 'Question',
        name: 'How to contact Amit Divekar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach Amit Divekar through his official website amitdevx.tech, via LinkedIn (linkedin.com/in/divekar-amit), or through GitHub (github.com/amitdevx). He is also available on X/Twitter as @amitdevx_.',
        },
      },
    ],
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">

          {/* Identity Header */}
          <header className="text-center mb-16 space-y-4">
            <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-primary/70">
              Official Profile
            </p>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight break-words">
              Who is <span className="text-secondary">Amit Divekar</span>?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {heroData.title} - building AI-powered systems, production-grade cloud infrastructure, and open-source developer tools.
            </p>
          </header>

          {/* Quick Bio */}
          <section className="mb-16 space-y-6" aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-headline text-2xl font-bold flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              About Amit Divekar
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {aboutData.bio}
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Computer Science, Savitribai Phule Pune University (2024-2027)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-8">
              <div className="md:col-span-4 lg:col-span-3 h-full">
                <div className="h-full flex flex-col justify-center bg-gradient-to-br from-primary/10 via-background to-background backdrop-blur-md border border-border/40 rounded-xl p-8 text-center transition-all duration-500 hover:border-primary/60 hover:shadow-primary/20 hover:shadow-2xl group-hover:-translate-y-1">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
              </div>
              <p className="text-4xl md:text-5xl font-headline font-extrabold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent break-words tracking-tight drop-shadow-sm">{aboutData.stats[0].value}</p> 
              <p className="text-base font-medium text-foreground mt-2 break-words uppercase tracking-wider">{aboutData.stats[0].label}</p>
            </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 h-full">
                <div className="h-full flex flex-col justify-center rounded-xl border border-border/40 bg-background/80 backdrop-blur-md p-4 sm:p-6 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 overflow-hidden">
                  <GithubGraph />
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-16 space-y-6" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="font-headline text-2xl font-bold flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, i) => {
                const isIntern = 'isInternship' in exp && exp.isInternship;
                return (
                  <div 
                    key={i} 
                    className={`border border-border/40 rounded-xl bg-background/80 backdrop-blur-md shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 ${
                      isIntern ? "p-4" : "p-6"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className={`font-semibold text-foreground ${isIntern ? "text-base" : "text-lg"}`}>{exp.role}</h3>
                      <span className="text-xs sm:text-sm text-muted-foreground font-mono">{exp.duration}</span>
                    </div>
                    <p className={`text-primary font-medium ${isIntern ? "mb-1.5 text-sm" : "mb-3 text-base"}`}>{exp.company}</p>
                    <p className={`text-muted-foreground ${isIntern ? "text-xs leading-relaxed" : "text-sm leading-relaxed"}`}>{exp.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Projects by Amit Divekar */}
          <section className="mb-16 space-y-6" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="font-headline text-2xl font-bold flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              Projects by Amit Divekar
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {projectsData.slice(0, 6).map((project, i) => (
                <div key={i} className="border border-border/40 rounded-xl p-5 bg-background/80 backdrop-blur-md shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 space-y-3">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, j) => (
                      <Badge key={j} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-1">
                    {project.githubLink && (
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline">GitHub</Link>
                    )}
                    {project.liveLink && (
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline">{project.category === 'Open Source' ? 'npm Package' : 'Live Demo'}</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" className="group">
                <Link href="/#projects">
                  View All Projects by Amit Divekar
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Recent Blog Posts by Amit Divekar */}
          <section className="mb-16 space-y-6" aria-labelledby="blogs-heading">
            <h2 id="blogs-heading" className="font-headline text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Blog Posts by Amit Divekar
            </h2>
            <div className="space-y-3">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blogs/${post.slug}`}
                  className="block border border-border/40 rounded-xl p-5 bg-background/80 backdrop-blur-md shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 hover:border-primary/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground font-mono">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>{post.tags.slice(0, 3).join(', ')}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" className="group">
                <Link href="/blogs">
                  Read All Articles by Amit Divekar
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </section>

          {/* FAQ Section for Search Intent Capture */}
          <section className="mb-16 space-y-6" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-headline text-2xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <MotionDetails layout className="border border-border/40 rounded-xl p-5 bg-background/80 backdrop-blur-md shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 group" open>
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  Who is Amit Divekar?
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Amit Divekar is a Cloud Architect and Full-Stack Engineer from India. 
                  He specializes in building scalable AWS/GCP cloud infrastructure, Kubernetes orchestration, 
                  and AI-integrated web applications using Next.js, TypeScript, and Python. He is currently pursuing 
                  Computer Science at Savitribai Phule Pune University (2024-2027).
                </p>
              </MotionDetails>

              <MotionDetails layout className="border border-border/40 rounded-xl p-5 bg-background/80 backdrop-blur-md shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 group">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  What does Amit Divekar do?
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Amit Divekar architects cloud-native systems on AWS and Google Cloud, builds production-grade 
                  web applications with Next.js and React, and develops AI-powered developer tools. His work 
                  spans RAG pipelines, multi-agent AI systems, container orchestration, and performance-optimized 
                  frontend applications.
                </p>
              </MotionDetails>

              <MotionDetails layout className="border border-border/40 rounded-xl p-5 bg-background/80 backdrop-blur-md shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 group">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  What projects has Amit Divekar built?
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Amit Divekar has built multiple production-grade projects including {projectsData.slice(0, 5).map(p => p.title).join(', ')}. 
                  His projects demonstrate expertise across cloud architecture, AI integration, and full-stack web development. 
                  View them all on his <Link href="/#projects" className="text-primary hover:underline">projects page</Link> or 
                  on <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</Link>.
                </p>
              </MotionDetails>

              <MotionDetails layout className="border border-border/40 rounded-xl p-5 bg-background/80 backdrop-blur-md shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 group">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  Where is Amit Divekar from?
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Amit Divekar is from India. He is based in the Pune/Nashik region of Maharashtra 
                  and is currently pursuing Computer Science at Savitribai Phule Pune University (2024-2027).
                </p>
              </MotionDetails>

              <MotionDetails layout className="border border-border/40 rounded-xl p-5 bg-background/80 backdrop-blur-md shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 group">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  How to contact Amit Divekar?
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  You can reach Amit Divekar through his <Link href="/#contact" className="text-primary hover:underline">contact form</Link>, 
                  via <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</Link>, 
                  or through <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</Link>. 
                  He is also available on X/Twitter as <Link href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@amitdevx_</Link>.
                </p>
              </MotionDetails>
            </div>
          </section>

          {/* Social Links */}
          <section className="text-center space-y-6">
            <h2 className="font-headline text-2xl font-bold">Connect with Amit Divekar</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </Link>
              </Button>
              <Button asChild size="lg" className="group">
                <Link href="/#contact">
                  <Mail className="mr-2 h-5 w-5" /> Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6 font-mono">
              Also known online as <strong>amitdevx</strong>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
