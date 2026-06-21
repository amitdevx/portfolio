import type { Metadata } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Github } from 'lucide-react';
import Link from 'next/link';

// Notes page with downloadable resources
const pageUrl = 'https://amitdevx.tech/notes';

export const metadata: Metadata = {
  title: 'Computer Science Practical Notes & Guides | Amit Divekar',
  description: 'Access free downloadable Computer Science study materials and practical notes. Covering Data Structures (DSA), DBMS SQL, Advanced Java, Operating Systems, Web Technologies, and more.',
  keywords: [
    'Computer Science notes', 'BSc CS practical notes', 'Data Structures notes',
    'DBMS SQL notes', 'Advanced Java practicals', 'Operating Systems notes',
    'Web Technology notes', 'DSA practicals', 'SQL practicals', 'BCA notes',
    'BSc Computer Science study material', 'Amit Divekar notes', 'programming assignments'
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'article',
    url: pageUrl,
    title: 'Computer Science Practical Notes & Guides | Amit Divekar',
    description: 'Free downloadable Computer Science practical notes covering DSA, DBMS SQL, Java, Android, and Web Technologies. Compiled for university students by Amit Divekar.',
    siteName: 'Amit Divekar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computer Science Practical Notes & Guides | Amit Divekar',
    description: 'Free downloadable Computer Science practical notes covering DSA, DBMS SQL, Java, Android, and Web Technologies. Compiled for university students by Amit Divekar.',
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
      <Header />
      <main className="flex-grow container mx-auto px-6 sm:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Computer Science Practical Notes & Guides</h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Free open-source repositories and downloadable study guides for Computer Science students, compiled by Systems Engineer Amit Divekar. Covers Java, Web Technologies, Data Structures, Algorithms, DBMS SQL, and more.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-background/80 backdrop-blur-md border border-border/40 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Advanced Computer Science Study Material</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground">
                  A comprehensive repository containing study materials, practical programs, assignment solutions, and reference materials for advanced Computer Science subjects including Java, Operating Systems, Web Technologies, Database Technologies, Android, and Agile Processes.
                </p>
                <Button asChild className="group w-full sm:w-auto" variant="outline">
                  <Link href="https://github.com/amitdevx/TY.git" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <Github className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background/80 backdrop-blur-md border border-border/40 shadow-lg mt-6">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Data Structures & DBMS SQL Practicals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground">
                  Complete practical solutions covering linked lists, stacks, queues, trees, sorting algorithms, SQL queries, joins, subqueries, and database design. Written for SYBSc CS Semester III & IV.
                </p>
                <Button asChild className="group w-full sm:w-auto">
                  <Link href="/doc/dsa_and_sql.pdf" target="_blank" rel="noopener noreferrer" download>
                    Download PDF
                    <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-8">
            For educational purposes only. The owner of this site is not responsible for any misuse.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
