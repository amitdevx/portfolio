import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, FileText, CheckCircle2, Box, Cpu, FileCode2, Terminal, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SystemArchitectureVisual } from '@/components/projects/SystemArchitectureVisual';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'md2pdf - Markdown to PDF with Mermaid, KaTeX & Obsidian | Amit Divekar',
  description: 'npm CLI and Node.js API to convert Markdown to PDF. Supports Mermaid diagrams, KaTeX math, Obsidian callouts, GFM tables, syntax highlighting, batch conversion, and custom themes. Zero config.',
  keywords: [
    'md2pdf', 'markdown to pdf', 'nodejs', 'npm package', 'playwright', 'chromium', 
    'mermaid', 'katex', 'open source', 'amit divekar', 'unified', 'remark', 'rehype',
    'obsidian', 'obsidian pdf', 'syntax highlighting', 'shiki', 'batch pdf', 
    'table of contents', 'footnotes', 'callouts', 'wiki-links', 'gfm', 
    'github flavored markdown', 'typescript', 'latex math', 'document converter'
  ],
  authors: [{ name: 'Amit Divekar' }],
  alternates: {
    canonical: 'https://amitdevx.tech/projects/md2pdf',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'article',
    url: 'https://amitdevx.tech/projects/md2pdf',
    title: 'md2pdf - Markdown to PDF with Mermaid, KaTeX & Obsidian | Amit Divekar',
    description: 'npm CLI and Node.js API to convert Markdown to PDF. Supports Mermaid diagrams, KaTeX math, Obsidian callouts, GFM tables, syntax highlighting, batch conversion, and custom themes. Zero config.',
    siteName: 'Amit Divekar Portfolio',
    images: [
      {
        url: 'https://amitdevx.tech/og/md2pdf.png',
        width: 1200,
        height: 630,
        alt: 'md2pdf - High-fidelity Markdown to PDF rendering engine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'md2pdf - Markdown to PDF with Mermaid, KaTeX & Obsidian | Amit Divekar',
    description: 'npm CLI and Node.js API to convert Markdown to PDF. Supports Mermaid diagrams, KaTeX math, Obsidian callouts, GFM tables, syntax highlighting, batch conversion, and custom themes. Zero config.',
    creator: '@amitdevx_',
    images: ['https://amitdevx.tech/og/md2pdf.png'],
  },
};

export default function Md2PdfCaseStudy() {
  return (
    <div className="relative overflow-x-hidden flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow pt-8">
        <article className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Link href="/#projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-12 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <header className="space-y-6 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Open Source</Badge>
              <Badge variant="outline">npm Package</Badge>
              <Badge variant="outline" className="border-blue-500/20 text-blue-400">TypeScript</Badge>
            </div>
            
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              md2pdf
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">
              Production-grade open-source Markdown to PDF rendering engine for Node.js that converts Markdown into high-fidelity PDFs using Playwright, Chromium, and the Unified processing pipeline.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-500 text-white">
                <Link href="https://www.npmjs.com/package/@amitdevx/md2pdf" target="_blank" rel="noopener noreferrer">
                  npm Package
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5">
                <Link href="https://github.com/amitdevx/md2pdf" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repo
                </Link>
              </Button>
            </div>
          </header>

          {/* Package Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16 py-8 border-y border-border/40">
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Version</h4>
              <div className="pt-2">
                <a href="https://www.npmjs.com/package/@amitdevx/md2pdf" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.shields.io/npm/v/@amitdevx/md2pdf.svg?style=flat-square" alt="npm version" className="h-[28px]" />
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Downloads</h4>
              <div className="pt-2">
                <a href="https://www.npmjs.com/package/@amitdevx/md2pdf" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.shields.io/npm/dt/@amitdevx/md2pdf.svg?style=flat-square&color=10b981" alt="npm downloads" className="h-[28px]" />
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Build Status</h4>
              <div className="pt-2">
                <a href="https://github.com/amitdevx/md2pdf/actions/workflows/ci.yml" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.shields.io/github/actions/workflow/status/amitdevx/md2pdf/ci.yml?style=flat-square" alt="Build Status" className="h-[28px]" />
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">License</h4>
              <div className="pt-2">
                <a href="https://github.com/amitdevx/md2pdf/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.shields.io/npm/l/@amitdevx/md2pdf.svg?style=flat-square" alt="License: MIT" className="h-[28px]" />
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Runtime</h4>
              <div className="pt-2">
                <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-success?style=flat-square&logo=nodedotjs&color=10b981" alt="Node.js >=18.0.0" className="h-[28px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            
            {/* Installation Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" /> Installation
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-2"># Install globally</p>
                  <p><span className="text-blue-400">npm</span> <span className="text-green-400">install</span> <span className="text-cyan-400">-g</span> <span className="text-orange-300">@amitdevx/md2pdf</span></p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-green-400">init</span></p>
                </div>
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-2"># Or use locally within a project</p>
                  <p><span className="text-blue-400">npm</span> <span className="text-green-400">install</span> <span className="text-orange-300">@amitdevx/md2pdf</span></p>
                  <p><span className="text-blue-400">npx</span> <span className="text-orange-300">md2pdf</span> <span className="text-green-400">init</span></p>
                </div>
              </div>
            </section>

            {/* Practical Use Cases Section */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Box className="w-5 h-5 text-blue-400" /> Practical Use Cases
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-4">
                  <h3 className="text-lg font-bold text-white">README.md ➔ README.pdf</h3>
                  <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto border border-white/5">
<pre className="whitespace-pre-wrap break-words"><code className="text-slate-300">
<span className="text-purple-400">import</span> {'{'} convert {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">"@amitdevx/md2pdf"</span>;
{'\n\n'}
<span className="text-purple-400">const</span> result <span className="text-cyan-400">=</span> <span className="text-purple-400">await</span> <span className="text-yellow-300">convert</span>({'{'}
  input: <span className="text-green-300">"./README.md"</span>,
  output: <span className="text-green-300">"./README.pdf"</span>,
{'}'});
</code></pre>
                  </div>
                </div>

                <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-4">
                  <h3 className="text-lg font-bold text-white">Automated Release Notes</h3>
                  <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto border border-white/5">
<pre className="whitespace-pre-wrap break-words"><code className="text-slate-300">
<span className="text-slate-500"># GitHub Actions automated generation</span>
{'\n'}
<span className="text-blue-400">md2pdf</span> CHANGELOG.md <span className="text-orange-300">--output</span> release.pdf
</code></pre>
                  </div>
                </div>

                <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-4">
                  <h3 className="text-lg font-bold text-white">Technical Documentation</h3>
                  <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto border border-white/5">
<pre className="whitespace-pre-wrap break-words"><code className="text-slate-300">
<span className="text-blue-400">md2pdf</span> docs/architecture.md <span className="text-cyan-400">\</span>
  <span className="text-orange-300">--output</span> build/architecture.pdf <span className="text-cyan-400">\</span>
  <span className="text-orange-300">--toc</span> <span className="text-cyan-400">\</span>
  <span className="text-orange-300">--paper</span> A4
</code></pre>
                  </div>
                </div>

                <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-4">
                  <h3 className="text-lg font-bold text-white">Resume Generation</h3>
                  <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto border border-white/5">
<pre className="whitespace-pre-wrap break-words"><code className="text-slate-300">
<span className="text-blue-400">md2pdf</span> resume.md <span className="text-cyan-400">\</span>
  <span className="text-orange-300">--output</span> resume.pdf <span className="text-cyan-400">\</span>
  <span className="text-orange-300">--margin</span> 15mm
</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Highlights Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FileCode2 className="w-5 h-5 text-purple-500" /> Rendering Pipeline
                </h2>
                <div className="w-full">
                  <SystemArchitectureVisual 
                    architectureType="md2pdf" 
                    title=""
                    description=""
                  />
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-4">
                <h3 className="text-lg font-bold text-slate-100">Key Features</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Native KaTeX Offline Math (mhchem)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Mermaid & Architecture Diagrams
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Obsidian callouts, wiki-links, tags, embeds, highlights
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Batch processing with single Chromium instance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Config file support (md2pdf.config.ts/json/yaml)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> md2pdf doctor & init diagnostic tooling
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> GFM tables, strikethrough, task lists, footnotes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Table of Contents with depth control
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Custom headers/footers with dynamic page numbers
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> --json-errors & Structured error codes for CI
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> JavaScript & TypeScript API
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Professional Typography & Syntax highlighting (Shiki)
                  </li>
                </ul>
              </div>
            </section>

            {/* CLI Usage Section */}
            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-green-500" /> CLI Usage
                </h2>
                <p className="text-slate-400 text-sm max-w-3xl">
                  Quick and powerful commands to generate PDFs directly from your terminal.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-1"># Generate a PDF from a single Markdown file:</p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">README.md</span></p>
                </div>
                
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-1"># Specify a custom output path and generate a Table of Contents:</p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">input.md</span> <span className="text-cyan-400">--output</span> <span className="text-slate-300">custom.pdf</span> <span className="text-cyan-400">--toc</span></p>
                </div>
                
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-1"># Convert with custom paper size and margins:</p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">input.md</span> <span className="text-cyan-400">--paper</span> <span className="text-orange-300">Letter</span> <span className="text-cyan-400">--margin</span> <span className="text-orange-300">15mm</span></p>
                </div>
                
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-1"># Force a page break before every H1 heading:</p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">input.md</span> <span className="text-cyan-400">--h1-new-page</span></p>
                </div>
                
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-1"># Batch mode:</p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">&quot;docs/*.md&quot;</span> <span className="text-cyan-400">--output</span> <span className="text-slate-300">out_dir/</span></p>
                </div>
                
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-1"># With config file:</p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">input.md</span> <span className="text-cyan-400">--config</span> <span className="text-slate-300">md2pdf.config.json</span></p>
                </div>
                
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-1"># Obsidian vault:</p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">note.md</span> <span className="text-cyan-400">--vault-root</span> <span className="text-slate-300">./vault</span> <span className="text-cyan-400">--resolve-links</span></p>
                </div>
                
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-1"># Machine-readable errors (CI):</p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">input.md</span> <span className="text-cyan-400">--json-errors</span></p>
                </div>
                
                <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p className="text-slate-500 mb-1"># Verbose output:</p>
                  <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">input.md</span> <span className="text-cyan-400">--verbose</span></p>
                </div>
              </div>
            </section>

            {/* Rendered Output Placeholder */}
            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-500" /> Rendered Output
                </h2>
                <p className="text-slate-400 text-sm max-w-3xl">
                  Side-by-side comparison showcasing typography, syntax highlighting, and layout accuracy.
                </p>
              </div>
              <div className="w-full h-[400px] rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-center p-6 gap-6 group">
                
                {/* Markdown Input Mockup */}
                <div className="flex-1 w-full h-full rounded-lg bg-[#1e1e1e] border border-white/10 overflow-hidden flex flex-col shadow-2xl">
                  <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
                    </div>
                    <span className="ml-4 text-xs font-mono text-slate-400">document.md</span>
                  </div>
                  <div className="p-6 font-mono text-[13px] leading-relaxed text-slate-300 overflow-y-auto">
                    <span className="text-blue-400"># System Architecture</span><br/><br/>
                    The <span className="text-orange-300">**md2pdf**</span> engine supports native mathematics & diagrams.<br/><br/>
                    <span className="text-slate-500">```mermaid</span><br/>
                    <span className="text-purple-400">graph</span> <span className="text-yellow-300">TD</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">AST</span> <span className="text-purple-400">--&gt;</span> <span className="text-green-300">Playwright</span><br/>
                    <span className="text-slate-500">```</span><br/><br/>
                    <span className="text-blue-400">## Equation</span><br/><br/>
                    <span className="text-slate-500">$$</span><br/>
                    <span className="text-yellow-300">E</span> <span className="text-cyan-400">=</span> <span className="text-purple-400">mc^2</span><br/>
                    <span className="text-slate-500">$$</span>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <ArrowLeft className="w-5 h-5 rotate-180 text-primary" />
                  </div>
                </div>

                {/* PDF Output Mockup */}
                <div className="flex-1 w-full h-full rounded-lg bg-[#e5e7eb] border border-white/10 overflow-hidden flex flex-col shadow-2xl items-center justify-center p-4">
                  <div className="w-full h-full max-w-[95%] bg-white shadow-md rounded-[2px] overflow-hidden flex flex-col">
                    {/* PDF Viewer toolbar mock */}
                    <div className="flex items-center justify-between px-3 py-2 bg-[#f3f4f6] border-b border-[#d1d5db]">
                      <span className="text-[10px] font-sans text-slate-600 font-semibold">document.pdf</span>
                      <div className="flex gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-sm bg-slate-300"></div>
                        <div className="w-3.5 h-3.5 rounded-sm bg-slate-300"></div>
                      </div>
                    </div>
                    
                    {/* PDF Page content */}
                    <div className="p-6 md:p-8 text-black bg-white flex-1 font-sans text-[12px] leading-relaxed overflow-y-auto">
                      <h1 className="text-xl md:text-2xl font-bold border-b border-slate-200 pb-1.5 mb-3">System Architecture</h1>
                      <p className="mb-4 text-slate-700">
                        The <strong>md2pdf</strong> engine supports native mathematics & diagrams.
                      </p>
                      
                      <div className="bg-white border border-[#d0d7de] rounded p-2 mb-4 flex justify-center shadow-sm">
                         <div className="flex flex-col items-center gap-1.5 py-1">
                           <div className="border border-slate-400 rounded px-3 py-1 text-[10px] bg-slate-50 text-slate-800">AST</div>
                           <div className="h-4 w-px bg-slate-400 relative"><div className="absolute -bottom-1 -left-1 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-400"></div></div>
                           <div className="border border-slate-400 rounded px-3 py-1 text-[10px] bg-slate-50 text-slate-800">Playwright</div>
                         </div>
                      </div>
                      
                      <h2 className="text-base md:text-lg font-semibold mb-2">Equation</h2>
                      <div className="flex justify-center my-3 font-serif text-[16px] italic text-slate-900">
                         E = mc²
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Diagnostics & API Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-yellow-500" /> Diagnostics & Setup
                  </h2>
                  <p className="text-slate-400 text-sm max-w-xl">
                    Built-in tools to ensure your rendering environment is perfectly configured.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                    <p className="text-slate-500 mb-2"># Initialize a new environment and download dependencies automatically:</p>
                    <p><span className="text-blue-400">md2pdf</span> <span className="text-green-400">init</span></p>
                  </div>
                  <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                    <p className="text-slate-500 mb-2"># Check your system health and Playwright pipeline status:</p>
                    <p><span className="text-blue-400">md2pdf</span> <span className="text-green-400">doctor</span></p>
                  </div>
                  <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                    <p className="text-slate-500 mb-2"># Print advanced internal variables and stack traces if an error occurs:</p>
                    <p><span className="text-blue-400">md2pdf</span> <span className="text-slate-300">input.md</span> <span className="text-cyan-400">--debug</span></p>
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-sm text-blue-200/80">
                  <strong className="text-blue-400 font-semibold">Note:</strong> Typography uses Inter and JetBrains Mono served from Google Fonts CDN. Internet access is required during conversion for correct typography. Offline environments will fall back to system fonts.
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FileCode2 className="w-5 h-5 text-purple-500" /> Library Usage
                  </h2>
                  <p className="text-slate-400 text-sm max-w-xl">
                    Embed the rendering engine directly in your Node.js applications.
                  </p>
                </div>
                <div className="bg-slate-950/80 border border-white/10 p-5 rounded-xl font-mono text-[13px] shadow-xl overflow-x-auto">
                  <p><span className="text-purple-400">import</span> {'{'} <span className="text-cyan-300">convert</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@amitdevx/md2pdf'</span>;</p>
                  <br/>
                  <p><span className="text-purple-400">const</span> <span className="text-slate-300">result</span> <span className="text-cyan-400">= await</span> <span className="text-blue-300">convert</span>({'{'}</p>
                  <p className="pl-4"><span className="text-slate-400">input:</span> <span className="text-green-300">'README.md'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">output:</span> <span className="text-green-300">'README.pdf'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">paper:</span> <span className="text-green-300">'A4'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">margin:</span> <span className="text-green-300">'20mm'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">toc:</span> <span className="text-orange-400">true</span></p>
                  <p>{'}'});</p>
                  <br/>
                  <p><span className="text-slate-300">console</span>.<span className="text-blue-300">log</span>(<span className="text-green-300">`Render time: </span><span className="text-cyan-400">${'{'}</span><span className="text-slate-300">result.renderTimeMs</span><span className="text-cyan-400">{'}'}</span><span className="text-green-300">ms`</span>);</p>
                </div>
                <div className="mt-4 bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden text-sm overflow-x-auto shadow-xl">
                  <table className="w-full text-left border-collapse min-w-[400px]">
                    <thead className="bg-slate-800/50 text-slate-300 text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-3 font-medium border-b border-white/5">Option</th>
                        <th className="px-4 py-3 font-medium border-b border-white/5">Type</th>
                        <th className="px-4 py-3 font-medium border-b border-white/5">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-400 divide-y divide-white/5">
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-2.5 text-blue-300 font-mono text-[12px]">math</td>
                        <td className="px-4 py-2.5 font-mono text-[12px] text-orange-300">boolean</td>
                        <td className="px-4 py-2.5 text-[13px]">Enable KaTeX/mhchem rendering</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-2.5 text-blue-300 font-mono text-[12px]">theme</td>
                        <td className="px-4 py-2.5 font-mono text-[12px] text-orange-300">string</td>
                        <td className="px-4 py-2.5 text-[13px]">Custom CSS theme path</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-2.5 text-blue-300 font-mono text-[12px]">mermaid.theme</td>
                        <td className="px-4 py-2.5 font-mono text-[12px] text-orange-300">string</td>
                        <td className="px-4 py-2.5 text-[13px]">default, dark, forest, neutral</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-2.5 text-blue-300 font-mono text-[12px]">pageBreaks</td>
                        <td className="px-4 py-2.5 font-mono text-[12px] text-orange-300">boolean</td>
                        <td className="px-4 py-2.5 text-[13px]">Force page breaks on headers</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-2.5 text-blue-300 font-mono text-[12px]">metadata</td>
                        <td className="px-4 py-2.5 font-mono text-[12px] text-orange-300">object</td>
                        <td className="px-4 py-2.5 text-[13px]">PDF Author, Title, Keywords</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02]">
                        <td className="px-4 py-2.5 text-blue-300 font-mono text-[12px]">header / footer</td>
                        <td className="px-4 py-2.5 font-mono text-[12px] text-orange-300">string</td>
                        <td className="px-4 py-2.5 text-[13px]">Custom HTML templates</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Release Timeline & Engineering Focus */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Network className="w-5 h-5 text-blue-400" /> Release Timeline
                </h2>
                <div className="space-y-4">
                  <div className="h-[280px] overflow-y-auto pr-4 pl-4 -ml-4 custom-scrollbar">
                    <div className="relative pl-6 border-l border-white/10 space-y-6 py-2">
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        <p className="text-sm font-bold text-primary">v0.5.4 (Current)</p>
                        <p className="text-xs text-slate-400 mt-1">5x performance boost via persistent Chromium daemon, offline bundled fonts, package size reduced 80%</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.5.3</p>
                        <p className="text-xs text-slate-500 mt-1">Flawless Mermaid v10.9.1 parity, AST regex preprocessing, output overwrite protection</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.5.2</p>
                        <p className="text-xs text-slate-500 mt-1">Mermaid syntax tolerance, unescaped quotes, repaired mindmaps</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.5.1</p>
                        <p className="text-xs text-slate-500 mt-1">JSON CLI output routing, circular embed strict depth, AST regex masking, SVG viewBox scaling</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.5.0</p>
                        <p className="text-xs text-slate-500 mt-1">Batch processing globs, config files (ts/json/yaml), programmatic defineConfig API</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.4.2</p>
                        <p className="text-xs text-slate-500 mt-1">5MB size limit validation, publish-gpr CI pipeline, unsupported flag handlers</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.4.1</p>
                        <p className="text-xs text-slate-500 mt-1">Native Obsidian highlight syntax, root user sandboxing detection, KaTeX parsing fixes</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.4.0</p>
                        <p className="text-xs text-slate-500 mt-1">Obsidian callouts, wiki-links, tags, 3-stage browser fallback, zero-script npm compliance</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.3.0</p>
                        <p className="text-xs text-slate-500 mt-1">Native KaTeX rendering, mhchem chemistry, base64 offline fonts</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.2.4</p>
                        <p className="text-xs text-slate-500 mt-1">Critical security patches (XSS/SSRF), V8 OOM memory DoS protection</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.2.2</p>
                        <p className="text-xs text-slate-500 mt-1">Strict theme validation & JSON error handling</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.2.1</p>
                        <p className="text-xs text-slate-500 mt-1">Mermaid dynamic sizing & batched rendering</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.2.0</p>
                        <p className="text-xs text-slate-500 mt-1">Mermaid pipelines & Doctor CLI diagnostics</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.1.6</p>
                        <p className="text-xs text-slate-500 mt-1">Strict input validation & CI stability</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.1.5</p>
                        <p className="text-xs text-slate-500 mt-1">Friendly CLI Error UX & Footnotes restyling</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.1.4</p>
                        <p className="text-xs text-slate-500 mt-1">Auto-installer for Chromium binaries</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.1.3</p>
                        <p className="text-xs text-slate-500 mt-1">Running headers, footers & auto-pagination</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.1.2</p>
                        <p className="text-xs text-slate-500 mt-1">TOC generation & PDF metadata injection</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.1.0</p>
                        <p className="text-xs text-slate-500 mt-1">Core Playwright AST rendering engine</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.0.2</p>
                        <p className="text-xs text-slate-500 mt-1">Refined npm workflows & CI/CD</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                        <p className="text-sm font-bold text-slate-300">v0.0.1</p>
                        <p className="text-xs text-slate-500 mt-1">Initial public release</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-400" /> Engineering Focus
                </h2>
                <p className="text-sm text-slate-400 mb-4">
                  The project demonstrates building and maintaining a production-quality open-source developer tool with emphasis on:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> API Design</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> CLI UX</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Regression Testing</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Rendering Accuracy</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Type Safety</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Documentation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> OSS Maintenance</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Semantic Versioning</div>
                </div>
              </div>
            </section>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
