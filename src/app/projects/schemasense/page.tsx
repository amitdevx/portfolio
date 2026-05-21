import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Database, Zap, Shield, GitBranch, Cpu, Terminal, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SystemArchitectureVisual } from '@/components/projects/SystemArchitectureVisual';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function SchemaSenseCaseStudy() {
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
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Database Intelligence</Badge>
          <Badge variant="outline">AI Engineering</Badge>
          <Badge variant="outline" className="border-cyan-500/20 text-cyan-400">Production-Grade</Badge>
        </div>
        
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          SchemaSense AI
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">
          An enterprise database intelligence platform that connects dynamically to PostgreSQL, runs data quality analytics, and auto-generates interactive schema documentation via DeepSeek-V3.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white">
            <Link href="https://schemasense.amitdevx.tech" target="_blank">
              Live Application
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5">
            <Link href="https://github.com/amitdevx/schemasense" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Source Code
              <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Production Metrics & KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-y border-border/40">
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Performance</h4>
          <p className="text-3xl font-bold text-cyan-400 flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" /> &lt; 50ms
          </p>
          <p className="text-xs text-muted-foreground">Cache Hit Latency</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cost Efficiency</h4>
          <p className="text-3xl font-bold text-purple-400 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-purple-400" /> 95%
          </p>
          <p className="text-xs text-muted-foreground">Reduction in LLM Tokens</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Security Layer</h4>
          <p className="text-3xl font-bold text-emerald-400 flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-400" /> Active
          </p>
          <p className="text-xs text-muted-foreground">Prompt Injection Gate</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Availability</h4>
          <p className="text-3xl font-bold text-white flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-500" /> 99.9%
          </p>
          <p className="text-xs text-muted-foreground">Async Pool Health</p>
        </div>
      </div>

      <div className="space-y-16">
        {/* Core Design & Problem Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-500" /> The Problem
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Database schemas evolve rapidly, but documentation almost never keeps up. Engineering teams are forced to decipher undocumented tables, decipher implicit foreign key relationships from legacy source code, and lose countless hours due to tribal knowledge. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>SchemaSense AI</strong> resolves this by establishing direct metadata introspection. The backend reads the PostgreSQL catalog table definitions, analyzes statistics, runs structural data quality checks, and leverages large language models (DeepSeek-V3 via OpenRouter) to compile interactive, human-readable documentation and automated Entity-Relationship graphs.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Key Features</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">✓</span> DB Connection Management (PostgreSQL)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">✓</span> Automated Schema Introspection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">✓</span> Multi-column Data Quality Scoring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">✓</span> SQLite-cached AI Table Descriptions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">✓</span> Markdown, PDF, and JSON Document Exports
              </li>
            </ul>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-purple-500" /> System Architecture
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl">
              An interactive, vector-sharp trace of how database metadata is ingested, cached, validated, and streamed back to the client interface. The flowchart updates state dynamically to follow the request lifecycle.
            </p>
          </div>
          <SystemArchitectureVisual 
            architectureType="schemasense" 
            title="Ingestion & Processing Pipeline"
            description="Visual representation of DDL compilation, cache checking, prompt sanitization, AI reasoning, and real-time streaming."
          />
        </section>

        {/* Systems Engineering Bento Grid Dashboard */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-500" /> Systems Engineering Control Panel
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Technical telemetry and interface specifications detailing caching layers, validation checks, and repository files.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* COLUMN 1: Live Terminal Log & API Specs (Spans 2 cols) */}
            <div className="md:col-span-2 space-y-6">
              {/* Widget 1: Server Console logs */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">schemasense-backend-worker</span>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed text-emerald-400 space-y-1.5 overflow-x-auto max-h-72">
                  <p className="text-slate-500"># Launching schema ingestion server on port 8000...</p>
                  <p className="text-cyan-400">[INFO] Initializing database connection pool (asyncpg)</p>
                  <p className="text-white">[DB] Connected to PostgreSQL at pg.production.db.local:5432</p>
                  <p className="text-white">[DB] Active Pool Size: 10 connections</p>
                  <p className="text-cyan-400">[INFO] WAL SQLite Cache initialized at /backend/cache_db.sqlite</p>
                  <p className="text-purple-400">[REQUEST] POST /api/v1/tables/describe (127.0.0.1)</p>
                  <p className="text-white">[CACHE] Table &apos;users&apos; DDL structure SHA-256 computed: 7e8b9a1c...</p>
                  <p className="text-yellow-400">[CACHE-HIT] Hash matched local store. Skipping LLM lookup.</p>
                  <p className="text-green-400">[SUCCESS] Response compiled. Cache hit duration: 12.8ms. Saved 8,500 prompt tokens.</p>
                  <p className="text-purple-400">[REQUEST] POST /api/v1/tables/describe (127.0.0.1)</p>
                  <p className="text-white">[CACHE] Table &apos;transactions&apos; DDL structure SHA-256 computed: 8b3c9f2a...</p>
                  <p className="text-red-400">[CACHE-MISS] Hash not found. Forwarding query to DeepSeek-V3 via OpenRouter.</p>
                  <p className="text-blue-400">[AI-STREAM] SSE streaming connection established. Emitting blocks...</p>
                </div>
              </div>

              {/* Widget 2: Database Schema Hash Payload */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Payload Interface Spec</span>
                  <span className="text-[10px] font-mono text-amber-500 font-semibold">JSON Structure</span>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed text-amber-300 overflow-x-auto">
                  <pre>{`{
  "database_hash": "d3f45a7b1c...",
  "table_name": "billing_transactions",
  "columns": [
    { "name": "id", "type": "UUID", "constraints": ["PRIMARY KEY"] },
    { "name": "user_id", "type": "UUID", "constraints": ["FOREIGN KEY references users(id)"] },
    { "name": "amount", "type": "NUMERIC(12,2)", "constraints": ["NOT NULL"] },
    { "name": "status", "type": "VARCHAR(30)", "constraints": ["DEFAULT 'pending'"] }
  ],
  "cache_check": true,
  "bypass_sanitizer": false
}`}</pre>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Tech Metrics & Code Blueprint (Spans 1 col) */}
            <div className="space-y-6">
              {/* Widget 3: Key Engineering Challenges details */}
              <div className="border border-white/10 rounded-xl bg-slate-950/40 p-5 space-y-4 shadow-xl">
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-[10px]">Challenge 1</Badge>
                  <h3 className="text-sm font-bold text-white">SHA-256 Schema Caching</h3>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    Analyzing 100+ database tables creates huge API bills. Computing a SHA-256 hash of table columns and checking SQLite saves 95% in token costs, rendering updates in under 50ms.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <Badge variant="outline" className="bg-pink-500/10 text-pink-400 border-pink-500/20 text-[10px]">Challenge 2</Badge>
                  <h3 className="text-sm font-bold text-white">Injection Defense</h3>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    Dynamic schema querying poses security issues. The app runs a sanitization gateway that strips SQL commands and rejects non-JSON queries before they reach the LLM.
                  </p>
                </div>
              </div>

              {/* Widget 4: Directory Map */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <span className="text-[10px] font-mono text-slate-400">Codebase Blueprint</span>
                  <span className="text-[9px] font-mono text-slate-500">schemasense/</span>
                </div>
                <div className="p-4 font-mono text-[10px] leading-normal text-slate-400 space-y-1">
                  <p>├── <span className="text-cyan-400">app/</span> <span className="text-slate-600"># Next.js Pages</span></p>
                  <p>├── <span className="text-cyan-400">components/</span> <span className="text-slate-600"># ER Visualizer</span></p>
                  <p>├── <span className="text-cyan-400">hooks/</span> <span className="text-slate-600"># API Call hooks</span></p>
                  <p>└── <span className="text-emerald-400">backend/</span> <span className="text-slate-600"># FastAPI Application</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-yellow-400">routes/</span> <span className="text-slate-600"># Endpoints</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-yellow-400">utils/</span> <span className="text-slate-600"># Core Libs</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-purple-400">database.py</span> <span className="text-slate-600"># Pools</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-purple-400">cache_db.py</span> <span className="text-slate-600"># SQLite manager</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-purple-400">deepseek.py</span> <span className="text-slate-600"># OpenRouter</span></p>
                </div>
              </div>
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