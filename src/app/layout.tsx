import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import React from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { heroData, aboutData, projectsData } from '@/data/portfolio-data';

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
  name: heroData.name,
  alternateName: 'amitdevx',
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: heroData.title,
  description: heroData.bio,
  nationality: {
    '@type': 'Country',
    name: 'India',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: aboutData.education.institution,
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
    addressCountry: 'IN'
  },
  sameAs: [
    'https://www.linkedin.com/in/divekar-amit',
    'https://github.com/amitdevx',
    'https://www.kaggle.com/divekaramit',
    'https://x.com/amitdevx_',
    'https://instagram.com/amitdevx',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteUrl,
  name: heroData.name,
  description: heroData.tagline,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: heroData.name,
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  description: heroData.tagline,
  sameAs: [
    'https://www.linkedin.com/in/divekar-amit',
    'https://github.com/amitdevx',
    'https://www.kaggle.com/divekaramit',
    'https://x.com/amitdevx_',
    'https://instagram.com/amitdevx',
  ],
  founder: {
    '@type': 'Person',
    name: heroData.name,
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
      name: 'About Amit Divekar',
      item: `${siteUrl}/amit-divekar`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Blogs',
      item: `${siteUrl}/blogs`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'CV',
      item: `${siteUrl}/cv`,
    },
  ],
};

const softwareProjectsJsonLd = projectsData.map((project) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: project.title,
  description: project.description,
  codeRepository: project.githubLink || project.liveLink || siteUrl,
  programmingLanguage: project.technologies,
  author: {
    '@type': 'Person',
    name: heroData.name,
    url: siteUrl,
  },
}));

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Amit Divekar | Cloud Architect & Full-Stack Engineer from India – Official Website',
    template: '%s | Amit Divekar',
  },
  description:
    'Amit Divekar is a Cloud Architect and Full-Stack Engineer from India specializing in scalable AWS/GCP architectures, Kubernetes orchestration, and AI-integrated Next.js ecosystems. Official portfolio and blog.',
  applicationName: 'Amit Divekar Portfolio',
  generator: 'Next.js',
  keywords: [
    'Amit Divekar',
    'Cloud Architect',
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
        alt: 'Amit Divekar Cloud Architect Full-Stack Engineer from India',
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
