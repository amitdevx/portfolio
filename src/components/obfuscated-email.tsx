'use client';

import { ReactNode } from 'react';

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  children?: ReactNode;
}

export default function ObfuscatedEmail({ user, domain, className, children }: ObfuscatedEmailProps) {
  const mailto = `mailto:${user}@${domain}`;
  const displayEmail = `${user}@${domain}`;

  if (children) {
    return (
      <a href={mailto} className={className} aria-label="Email Address">
        {children}
      </a>
    );
  }

  return (
    <a href={mailto} className={className} aria-label="Email Address">
      {displayEmail}
    </a>
  );
}
