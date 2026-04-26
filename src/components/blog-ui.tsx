'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the progress with a spring physics animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-border/20 z-[110]">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-purple-500 to-secondary origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

export function TimeToRead({ content }: { content: string }) {
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 250));

  return (
    <span className="text-muted-foreground text-sm">
      {minutes} min read · {wordCount.toLocaleString()} words
    </span>
  );
}

export function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const article = document.querySelector('article');
      if (!article) return;

      const elements = article.querySelectorAll('h2, h3');
      const items: TOCItem[] = [];

      elements.forEach((el) => {
        const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
        if (!el.id) {
          el.id = id;
        }
        items.push({
          id,
          text: el.textContent || '',
          level: parseInt(el.tagName.charAt(1)),
        });
      });

      setHeadings(items);
    }, 500);

    return () => clearTimeout(timer);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  const scrollToHeading = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  if (headings.length < 2) return null;

  return (
    <nav className="hidden xl:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto" aria-label="Table of contents">
      <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">On this page</h4>
      <ul className="space-y-1 text-sm border-l border-border/40">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full text-left py-1.5 transition-all duration-200 border-l-2 -ml-[2px] ${
                heading.level === 3 ? 'pl-6' : 'pl-4'
              } ${
                activeId === heading.id
                  ? 'border-primary text-primary font-medium'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-2 py-1 rounded text-xs bg-background/80 border border-border/40 text-muted-foreground hover:text-foreground hover:bg-background transition-all duration-200 z-10"
      aria-label={copied ? 'Copied!' : 'Copy code'}
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}
