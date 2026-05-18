import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Network, Bot, FileText, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MermaidDiagram from '@/components/ui/mermaid';

export default function ProfessorProfilerCaseStudy() {
  return (
    <article className="min-h-screen py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <Link href="/#projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-12 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>
      
      <header className="space-y-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">AI Agents</Badge>
          <Badge variant="outline">Multi-Agent Systems</Badge>
        </div>
        
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Professor Profiler
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
          A Hierarchical Multi-Agent System (HMAS) designed to mimic the cognitive process of an expert tutor, reverse-engineering exam papers using Gemini 2.0.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="https://deepwiki.com/amitdevx/Professor_Profiler" target="_blank">
              Read DeepWiki Docs
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/amitdevx/Professor_Profiler" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Link>
          </Button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-y border-border/40">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Architecture</h4>
          <p className="text-2xl font-bold text-primary flex items-center gap-2">
            <Network className="w-5 h-5" /> HMAS
          </p>
          <p className="text-xs text-muted-foreground">Hub-and-Spoke Pattern</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">AI Models</h4>
          <p className="text-xl font-bold flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-500" /> Gemini 2.0
          </p>
          <p className="text-xs text-muted-foreground">Pro, Flash, & Thinking</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Data Format</h4>
          <p className="text-xl font-bold flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-500" /> PDF & JSON
          </p>
          <p className="text-xs text-muted-foreground">Automated Extraction</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Methodology</h4>
          <p className="text-xl font-bold flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-purple-500" /> Bloom's
          </p>
          <p className="text-xs text-muted-foreground">Cognitive Taxonomy</p>
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-12">
        <section>
          <h2 className="text-3xl font-headline font-bold text-foreground mb-6">System Architecture</h2>
          <p className="text-muted-foreground leading-relaxed">
            The system creates a directed acyclic graph (DAG) of agent execution, managed by a central orchestrator. It serves as a reference implementation for Hub-and-Spoke Agent Architecture and Model Context Protocol (MCP) Tooling.
          </p>
          
          <MermaidDiagram chart={`flowchart TD
    subgraph External_Layer [" External Layer"]
        User([User / Client])
        PDF_File[Exam PDF]
    end

    subgraph Orchestration_Layer [" Orchestration Layer"]
        Runner[<b>Runner</b><br><i>State Management</i>]
        Memory[(<b>Memory Bank</b><br><i>JSON Persistence</i>)]
        Session[<b>Session Service</b>]
    end

    subgraph Agent_Layer [" Agent Hierarchy"]
        Root[<b>ROOT AGENT</b><br><i>Gemini 2.0 Pro</i><br>The Project Manager]
        
        subgraph Workers ["Specialized Sub-Agents"]
            Taxonomist[<b>Taxonomist</b><br><i>Gemini Flash</i><br>Topic & Bloom's Classification]
            Trend[<b>Trend Spotter</b><br><i>Gemini Pro</i><br>Statistical Analysis]
            Strat[<b>Strategist</b><br><i>Gemini Thinking</i><br>Study Planning]
        end
    end

    subgraph Tool_Layer [" Tool Layer"]
        Reader[PDF Ingestion]
        Plotter[Matplotlib Viz]
        Calc[Stats Engine]
    end

    User --> Runner
    PDF_File --> Reader
    Runner <--> Session
    Runner <--> Memory
    Runner --> Root
    
    Root --Delegates--> Taxonomist
    Root --Delegates--> Trend
    Root --Delegates--> Strat
    
    Root --Calls--> Reader
    Root --Calls--> Plotter
    Trend --Calls--> Calc`} />
        </section>

        <section>
          <h2 className="text-3xl font-headline font-bold text-foreground mb-6">Agent Personas</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The system is composed of three distinct "personalities" orchestrated by the Root Agent to ensure high-quality, specialized output:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card/20 border border-border/40 p-6 rounded-lg border-t-4 border-t-blue-500">
              <h3 className="text-lg font-bold mb-2">1. The Taxonomist</h3>
              <p className="text-sm text-muted-foreground"><strong>Model:</strong> Gemini 2.0 Flash</p>
              <p className="text-sm text-muted-foreground mt-2">The meticulous grader. Reads every question and tags it with Topics, Bloom's Level, and Marks.</p>
            </div>
            <div className="bg-card/20 border border-border/40 p-6 rounded-lg border-t-4 border-t-purple-500">
              <h3 className="text-lg font-bold mb-2">2. The Trend Spotter</h3>
              <p className="text-sm text-muted-foreground"><strong>Model:</strong> Gemini 2.0 Pro</p>
              <p className="text-sm text-muted-foreground mt-2">The data scientist. Looks at classified data to find topic distribution and difficulty spikes.</p>
            </div>
            <div className="bg-card/20 border border-border/40 p-6 rounded-lg border-t-4 border-t-green-500">
              <h3 className="text-lg font-bold mb-2">3. The Strategist</h3>
              <p className="text-sm text-muted-foreground"><strong>Model:</strong> Gemini 2.0 Thinking</p>
              <p className="text-sm text-muted-foreground mt-2">The academic coach. Outputs Safe Zones, Danger Zones, and Drop Lists based on data.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-headline font-bold text-foreground mb-6">Execution Pipeline</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The following sequence illustrates how a raw PDF is transformed into an actionable study plan through inter-agent delegation:
          </p>
          
          <MermaidDiagram chart={`sequenceDiagram
    autonumber
    actor Student
    participant Root as Root Agent
    participant Tool as Tools
    participant Tax as Taxonomist
    participant Strat as Strategist

    Student->>Root: "Analyze Physics_2024.pdf"
    
    rect rgb(30, 41, 59)
    note right of Root: Phase 1: Ingestion
    Root->>Tool: Call read_pdf("Physics_2024.pdf")
    Tool-->>Root: Returns Raw Text Content
    end

    rect rgb(15, 23, 42)
    note right of Root: Phase 2: Classification
    Root->>Tax: "Classify these questions by difficulty"
    Tax->>Tax: Map to Bloom's Taxonomy
    Tax-->>Root: JSON List of Classified Questions
    end

    rect rgb(30, 41, 59)
    note right of Root: Phase 3: Visualization
    Root->>Tool: Call generate_charts(data)
    Tool-->>Root: Returns path/to/chart.png
    end

    rect rgb(15, 23, 42)
    note right of Root: Phase 4: Strategy
    Root->>Strat: "Based on this data, what should I study?"
    Strat->>Strat: Identify Safe Zones & Drop Lists
    Strat-->>Root: Final Study Recommendations
    end

    Root-->>Student: Final Report + Images + Plan`} />
        </section>

      </div>
    </article>
  );
}
