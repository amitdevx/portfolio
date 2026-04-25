'use client';

import { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  children?: ReactNode;
}

export default function ObfuscatedEmail({ user, domain, className, children }: ObfuscatedEmailProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (!isMounted) {
      e.preventDefault();
      window.location.href = `mailto:${user}@${domain}`;
    }
  };

  const mailto = isMounted ? `mailto:${user}@${domain}` : '#';
  const displayEmail = isMounted ? `${user}@${domain}` : 'Contact Email';

  if (children) {
    return (
      <a href={mailto} onClick={handleClick} className={className} aria-label="Email Address">
        {children}
      </a>
    );
  }

  return (
    <a href={mailto} onClick={handleClick} className={className} aria-label="Email Address">
      {displayEmail}
    </a>
  );
}
