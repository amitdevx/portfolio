'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet';
import { navigationLinks } from '@/data/portfolio-data';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-[100] w-full border-b border-border/40 bg-background/80 backdrop-blur-lg" 
      suppressHydrationWarning
    >
      <div className="container flex h-16 items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="AD" width="32" height="32" />
          <span className="sr-only">Amit Divekar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" suppressHydrationWarning>
                  {isSheetOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                  <span className="sr-only">{isSheetOpen ? 'Close Menu' : 'Open Menu'}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl">
                 <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">A list of links to navigate the site.</SheetDescription>
                  <div className="flex items-center gap-2 border-b pb-4">
                       <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>

                          <img src="/favicon.svg" alt="AD" width="28" height="28" />
                           <span className="font-headline text-xl font-bold text-primary">Amit Divekar</span>
                      </Link>
                  </div>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="mt-8 flex flex-col gap-6">
                    {navigationLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsSheetOpen(false)}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
