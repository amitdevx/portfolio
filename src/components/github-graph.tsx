'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Bypass strict prop inference by casting module and dynamic type to any
const GitHubCalendar = dynamic<any>(() => import('react-github-calendar').then((mod) => mod.GitHubCalendar as any), {
  ssr: false,
  loading: () => <div className="h-[150px] w-full animate-pulse bg-background/50 rounded-xl border border-border/40" />
});

export default function GithubGraph() {
  const explicitTheme = {
    light: ['#ebedf0', '#e0c8b2', '#c2a182', '#a37a52', '#855422'],
    dark: ['#1f1f1f', '#5a4634', '#8a6d4d', '#b4946d', '#d9b891']
  };

  return (
    <div className="w-full flex justify-center sm:justify-start items-center">
      <div className="overflow-x-auto w-full pb-2 no-scrollbar">
        <div className="min-w-max pr-4">
          <GitHubCalendar 
            username="amitdevx" 
            colorScheme="dark"
            theme={explicitTheme}
            hideTotalCount={true}
            hideColorLegend={true}
            blockRadius={2}
            blockMargin={4}
            blockSize={12}
            fontSize={12}
          />
        </div>
      </div>
    </div>
  );
}
