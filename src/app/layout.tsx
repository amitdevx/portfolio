import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import React from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const siteUrl = 'https://amitdevx.tech';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amit Divekar',
  alternateName: 'amitdevx',
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: 'Cloud Architect & Full-Stack Engineer',
  description:
    'Cloud Architect and Full-Stack Engineer specializing in highly scalable AWS/GCP architectures, Kubernetes orchestration, and AI-integrated Next.js ecosystems. Building resilient cloud systems and high-performance web applications.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Savitribai Phule Pune University',
  },
  knowsAbout: [
    'Cloud Computing', 'DevOps', 'AI', 'Machine Learning', 'Full-Stack Development', 
    'TypeScript', 'JavaScript', 'Python', 'React', 'Next.js', 'Node.js',
    'AWS', 'Google Cloud Platform', 'Azure', 'Docker', 'Kubernetes',
    'CI/CD', 'Microservices', 'System Design', 'Web Development'
  ],
  knowsLanguage: ['English', 'Hindi', 'Marathi'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'India'
  },
  sameAs: [
    'https://www.linkedin.com/in/divekar-amit',
    'https://github.com/amitdevx',
    'https://www.kaggle.com/divekaramit',
    'https://x.com/amitdevx_',
  ],
  email: 'amitdivekar289@gmail.com',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteUrl,
  name: 'Amit Divekar',
  description:
    'Cloud Architect and Full-Stack Engineer building resilient cloud systems and high-performance web applications. View projects, experience, and technical expertise.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Amit Divekar',
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  description:
    'Cloud Architect and Full-Stack Engineer building resilient cloud systems and high-performance web applications.',
  sameAs: [
    'https://www.linkedin.com/in/divekar-amit',
    'https://github.com/amitdevx',
    'https://www.kaggle.com/divekaramit',
    'https://x.com/amitdevx_',
  ],
  founder: {
    '@type': 'Person',
    name: 'Amit Divekar',
  },
};

const breadcrumbListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blogs',
      item: `${siteUrl}/blogs`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'CV',
      item: `${siteUrl}/cv`,
    },
  ],
};

const softwareProjectsJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'SchemaSense AI',
    description: 'AI-powered database documentation platform with real-time chat interface for querying database structure in plain English.',
    codeRepository: 'https://github.com/amitdevx/schemasense',
    programmingLanguage: ['TypeScript', 'Python'],
    runtimePlatform: 'Next.js',
    author: {
      '@type': 'Person',
      name: 'Amit Divekar',
      url: siteUrl,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'Professor Profiler',
    description: 'Advanced multi-agent AI system that reverse-engineers exam papers to decode professor psychology.',
    codeRepository: 'https://github.com/amitdevx/Professor_Profiler',
    programmingLanguage: ['Python'],
    author: {
      '@type': 'Person',
      name: 'Amit Divekar',
      url: siteUrl,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'Eatinformed',
    description: 'AI-driven platform for instant nutrition analysis from food label images.',
    codeRepository: 'https://github.com/amitdevx/Eatinformed',
    programmingLanguage: ['TypeScript'],
    runtimePlatform: 'Next.js',
    author: {
      '@type': 'Person',
      name: 'Amit Divekar',
      url: siteUrl,
    },
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Amit Divekar | Cloud Architect & Full-Stack Engineer',
    template: 'Amit Divekar | %s',
  },
  description:
    'Cloud Architect and Full-Stack Engineer specializing in scalable AWS/GCP architectures, Kubernetes orchestration, and AI-integrated Next.js ecosystems. Code that ships, systems that scale.',
  applicationName: 'Amit Divekar Portfolio',
  generator: 'Next.js',
  keywords: [
    'Amit Divekar',
    'Software Engineer',
    'Full-Stack Developer',
    'Cloud Engineer',
    'DevOps Engineer',
    'Portfolio',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'AWS',
    'Google Cloud Platform',
    'GCP',
    'Azure',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Python',
    'Node.js',
    'Machine Learning',
    'AI Solutions',
    'Cloud Architecture',
    'Microservices',
    'System Design',
    'Backend Development',
    'Frontend Development',
    'Web Development',
    'Software Development',
    'Tech Blog',
    'Pune',
    'India',
  ],
  authors: [{ name: 'Amit Divekar', url: siteUrl }],
  creator: 'Amit Divekar',
  publisher: 'Amit Divekar',
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#b3a5c8' },
      { rel: 'me', url: 'https://github.com/amitdevx' },
      { rel: 'me', url: 'https://www.linkedin.com/in/divekar-amit' },
      { rel: 'me', url: 'https://x.com/amitdevx_' },
      { rel: 'me', url: 'https://www.kaggle.com/divekaramit' },
    ],
  },
  
  manifest: '/site.webmanifest',
  
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Amit Divekar',
    description:
      'Cloud Architect and Full-Stack Engineer building resilient cloud systems and high-performance web applications.',
    siteName: 'Amit Divekar Portfolio',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Amit Divekar - Software Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Divekar',
    description:
      'Cloud Architect and Full-Stack Engineer building resilient cloud systems and high-performance web applications.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@amitdevx_',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  other: {
    'msapplication-TileColor': '#0a0a0a',
    'msapplication-config': '/browserconfig.xml',
    'google-site-verification': 'eQm4tbLSTzuUWGkYlg260c1_9s4jeLV65cGvGLcNWig',
    'format-detection': 'telephone=no',
  },
  
  category: 'technology',
  classification: 'Portfolio Website',
  
  verification: {
    google: 'eQm4tbLSTzuUWGkYlg260c1_9s4jeLV65cGvGLcNWig',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://api.github.com" />
        
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
        
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
        />
        {softwareProjectsJsonLd.map((project, index) => (
          <script
            key={`software-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(project) }}
          />
        ))}
      </head>
      <body>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
