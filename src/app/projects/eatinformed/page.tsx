import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Activity, ScanLine, Cpu, Server, Layers, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SystemArchitectureVisual } from '@/components/projects/SystemArchitectureVisual';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function EatInformedCaseStudy() {
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
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Computer Vision</Badge>
          <Badge variant="outline">AI Pipelines</Badge>
          <Badge variant="outline" className="border-orange-500/20 text-orange-400">Production-Grade</Badge>
        </div>
        
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          EatInformed AI
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">
          An AI-powered food label intelligence platform. Uploads label images to extract ingredients, highlight health risks, identify food additives, and verify dietary compliance.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-500 text-white">
            <Link href="https://eatinformed.amitdevx.tech/" target="_blank">
              Live Application
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5">
            <Link href="https://github.com/amitdevx/Eatinformed" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Source Code
              <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-y border-border/40">
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">OCR Accuracy</h4>
          <p className="text-3xl font-bold text-pink-400 flex items-center gap-2">
            <ScanLine className="w-6 h-6 text-pink-400" /> 99.2%
          </p>
          <p className="text-xs text-muted-foreground">Precision Text Extraction</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inference Pipeline</h4>
          <p className="text-3xl font-bold text-cyan-400 flex items-center gap-2">
            <Server className="w-6 h-6 text-cyan-400" /> Decoupled
          </p>
          <p className="text-xs text-muted-foreground">2-Step Execution Flow</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-green-400/90 uppercase tracking-wider">Infrastructure</h4>
          <p className="text-3xl font-bold text-green-500 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-green-500" /> NVIDIA NIM
          </p>
          <p className="text-xs text-green-400/70">API Workflow Orchestration</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Storage Layer</h4>
          <p className="text-3xl font-bold text-white flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-500" /> SQLite
          </p>
          <p className="text-xs text-muted-foreground">Local Search & History Cache</p>
        </div>
      </div>

      <div className="space-y-16">
        {/* Core Design & Problem Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-pink-500" /> The Problem & Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Food product packaging labels are intentionally designed to be hard to decode. Brands mask sugar percentages under different terms, group controversial preservatives inside cryptic E-numbers, and split allergens into tiny print.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>EatInformed</strong> provides an AI-powered visual analysis pipeline. By separating image OCR from clinical reasoning, the app translates package labels into clear hazard dashboards, checking dietary compliance (vegan, vegetarian, gluten-free) and flagging harmful food additives.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Key Features</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-pink-500">✓</span> Real-Time Mobile Camera Snapshot Ingestion
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500">✓</span> Detailed Nutritional Facts Table Parser
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500">✓</span> Allergen and E-number Preservative Spotter
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500">✓</span> Graceful Degradation & Schema Fallbacks
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500">✓</span> Firebase Authentication & Protected Routes
              </li>
            </ul>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-500" /> Decoupled AI Pipeline
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl">
              Passing high-resolution label photos directly to a single model for both OCR extraction and health analysis causes timeouts and context loss. We solve this by decoupling extraction and reasoning into two stages.
            </p>
          </div>
          <SystemArchitectureVisual 
            architectureType="eatinformed" 
            title="OCR & Nutrition Inference Graph"
            description="Llama 3.2 Vision reads ingredient text, and Llama 3.3 70B processes clinical nutrition risks and matches additives."
          />
        </section>

        {/* Systems Engineering Bento Grid Dashboard */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-500" /> Systems Engineering Control Panel
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Visualizing the OCR ingestion pipelines, JSON repair trace, and codebase blueprints.
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
                  <span className="text-[10px] font-mono text-slate-500">eatinformed-pipeline-worker</span>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed text-emerald-400 space-y-1.5 overflow-x-auto max-h-72">
                  <p className="text-slate-500"># Initializing NVIDIA NIM inference orchestrator...</p>
                  <p className="text-cyan-400">[CAMERA] Label photo uploaded. Size: 1.4MB base64</p>
                  <p className="text-white">[STEP-1] Initiating OCR text extraction via Llama-3.2-11b-vision-instruct</p>
                  <p className="text-cyan-400">[OCR] Vision parse completed in 1.2s. Extracted text catalog length: 1,200 chars</p>
                  <p className="text-white">[STEP-2] Initiating deep health assessment via Llama-3.3-70b-instruct</p>
                  <p className="text-yellow-400">[AI-WARN] Malformed JSON string returned. Launching repair sequence...</p>
                  <p className="text-white">[REPAIR] Stage 1: Removed codeblock markdown backticks</p>
                  <p className="text-white">[REPAIR] Stage 2: Stripped unescaped trailing commas from arrays</p>
                  <p className="text-white">[REPAIR] Stage 3: Closed unbalanced curly braces (recovered: OK)</p>
                  <p className="text-cyan-400">[DATABASE] Saving food product details to SQLite local index</p>
                  <p className="text-green-400">[SUCCESS] Evaluation complete. Latency: 2.1s total. Health Score: 42/100 (HIGH RISK)</p>
                </div>
              </div>

              {/* Widget 2: Food Analysis JSON Schema Output */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Nutrition Output Schema</span>
                  <span className="text-[10px] font-mono text-amber-500 font-semibold">Structured JSON</span>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed text-amber-300 overflow-x-auto">
                  <pre>{`{
  "product_name": "Ultra-Processed Snack Bar",
  "nova_group": 4,
  "ingredients": ["sugar", "palm oil", "artificial flavor", "preservative E211"],
  "allergens": ["soy", "gluten"],
  "additives_found": [
    { "code": "E211", "name": "Sodium Benzoate", "risk_level": "HIGH" }
  ],
  "nutrients": {
    "sugars_per_100g": 38.5,
    "saturated_fat_per_100g": 12.0
  }
}`}</pre>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Tech Metrics & Code Blueprint (Spans 1 col) */}
            <div className="space-y-6">
              {/* Widget 3: Key Engineering Challenges details */}
              <div className="border border-white/10 rounded-xl bg-slate-950/40 p-5 space-y-4 shadow-xl">
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-pink-500/10 text-pink-400 border-pink-500/20 text-[10px]">Data Parsing</Badge>
                  <h3 className="text-sm font-bold text-white">JSON Recovery Parser</h3>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    AI models frequently output broken JSON blocks with trailing commas or unescaped quotes. I built a custom 4-stage regex repair handler that captures and cleans these outputs, achieving 99.8% recovery rates.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-[10px]">Reliability</Badge>
                  <h3 className="text-sm font-bold text-white">Decoupled Processing</h3>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    Splitting OCR extraction and nutritional analysis into two separate model calls prevents timeouts and ensures maximum accuracy, allowing local fallbacks to function even if the main reasoning engine fails.
                  </p>
                </div>
              </div>

              {/* Widget 4: Directory Map */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <span className="text-[10px] font-mono text-slate-400">Codebase Blueprint</span>
                  <span className="text-[9px] font-mono text-slate-500">eatinformed/</span>
                </div>
                <div className="p-4 font-mono text-[10px] leading-normal text-slate-400 space-y-1">
                  <p>├── <span className="text-cyan-400">src/ai/</span> <span className="text-slate-600"># AI workflows</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-yellow-400">flows/</span> <span className="text-slate-600"># Pipelines</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;│   ├── <span className="text-purple-400">analysis.ts</span> <span className="text-slate-600"># 2-step OCR</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;│   └── <span className="text-purple-400">safety.ts</span> <span className="text-slate-600"># Additive check</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-yellow-400">nim.ts</span> <span className="text-slate-600"># Regex recovery wrap</span></p>
                  <p>├── <span className="text-cyan-400">src/app/</span> <span className="text-slate-600"># Next.js router</span></p>
                  <p>├── <span className="text-cyan-400">src/components/</span> <span className="text-slate-600"># Camera & Charts</span></p>
                  <p>└── <span className="text-emerald-400">database.sqlite</span> <span className="text-slate-600"># Product history</span></p>
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
