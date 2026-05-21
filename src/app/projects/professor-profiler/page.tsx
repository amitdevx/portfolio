import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Network, Bot, FileText, BrainCircuit, Terminal, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SystemArchitectureVisual } from '@/components/projects/SystemArchitectureVisual';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ProfessorProfilerCaseStudy() {
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
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Multi-Agent Systems</Badge>
          <Badge variant="outline">LLM Orchestration</Badge>
          <Badge variant="outline" className="border-orange-500/20 text-orange-400">Advanced AI</Badge>
        </div>
        
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          Professor Profiler
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">
          An advanced Hierarchical Multi-Agent System (HMAS) that analyzes exam papers and curriculum files to reverse-engineer topic weights and cognitive complexity distributions.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-500 text-white">
            <Link href="https://deepwiki.com/amitdevx/Professor_Profiler" target="_blank" rel="noopener noreferrer">
              Read DeepWiki Docs
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5">
            <Link href="https://github.com/amitdevx/Professor_Profiler" target="_blank" rel="noopener noreferrer">
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
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Architecture</h4>
          <p className="text-3xl font-bold text-purple-400 flex items-center gap-2">
            <Network className="w-6 h-6 text-purple-400" /> HMAS
          </p>
          <p className="text-xs text-muted-foreground">Hub-and-Spoke Pattern</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Agent Workers</h4>
          <p className="text-3xl font-bold text-cyan-400 flex items-center gap-2">
            <Bot className="w-6 h-6 text-cyan-400" /> 3 + Hub
          </p>
          <p className="text-xs text-muted-foreground">Coordinated Personas</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-red-400/90 uppercase tracking-wider">PDF Parser</h4>
          <p className="text-3xl font-bold text-red-500 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-500" /> PyPDF
          </p>
          <p className="text-xs text-red-400/70">Formula Token Extractor</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Methodology</h4>
          <p className="text-3xl font-bold text-white flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-emerald-500" /> Bloom's
          </p>
          <p className="text-xs text-muted-foreground">Cognitive Taxonomy</p>
        </div>
      </div>

      <div className="space-y-16">
        {/* Core Design & Problem Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-500" /> The Problem & Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Students preparing for highly competitive academic exams are often overwhelmed. They waste time studying minor topics while missing high-frequency, complex question patterns. Traditional study guides are static and fail to capture the teacher&apos;s cognitive testing habits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Professor Profiler</strong> acts as a cognitive academic coach. It ingests exam history PDFs, extracts math and scientific formula text, and feeds this structured data into a hierarchical multi-agent framework. Specialized sub-agents analyze the exam across Bloom&apos;s Taxonomy, map topic frequencies, and generate study strategies.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Key Features</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> Dynamic Directed Acyclic Graph (DAG) Agent Flow
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> Automated PDF Question Extraction & Page Indexing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> Math Formula Token Preservation Checks
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> Persistence via Local JSON Memory Banks
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> Matplotlib Trend Visualizations (Bar & Pie Charts)
              </li>
            </ul>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-500" /> Hierarchical Multi-Agent Graph
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl">
              Exam data is processed sequentially by specialized agents. A central Root Orchestrator distributes tasks and synchronizes results using a shared JSON memory bank.
            </p>
          </div>
          <SystemArchitectureVisual 
            architectureType="professor-profiler" 
            title="HMAS Agent Orchestration Flow"
            description="Llama-3.3-70B and Gemini models coordinate to analyze questions, compute distributions, and build target recommendations."
          />
        </section>

        {/* Agent Personas Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Agent Persona Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">1</div>
              <h3 className="text-base font-bold text-white">The Taxonomist</h3>
              <p className="text-xs text-purple-400 font-semibold">Model: Gemini 2.0 Flash</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Processes each extracted question card. Tags the specific topic and classifies the cognitive category (Remember, Understand, Apply, Analyze, Evaluate, Create).
              </p>
            </div>
            <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">2</div>
              <h3 className="text-base font-bold text-white">The Trend Spotter</h3>
              <p className="text-xs text-purple-400 font-semibold">Model: Llama 3.3 70B</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Applies the Stats Engine. Inspects historical frequency, flags statistical outliers, and isolates cognitive complexity weight spikes.
              </p>
            </div>
            <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 font-bold">3</div>
              <h3 className="text-base font-bold text-white">The Strategist</h3>
              <p className="text-xs text-purple-400 font-semibold">Model: Llama 3.3 70B</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Translates analytics into actionable study guides. Compiles a high-impact Hit List, Safe Zone topics, and Drop Zone topics to optimize student preparation.
              </p>
            </div>
          </div>
        </section>

        {/* Systems Engineering Bento Grid Dashboard */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-500" /> HMAS Agent Control Panel
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Visualizing the multi-agent task traces, global JSON context variables, and repository blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* COLUMN 1: Live Terminal Log & HMAS Specs (Spans 2 cols) */}
            <div className="md:col-span-2 space-y-6">
              {/* Widget 1: HMAS Orchestration console */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">hmas-coordinator-node</span>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed text-emerald-400 space-y-1.5 overflow-x-auto max-h-72">
                  <p className="text-slate-500"># Starting HMAS Runner (Root Orchestrator - Gemini 2.0 Pro)...</p>
                  <p className="text-cyan-400">[PARSER] Reading &apos;exam_fall_2025.pdf&apos; using pypdf</p>
                  <p className="text-white">[PARSER] Ingestion verified: 12 pages, 24 questions, math token parser checked (OK)</p>
                  <p className="text-purple-400">[HMAS] Spawning sub-agent: TAXONOMIST (Gemini 2.0 Flash)...</p>
                  <p className="text-white">[TAXONOMIST] Classifying cognitive levels. Tagged 15 &apos;Apply&apos; nodes and 9 &apos;Remember&apos; nodes.</p>
                  <p className="text-purple-400">[HMAS] Spawning sub-agent: TREND_SPOTTER (Llama 3.3 70B)...</p>
                  <p className="text-white">[TREND_SPOTTER] Calculating standard deviation and outlier weights for Calculus & Linear Algebra.</p>
                  <p className="text-purple-400">[HMAS] Spawning sub-agent: STRATEGIST (Llama 3.3 70B)...</p>
                  <p className="text-white">[STRATEGIST] Mapping difficulty vectors. Compiled 5 Hit List topics.</p>
                  <p className="text-cyan-400">[MEMORY] Syncing shared JSON state variables. Cache database backup updated.</p>
                  <p className="text-green-400">[SUCCESS] Run completed. Output dashboard compiled: trends_chart.png generated.</p>
                </div>
              </div>

              {/* Widget 2: HMAS Memory Bank State (JSON) */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Shared HMAS Memory State</span>
                  <span className="text-[10px] font-mono text-amber-500 font-semibold">Sync JSON</span>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed text-amber-300 overflow-x-auto">
                  <pre>{`{
  "session_id": "hmas_exam_2025_fall",
  "files_ingested": ["exam_fall_2025.pdf"],
  "taxonomy_results": [
    { "question_id": 1, "topic": "Eigenvalues", "bloom_level": "Apply" }
  ],
  "statistics_trends": {
    "total_questions": 24,
    "top_topic": "Linear Algebra",
    "cognitive_distribution": { "lower_order": 9, "higher_order": 15 }
  },
  "strategist_guide": {
    "hit_list": ["Matrix Orthogonalization", "Integration by Parts"],
    "safe_zones": ["Vector Spaces"]
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
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[10px]">State Banking</Badge>
                  <h3 className="text-sm font-bold text-white">JSON Memory System</h3>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    Executing multiple agents simultaneously runs the risk of losing state variables or inflating costs. A centralized JSON memory system tracks sub-agent outputs, enabling error recovery and rerun capability without losing progress.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-[10px]">Benchmarking</Badge>
                  <h3 className="text-sm font-bold text-white">Gemini vs NIM Runner</h3>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    To maintain speed under load, I built a benchmark suite verifying request latencies. The coordinator defaults to NVIDIA NIM models, falling back dynamically to Google Gemini upon encountering rate limits.
                  </p>
                </div>
              </div>

              {/* Widget 4: Directory Map */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <span className="text-[10px] font-mono text-slate-400">Codebase Blueprint</span>
                  <span className="text-[9px] font-mono text-slate-500">Professor_Profiler/</span>
                </div>
                <div className="p-4 font-mono text-[10px] leading-normal text-slate-400 space-y-1">
                  <p>├── <span className="text-cyan-400">google/adk/</span> <span className="text-slate-600"># Orchestrator core</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-yellow-400">agents/</span> <span className="text-slate-600"># Prompt layouts</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-yellow-400">clients/</span> <span className="text-slate-600"># NIM wraps</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-yellow-400">runners/</span> <span className="text-slate-600"># State Sync</span></p>
                  <p>├── <span className="text-cyan-400">profiler_agent/</span> <span className="text-slate-600"># Custom Personas</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-yellow-400">sub_agents/</span> <span className="text-slate-600"># Specialized</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-yellow-400">tools.py</span> <span className="text-slate-600"># Matplotlib stats</span></p>
                  <p>└── <span className="text-emerald-400">run.py</span> <span className="text-slate-600"># CLI Entrypoint</span></p>
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