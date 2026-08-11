'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger, SheetClose } from './ui/sheet';
import { navigationLinks } from '@/data/portfolio-data';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
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
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
      className="sticky top-0 z-[100] w-full border-b border-border/40 bg-background/80 backdrop-blur-lg" 
      suppressHydrationWarning
    >
      <div className="container flex h-16 items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.svg" alt="AD" width={32} height={32} />
          <span className="sr-only">Amit Divekar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigationLinks.map((item) => {
            const href = pathname === '/' && item.href.startsWith('/#') ? item.href.substring(1) : item.href;
            return (
              <Link
                key={item.href}
                href={href}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen} modal={true}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" suppressHydrationWarning>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl">
                 <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">A list of links to navigate the site.</SheetDescription>
                  <div className="flex items-center justify-between border-b pb-4">
                       <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                          <Image src="/favicon.svg" alt="AD" width={28} height={28} />
                           <span className="font-headline text-xl font-bold text-primary">Amit Divekar</span>
                      </Link>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close Menu</span>
                        </Button>
                      </SheetClose>
                  </div>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="mt-8 flex flex-col gap-6">
                    {navigationLinks.map((item) => {
                      const href = pathname === '/' && item.href.startsWith('/#') ? item.href.substring(1) : item.href;
                      return (
                        <Link
                          key={item.href}
                          href={href}
                          onClick={() => setIsSheetOpen(false)}
                          className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
