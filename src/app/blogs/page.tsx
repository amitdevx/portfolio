import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import ParticleBackground from '@/components/particle-background';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: "Tech Blogs & Tutorials | Amit Divekar",
  description: "In-depth technical blogs, project breakdowns, and tutorials on Cloud, DevOps, Full-Stack Development, and AI by Amit Divekar. Learn from real-world implementations.",
  keywords: [
    'Tech Blog',
    'Software Engineering Blog',
    'DevOps Tutorials',
    'Cloud Computing Articles',
    'Full-Stack Development',
    'Programming Tutorials',
    'Amit Divekar Blog',
    'Technical Writing',
    'Code Examples',
    'System Design',
  ],
  alternates: {
    canonical: 'https://amitdevx.tech/blogs',
  },
  openGraph: {
    title: "Tech Blogs & Tutorials | Amit Divekar",
    description: "In-depth technical blogs, project breakdowns, and tutorials on Cloud, DevOps, Full-Stack Development, and AI.",
    url: 'https://amitdevx.tech/blogs',
    type: 'website',
    siteName: 'Amit Divekar',
    locale: 'en_US',
    images: [
      {
        url: 'https://amitdevx.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amit Divekar - Tech Blogs & Tutorials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Blogs & Tutorials | Amit Divekar',
    description: 'In-depth technical blogs and tutorials on Cloud, DevOps, and Full-Stack Development.',
    images: ['https://amitdevx.tech/og-image.png'],
    creator: '@amitdevx_',
    site: '@amitdevx_',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative overflow-x-clip">
      <ParticleBackground />
      <Header />
      <main role="main">
      <section className="min-h-screen pt-28 pb-12 px-4 sm:px-6 flex flex-col items-center w-full overflow-x-hidden" aria-labelledby="blogs-heading">
        <div className="w-full max-w-[1600px] mx-auto space-y-12">
        
        {/* Header - Matches your Projects Section */}
        <div className="text-center space-y-4">
          <h1 id="blogs-heading" className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
            Tech Blogs & Tutorials
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into code, bugs I've fixed, and systems I've built. Real-world solutions and technical insights.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6" role="list">
          {posts.map((post) => (
            <Card 
              key={post.slug} 
              // This class string matches your Projects card style exactly
              className="bg-background/15 backdrop-blur-lg border border-border/40 shadow-lg flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl group"
              role="listitem"
            >
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="font-normal opacity-70 flex gap-1 items-center">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </Badge>
                </div>
                <CardTitle className="font-headline text-lg sm:text-xl group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-2 text-sm">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                  <Link href={`/blogs/${post.slug}`}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </main>
    <Footer />
    </div>
  );
}
