import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Download, Star, FileText, CheckCircle2, Box, Cpu, FileCode2, Terminal, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SystemArchitectureVisual } from '@/components/projects/SystemArchitectureVisual';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'md2pdf: Markdown to PDF Engine | Amit Divekar',
  description: 'Production-grade open-source Markdown to PDF rendering engine for Node.js that converts Markdown into high-fidelity PDFs using Playwright and Chromium.',
  keywords: ['md2pdf', 'markdown to pdf', 'nodejs', 'npm package', 'playwright', 'chromium', 'open source', 'amit divekar', 'unified', 'remark', 'rehype'],
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
    title: 'md2pdf: Markdown to PDF Engine | Amit Divekar',
    description: 'Production-grade open-source Markdown to PDF rendering engine for Node.js. Converts Markdown into high-fidelity PDFs.',
    siteName: 'Amit Divekar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'md2pdf: Markdown to PDF Engine | Amit Divekar',
    description: 'Production-grade open-source Markdown to PDF rendering engine for Node.js.',
    creator: '@amitdevx_',
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
              <p className="text-3xl font-bold text-white flex items-center gap-2">
                v0.1.6
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Downloads</h4>
              <p className="text-3xl font-bold text-emerald-400 flex items-center gap-2">
                <Download className="w-5 h-5 text-emerald-500" /> 1.2k/mo
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Build Status</h4>
              <p className="text-3xl font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Passing
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">License</h4>
              <p className="text-3xl font-bold text-white flex items-center gap-2">
                MIT
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Runtime</h4>
              <p className="text-3xl font-bold text-green-500 flex items-center gap-2">
                Node.js
              </p>
              <p className="text-xs text-muted-foreground">&gt;=18.0.0</p>
            </div>
          </div>

          <div className="space-y-16">
            
            {/* Installation Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" /> Installation
              </h2>
              <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl font-mono text-sm shadow-xl overflow-x-auto">
                <p><span className="text-blue-400">npm</span> <span className="text-green-400">install</span> <span className="text-orange-300">@amitdevx/md2pdf</span></p>
                <p className="text-slate-500 mt-2"># or</p>
                <p><span className="text-blue-400">pnpm</span> <span className="text-green-400">add</span> <span className="text-orange-300">@amitdevx/md2pdf</span></p>
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
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Chromium-powered rendering
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Unified AST pipeline (Remark/Rehype)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> JavaScript & TypeScript API
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Command-line interface
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Professional Typography
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Syntax highlighting (Shiki)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Headers, Footers & Page Breaks
                  </li>
                </ul>
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
                    The <span className="text-orange-300">**md2pdf**</span> engine supports full syntax highlighting.<br/><br/>
                    <span className="text-blue-400">## Code Example</span><br/><br/>
                    <span className="text-slate-500">```javascript</span><br/>
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">render</span> <span className="text-cyan-400">=</span> () <span className="text-purple-400">=&gt;</span> {'{'}<br/>
                    &nbsp;&nbsp;<span className="text-cyan-400">return</span> <span className="text-green-300">"High fidelity!"</span>;<br/>
                    {'}'};<br/>
                    <span className="text-slate-500">```</span><br/><br/>
                    <span className="text-slate-500">&gt;</span> Beautiful typography is built-in.
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
                    <div className="p-6 md:p-8 text-black bg-white flex-1 font-sans text-[12px] leading-relaxed">
                      <h1 className="text-2xl font-bold border-b border-slate-200 pb-1.5 mb-3">System Architecture</h1>
                      <p className="mb-5 text-slate-700">
                        The <strong>md2pdf</strong> engine supports full syntax highlighting.
                      </p>
                      
                      <h2 className="text-lg font-semibold mb-2.5">Code Example</h2>
                      
                      <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded p-3 mb-5 font-mono text-[11px] leading-relaxed shadow-sm">
                        <span className="text-[#cf222e]">const</span> <span className="text-[#8250df]">render</span> <span className="text-[#0550ae]">=</span> () <span className="text-[#cf222e]">=&gt;</span> {'{'}<br/>
                        &nbsp;&nbsp;<span className="text-[#cf222e]">return</span> <span className="text-[#0a3069]">"High fidelity!"</span>;<br/>
                        {'}'};
                      </div>
                      
                      <div className="border-l-4 border-slate-300 pl-3 italic text-slate-600 text-[12px]">
                        Beautiful typography is built-in.
                      </div>
                    </div>
                  </div>
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
                  <div className="relative pl-6 border-l border-white/10 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                      <p className="text-sm font-bold text-slate-300">v0.1.0</p>
                      <p className="text-xs text-slate-500 mt-1">Initial rendering engine</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                      <p className="text-sm font-bold text-slate-300">v0.1.2</p>
                      <p className="text-xs text-slate-500 mt-1">Improved document rendering</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700" />
                      <p className="text-sm font-bold text-slate-300">v0.1.4</p>
                      <p className="text-xs text-slate-500 mt-1">CLI improvements</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary" />
                      <p className="text-sm font-bold text-primary">v0.1.6 (Current)</p>
                      <p className="text-xs text-slate-400 mt-1">Stability, regression testing, rendering polish</p>
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
