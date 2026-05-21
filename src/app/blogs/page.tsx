import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
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
      <Header />
      <main role="main">
      <section className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full overflow-x-hidden" aria-labelledby="blogs-heading">
        <div className="w-full max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <h1 id="blogs-heading" className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Engineering Blog
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Deep dives into systems I've built, bugs I've fixed, and technical decisions behind real-world projects.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {posts.map((post) => (
            <Card 
              key={post.slug} 
              className="bg-background/80 backdrop-blur-md border border-border/40 shadow-lg flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-xl group"
              role="listitem"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center mb-3">
                  <Badge variant="outline" className="font-normal opacity-70 flex gap-1 items-center text-xs">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </Badge>
                </div>
                <CardTitle className="font-headline text-lg leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2 text-sm">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow pt-0">
                <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[11px] px-2 py-0.5">
                            {tag}
                        </Badge>
                    ))}
                    {post.tags.length > 3 && (
                        <Badge variant="secondary" className="text-[11px] px-2 py-0.5">+{post.tags.length - 3}</Badge>
                    )}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button asChild variant="ghost" size="sm" className="w-full justify-between group-hover:bg-primary/5">
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
