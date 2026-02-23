import type { Metadata } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import Link from 'next/link';
import ParticleBackground from '@/components/particle-background';

// Notes page with downloadable resources
const pageUrl = 'https://amitdevx.tech/notes';

export const metadata: Metadata = {
  title: 'SYBSc CS Notes - Data Structures & DBMS SQL Practicals',
  description: 'Free downloadable SYBSc Computer Science practical notes covering Data Structures and Algorithms (DSA) and Database Management Systems (DBMS SQL). Curated by Amit Divekar for Savitribai Phule Pune University students.',
  keywords: [
    'SYBSc CS notes', 'SYBSc practical notes', 'Data Structures notes',
    'DBMS SQL notes', 'Computer Science practicals', 'Pune University notes',
    'DSA practicals', 'SQL practicals', 'BCA notes', 'BSc CS study material',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'article',
    url: pageUrl,
    title: 'SYBSc CS Notes - DSA & DBMS SQL Practicals | Amit Divekar',
    description: 'Free downloadable SYBSc Computer Science practical notes for Data Structures, Algorithms, and DBMS SQL.',
    siteName: 'Amit Divekar',
    images: [
      {
        url: 'https://amitdevx.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SYBSc CS Notes - Amit Divekar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYBSc CS Notes - DSA & DBMS SQL Practicals | Amit Divekar',
    description: 'Free downloadable SYBSc Computer Science practical notes for Data Structures, Algorithms, and DBMS SQL.',
    images: ['https://amitdevx.tech/og-image.png'],
    creator: '@amitdevx_',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#000000',
  },
};

export default function NotesPage() {
  return (
    <div className="relative overflow-x-hidden flex flex-col min-h-screen">
      <ParticleBackground />
      <Header />
      <main className="flex-grow container mx-auto px-6 sm:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">SYBSc CS Practical Notes</h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Free downloadable notes for Second Year BSc Computer Science students. Covers Data Structures, Algorithms, and DBMS SQL practicals aligned with Savitribai Phule Pune University syllabus.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-background/15 backdrop-blur-lg border border-border/40 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Data Structures & DBMS SQL Practicals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground">
                  Complete practical solutions covering linked lists, stacks, queues, trees, sorting algorithms, SQL queries, joins, subqueries, and database design. Written for SYBSc CS Semester III & IV.
                </p>
                <Button asChild className="group w-full sm:w-auto">
                  <Link href="/doc/dsa_and_sql.pdf.pdf" target="_blank" download>
                    Download PDF
                    <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-4">
            For educational purposes only. The owner of this site is not responsible for any misuse.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
