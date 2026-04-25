import type { Metadata } from 'next';
import Link from 'next/link';
import { heroData, aboutData, experienceData, projectsData, socialLinks } from '@/data/portfolio-data';
import { getAllPosts } from '@/lib/blog';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase, Code2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const siteUrl = 'https://amitdevx.tech';

export const metadata: Metadata = {
  title: 'Who is Amit Divekar? | Official Profile',
  description: 'Amit Divekar is a Cloud Architect and Full-Stack Engineer from India specializing in AWS/GCP infrastructure, Kubernetes, and AI-integrated web applications. Learn about his projects, experience, and technical background.',
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
    title: 'Who is Amit Divekar? | Official Profile',
    description: 'Cloud Architect & Full-Stack Engineer from India building AI-powered systems and production-grade cloud infrastructure.',
    url: `${siteUrl}/amit-divekar`,
    type: 'profile',
    siteName: 'Amit Divekar',
    images: [{
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Amit Divekar - Cloud Architect and Full-Stack Engineer from India',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who is Amit Divekar? | Official Profile',
    description: 'Cloud Architect & Full-Stack Engineer from India building AI-powered systems.',
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
      image: `${siteUrl}/og-image.png`,
      jobTitle: heroData.title,
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
        `https://instagram.com/amitdevx`,
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
          text: 'Amit Divekar (also known as amitdevx) is a Cloud Architect and Full-Stack Engineer from India. He specializes in building scalable AWS/GCP cloud infrastructure, Kubernetes orchestration, and AI-integrated web applications using Next.js, TypeScript, and Python.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Amit Divekar do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Amit Divekar architects cloud-native systems on AWS and Google Cloud, builds production-grade web applications with Next.js and React, and develops AI-powered tools like SchemaSense (AI database documentation) and Professor Profiler (exam analysis with multi-agent AI).',
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
          text: 'Amit Divekar is from India. He is currently pursuing a Bachelor\'s degree in Computer Science from Savitribai Phule Pune University and is based in the Pune/Nashik region of Maharashtra.',
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
    <div className="relative overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Identity Header */}
          <header className="text-center mb-16 space-y-4">
            <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-primary/70">
              Official Profile
            </p>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
              Who is <span className="text-secondary">Amit Divekar</span>?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {heroData.title} from India — building AI-powered systems, production-grade cloud infrastructure, and open-source developer tools.
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
                <span>{aboutData.education.institution}</span>
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
              {experienceData.map((exp, i) => (
                <div key={i} className="border border-border/40 rounded-xl p-6 bg-card/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-lg text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground font-mono">{exp.duration}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              ))}
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
                <div key={i} className="border border-border/40 rounded-xl p-5 bg-card/50 space-y-3">
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
                        className="text-xs text-primary hover:underline">Live Demo</Link>
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
                  className="block border border-border/40 rounded-xl p-5 bg-card/50 hover:border-primary/40 transition-colors">
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
              <details className="border border-border/40 rounded-xl p-5 bg-card/50 group" open>
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  Who is Amit Divekar?
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Amit Divekar (also known as amitdevx) is a Cloud Architect and Full-Stack Engineer from India. 
                  He specializes in building scalable AWS/GCP cloud infrastructure, Kubernetes orchestration, 
                  and AI-integrated web applications using Next.js, TypeScript, and Python. He is currently 
                  pursuing a Bachelor&apos;s degree in Computer Science from {aboutData.education.institution}.
                </p>
              </details>

              <details className="border border-border/40 rounded-xl p-5 bg-card/50 group">
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
              </details>

              <details className="border border-border/40 rounded-xl p-5 bg-card/50 group">
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
              </details>

              <details className="border border-border/40 rounded-xl p-5 bg-card/50 group">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  Where is Amit Divekar from?
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Amit Divekar is from India. He is based in the Pune/Nashik region of Maharashtra and is 
                  currently studying Computer Science at {aboutData.education.institution}.
                </p>
              </details>

              <details className="border border-border/40 rounded-xl p-5 bg-card/50 group">
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
              </details>
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
