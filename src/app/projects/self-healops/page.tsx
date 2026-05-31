import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Network, Activity, BrainCircuit, Terminal, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SystemArchitectureVisual } from '@/components/projects/SystemArchitectureVisual';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SelfHealOps: Autonomous AI DevOps Agent | Amit Divekar',
  description: 'A deep dive into SelfHealOps, an autonomous self-healing DevOps agent built with LangGraph, Python, and NVIDIA NIM to automatically resolve CI/CD pipeline failures.',
  alternates: {
    canonical: 'https://amitdevx.tech/projects/self-healops',
  },
};

export default function SelfHealOpsCaseStudy() {
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
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">AIOps</Badge>
          <Badge variant="outline">LangGraph</Badge>
          <Badge variant="outline" className="border-orange-500/20 text-orange-400">DevOps</Badge>
        </div>
        
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          SelfHealOps
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">
          An autonomous, self-healing DevOps agent designed to automatically classify, analyze, and remediate CI/CD pipeline failures and infrastructure issues using a hierarchical multi-agent system.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-500 text-white">
            <Link href="https://deepwiki.com/amitdevx/self-healops" target="_blank" rel="noopener noreferrer">
              Read DeepWiki Docs
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5">
            <Link href="https://github.com/amitdevx/self-healops" target="_blank" rel="noopener noreferrer">
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
            <Network className="w-6 h-6 text-purple-400" /> State Machine
          </p>
          <p className="text-xs text-muted-foreground">Directed Cyclic Graph</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Engine</h4>
          <p className="text-3xl font-bold text-emerald-500 flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-emerald-500" /> NIM
          </p>
          <p className="text-xs text-muted-foreground">NVIDIA Inference</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-red-400/90 uppercase tracking-wider">Metrics</h4>
          <p className="text-3xl font-bold text-red-500 flex items-center gap-2">
            <Activity className="w-6 h-6 text-red-500" /> Grafana
          </p>
          <p className="text-xs text-red-400/70">Real-time Observability</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Core Logic</h4>
          <p className="text-3xl font-bold text-white flex items-center gap-2">
            <Terminal className="w-6 h-6 text-emerald-500" /> Python
          </p>
          <p className="text-xs text-muted-foreground">FastAPI Backend</p>
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
              When CI/CD pipelines fail or infrastructure issues arise, engineering teams lose valuable hours diagnosing stack traces, reviewing commits, and applying manual fixes. This disrupts the deployment lifecycle and reduces developer productivity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>SelfHealOps</strong> operates as an autonomous resolution agent. It utilizes a LangGraph-powered state machine and specialized NVIDIA NIM-powered LLM agents to process incident data, determine root causes, generate concrete remediation plans, and execute safe fixes through a strict policy engine.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Key Features</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> LangGraph State Machine Orchestration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> Automated Root Cause Analysis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> Hierarchical AI Agent Delegation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> Production-grade Observability (Prometheus/Grafana)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span> Integration with K8s & PyGithub
              </li>
            </ul>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-500" /> Directed Cyclic Graph Architecture
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl">
              The system creates a cyclic graph of agent execution managed by a LangGraph orchestrator. It safely validates proposed fixes before automated execution, and iterates until the failure is resolved.
            </p>
          </div>
          <SystemArchitectureVisual 
            architectureType="self-healops" 
            title="Self-Healing Pipeline Flow"
            description="Agentic state machine coordinating diagnosis and remediation actions."
          />
        </section>

        {/* Agent Personas Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Specialized Worker Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">1</div>
              <h3 className="text-base font-bold text-white">The Classifier</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Analyzes incoming CI/CD logs and pipeline context to categorize the exact failure domain (e.g., DEPENDENCY_FAILURE, INFRASTRUCTURE_FAILURE).
              </p>
            </div>
            <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">2</div>
              <h3 className="text-base font-bold text-white">The Analyst</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Performs deep analysis of historical commits and error tracebacks to determine the true technical root cause.
              </p>
            </div>
            <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 font-bold">3</div>
              <h3 className="text-base font-bold text-white">The Strategist</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Translates the root cause into a sequential list of deterministic actions required to fix the system.
              </p>
            </div>
            <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold">4</div>
              <h3 className="text-base font-bold text-white">The Auditor</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evaluates the proposed action plan against rigid policy guardrails to prevent destructive commands.
              </p>
            </div>
            <div className="bg-card/25 border border-border/40 p-6 rounded-2xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">5</div>
              <h3 className="text-base font-bold text-white">The Scholar</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Extracts successful remediation patterns and stores them semantically, enabling future incidents to be resolved instantly via memory recall.
              </p>
            </div>
          </div>
        </section>

        {/* Systems Engineering Bento Grid Dashboard */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-500" /> SelfHealOps Control Panel
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Visualizing the autonomous agent task traces, global JSON context variables, and repository blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* COLUMN 1: Live Terminal Log & State (Spans 2 cols) */}
            <div className="md:col-span-2 space-y-6">
              {/* Widget 1: Orchestration console */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">selfhealops-orchestrator</span>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed text-emerald-400 space-y-1.5 overflow-x-auto max-h-72">
                  <p className="text-slate-500"># Starting SelfHealOps Orchestrator (LangGraph + NVIDIA NIM)...</p>
                  <p className="text-cyan-400">[TRIGGER] GitHub Webhook: Pipeline #4492 FAILED (exit code 1).</p>
                  <p className="text-purple-400">[CLASSIFIER] Analyzing 500 lines of logs. Category identified: DEPENDENCY_CONFLICT</p>
                  <p className="text-white">[ANALYST] Fetching recent commits... Found package.json update in commit 8a93b21</p>
                  <p className="text-white">[ANALYST] Root cause: &apos;date-fns&apos; upgraded to v3.0, breaking &apos;format&apos; imports in utils.ts</p>
                  <p className="text-purple-400">[STRATEGIST] Generating deterministic fix: Revert &apos;date-fns&apos; to ^2.30.0.</p>
                  <p className="text-amber-400">[AUDITOR] Evaluating proposed git commit and npm install against safety policies...</p>
                  <p className="text-green-400">[AUDITOR] Policy PASSED: Safe to modify package.json and commit.</p>
                  <p className="text-cyan-400">[EXECUTOR] Applying fix... Pushing hotfix branch &apos;selfhealops/fix-deps&apos;</p>
                  <p className="text-purple-400">[SCHOLAR] Storing pattern in ChromaDB (Similarity Key: DEPENDENCY_CONFLICT_DATEFNS)</p>
                  <p className="text-green-500 font-bold">[SUCCESS] Pipeline re-triggered. Status: GREEN.</p>
                </div>
              </div>

              {/* Widget 2: Agent State Bank (JSON) */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Shared Graph State</span>
                  <span className="text-[10px] font-mono text-amber-500 font-semibold">Sync JSON</span>
                </div>
                <div className="p-4 font-mono text-[11px] leading-relaxed text-amber-300 overflow-x-auto">
                  <pre>{`{
  "incident_id": "pl_4492_deps",
  "trigger": "github_actions",
  "category": "DEPENDENCY_CONFLICT",
  "root_cause": {
    "file": "utils.ts",
    "culprit_commit": "8a93b21",
    "description": "date-fns v3 breaking change"
  },
  "remediation_plan": [
    "git checkout -b selfhealops/fix-deps",
    "npm install date-fns@^2.30.0",
    "git commit -m 'fix: rollback date-fns'",
    "git push origin selfhealops/fix-deps"
  ],
  "auditor_status": "APPROVED",
  "scholar_embedded": true
}`}</pre>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Tech Metrics & Code Blueprint (Spans 1 col) */}
            <div className="space-y-6">
              {/* Widget 3: Key Engineering Challenges details */}
              <div className="border border-white/10 rounded-xl bg-slate-950/40 p-5 space-y-4 shadow-xl">
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[10px]">Graph State</Badge>
                  <h3 className="text-sm font-bold text-white">LangGraph Management</h3>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    Managing cyclic execution in LangGraph requires robust state tracking. Passing an \`AgentState\` typed dictionary ensures predictable input/output validation at each node during automated remediation.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px]">Benchmarking</Badge>
                  <h3 className="text-sm font-bold text-white">NVIDIA NIM Optimization</h3>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed">
                    To prevent CI/CD timeouts, the orchestrator routes smaller tasks (Classifier, Auditor) to ultra-fast local Llama-3-8B NIM endpoints, reserving 70B models strictly for deep analysis.
                  </p>
                </div>
              </div>

              {/* Widget 4: Directory Map */}
              <div className="border border-white/10 rounded-xl bg-slate-950/80 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/50">
                  <span className="text-[10px] font-mono text-slate-400">Codebase Blueprint</span>
                  <span className="text-[9px] font-mono text-slate-500">SelfHealOps/</span>
                </div>
                <div className="p-4 font-mono text-[10px] leading-normal text-slate-400 space-y-1">
                  <p>├── <span className="text-cyan-400">backend/</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-emerald-400">orchestrator.py</span> <span className="text-slate-600"># LangGraph Core</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-yellow-400">agents/</span> <span className="text-slate-600"># Specialized Personas</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-slate-300">classifier.py</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-slate-300">auditor.py</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-slate-300">strategist.py</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="text-yellow-400">tools/</span> <span className="text-slate-600"># k8s, bash execution</span></p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-yellow-400">vector_store/</span> <span className="text-slate-600"># ChromaDB</span></p>
                  <p>├── <span className="text-cyan-400">policies/</span> <span className="text-slate-600"># Safety guardrail YAMLs</span></p>
                  <p>└── <span className="text-cyan-400">ui/</span> <span className="text-slate-600"># Real-time dashboard</span></p>
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
