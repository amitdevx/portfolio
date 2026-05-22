'use client';

import { useEffect, useRef, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function ScrollRestorationInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeIntervalRef = useRef<any>(null);

  // Set scroll restoration to manual globally on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Save scroll position on scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const getScrollKey = () => {
      return `scroll_pos_${window.location.pathname}${window.location.search}${window.location.hash}`;
    };

    let timeoutId: any;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const key = getScrollKey();
        if (window.scrollY >= 0) {
          sessionStorage.setItem(key, window.scrollY.toString());
        }
      }, 50); // Faster debounce (50ms) to catch positions right before clicks
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname, searchParams]);

  // Restore or reset scroll position on route change
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Clear any existing restoration interval
    if (activeIntervalRef.current) {
      clearInterval(activeIntervalRef.current);
      activeIntervalRef.current = null;
    }

    const key = `scroll_pos_${window.location.pathname}${window.location.search}${window.location.hash}`;
    const savedScrollPos = sessionStorage.getItem(key);

    const stopRestoration = () => {
      if (activeIntervalRef.current) {
        clearInterval(activeIntervalRef.current);
        activeIntervalRef.current = null;
      }
    };

    // If user interacts manually, stop custom scrolling immediately
    const userInteractionEvents = ['wheel', 'touchmove', 'mousedown', 'keydown'];
    userInteractionEvents.forEach((event) => {
      window.addEventListener(event, stopRestoration, { passive: true });
    });

    if (savedScrollPos) {
      const targetScroll = parseInt(savedScrollPos, 10);
      if (!isNaN(targetScroll) && targetScroll > 0) {
        let attempts = 0;
        const maxAttempts = 20; // 2 seconds max duration

        // Set immediate scroll
        window.scrollTo({
          top: targetScroll,
          behavior: 'instant' as any
        });

        // Polling to handle content height updates/hydration delays
        activeIntervalRef.current = setInterval(() => {
          window.scrollTo({
            top: targetScroll,
            behavior: 'instant' as any
          });

          attempts++;
          const currentScroll = window.scrollY;
          if (Math.abs(currentScroll - targetScroll) < 5 || attempts >= maxAttempts) {
            stopRestoration();
          }
        }, 100);
      }
    } else {
      // If no position is saved, scroll to the top of the page (standard navigation)
      window.scrollTo({
        top: 0,
        behavior: 'instant' as any
      });
    }

    return () => {
      stopRestoration();
      userInteractionEvents.forEach((event) => {
        window.removeEventListener(event, stopRestoration);
      });
    };
  }, [pathname, searchParams]);

  return null;
}

export default function ScrollRestoration() {
  return (
    <Suspense fallback={null}>
      <ScrollRestorationInner />
    </Suspense>
  );
}
