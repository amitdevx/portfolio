import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from "next/image";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Mermaid from "@/components/mermaid";
import Header from '@/components/header';
import Footer from '@/components/footer';

// 1. Generate Static Params for SEO (Pre-renders all blog pages)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// 2. Dynamic SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  
  const siteUrl = 'https://amitdevx.tech';
  
  return {
    title: post.title,
    description: post.description,
    keywords: [...post.tags, 'Amit Divekar', 'Software Engineering', 'Tech Blog', 'Tutorial'],
    authors: [{ name: 'Amit Divekar', url: siteUrl }],
    creator: 'Amit Divekar',
    publisher: 'Amit Divekar',
    alternates: {
      canonical: `${siteUrl}/blogs/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Amit Divekar`,
      description: post.description,
      url: `${siteUrl}/blogs/${slug}`,
      type: 'article',
      siteName: 'Amit Divekar',
      locale: 'en_US',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: ['Amit Divekar'],
      section: 'Technology',
      tags: post.tags,
      images: [
        {
          url: post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${post.title} - Amit Divekar`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Amit Divekar`,
      description: post.description,
      images: [post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-image.png`],
      creator: '@amitdevx_',
      site: '@amitdevx_',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = 'https://amitdevx.tech';
  
  // Article JSON-LD for rich search results
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: 'Amit Divekar',
      url: siteUrl,
      jobTitle: 'Software Engineer',
      sameAs: [
        'https://www.linkedin.com/in/divekar-amit',
        'https://github.com/amitdevx',
        'https://x.com/amitdevx_',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Amit Divekar',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/android-chrome-512x512.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.updated || post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blogs/${slug}`,
    },
    image: {
      '@type': 'ImageObject',
      url: post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    keywords: post.tags.join(', '),
    articleSection: 'Technology',
    inLanguage: 'en-US',
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <div className="relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <article className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
        
        {/* Navigation */}
        <Button asChild variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary -ml-4">
          <Link href="/blogs">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
          </Link>
        </Button>

        {/* Article Header */}
        <header className="mb-12 border-b border-border/40 pb-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center text-muted-foreground gap-6 text-sm font-mono">
            <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Amit Divekar</span>
            </div>
          </div>
        </header>
        
        {/* Article Content - Styled with Tailwind Typography */}
        <div className="prose prose-lg prose-invert max-w-none 
          prose-headings:font-headline prose-headings:font-bold prose-headings:text-foreground
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground
          prose-code:text-primary prose-code:bg-secondary/20 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-card prose-pre:border prose-pre:border-border/50
          prose-li:text-muted-foreground
        ">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              // Paragraph handler to prevent nested div in p tags
              p: ({ node, children, ...props }) => {
                // Check if children contain an img element by checking the node
                const hasImage = node?.children?.some(
                  (child) => (child as { tagName?: string }).tagName === 'img'
                );
                // If paragraph contains only an image, render as div
                if (hasImage) {
                  return <div className="my-8">{children}</div>;
                }
                return <p {...props}>{children}</p>;
              },
              // Image Handler
              // Using unoptimized to bypass /_next/image optimizer.
              // width={0} height={0} causes INVALID_IMAGE_OPTIMIZE_REQUEST (400) errors
              // from the optimizer when it can't resolve the intrinsic size.
              img: ({ ...props }) => {
                return (
                  <span className="block relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={props.src || ""}
                      alt={props.alt || "Blog Image"}
                      width={1920}
                      height={1080}
                      unoptimized
                      className="w-full h-auto"
                    />
                  </span>
                );
              },
              
              // Code Block Handler
              code(props) {
                const {children, className, ...rest} = props
                const match = /language-(\w+)/.exec(className || '')

                // Mermaid diagrams
                if (match && match[1] === 'mermaid') {
                  return <Mermaid chart={String(children).trim()} />
                }

                // Syntax-highlighted code blocks
                return match ? (
                  <SyntaxHighlighter
                    PreTag="div" // Wrap it in a div instead of pre to avoid hydration errors
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={dracula} // The theme
                    className="rounded-lg !bg-[#1e1e2e] !p-4 border border-white/10 shadow-lg !my-6 text-sm md:text-base"
                  />
                ) : (
                  // Inline code
                  <code {...rest} className={`${className} bg-secondary/30 text-primary rounded px-1.5 py-0.5 font-mono text-sm`}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

      </div>
    </article>
    <Footer />
    </div>
  );
}
