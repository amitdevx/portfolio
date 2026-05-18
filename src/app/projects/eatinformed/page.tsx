import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Activity, ScanLine, Cpu, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MermaidDiagram from '@/components/ui/mermaid';

export default function EatInformedCaseStudy() {
  return (
    <article className="min-h-screen py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <Link href="/#projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-12 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>
      
      <header className="space-y-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">AI Pipelines</Badge>
          <Badge variant="outline">Computer Vision</Badge>
        </div>
        
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          EatInformed AI
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
          A high-precision nutritional analysis pipeline utilizing Llama 3.2 Vision for OCR and DeepSeek-V4 for advanced health reasoning.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="https://eatinformed.amitdevx.tech/" target="_blank">
              Live Application
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/amitdevx/Eatinformed" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Link>
          </Button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-y border-border/40">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Accuracy</h4>
          <p className="text-2xl font-bold text-primary flex items-center gap-2">
            <ScanLine className="w-5 h-5" /> 99%
          </p>
          <p className="text-xs text-muted-foreground">OCR Precision</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Architecture</h4>
          <p className="text-xl font-bold flex items-center gap-2">
            <Server className="w-5 h-5 text-blue-500" /> 2-Step
          </p>
          <p className="text-xs text-muted-foreground">Inference Pipeline</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Infrastructure</h4>
          <p className="text-xl font-bold flex items-center gap-2">
            <Cpu className="w-5 h-5 text-green-500" /> NVIDIA
          </p>
          <p className="text-xs text-muted-foreground">NIM API Integration</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Status</h4>
          <p className="text-xl font-bold flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-500" /> Prod
          </p>
          <p className="text-xs text-muted-foreground">Active Deployment</p>
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-12">
        <section>
          <h2 className="text-3xl font-headline font-bold text-foreground mb-6">The Goal</h2>
          <p className="text-muted-foreground leading-relaxed">
            Consumers struggle to decipher complex food labels. The goal of EatInformed was to build a system where a user could snap a picture of an ingredient list or nutrition label, and instantly receive a highly accurate, scientifically backed breakdown of health risks and dietary implications.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-headline font-bold text-foreground mb-6">Pipeline Evolution: Google Genkit to NVIDIA NIM</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The initial prototype was built using Google Genkit and Gemini 1.5 Pro. However, passing high-resolution images directly to a single multimodal LLM for both OCR and deep reasoning led to high latency and frequent context-loss errors on complex labels.
          </p>
          
          <div className="bg-card/20 border border-border/40 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-primary" /> The Two-Step Architecture
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              To stabilize the pipeline, I decoupled the extraction and reasoning phases:
            </p>
            <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-3 marker:text-primary font-medium">
              <li>
                <strong>Phase 1 (Vision):</strong> The image is sent to <code className="text-xs bg-muted px-1 py-0.5 rounded">meta/llama-3.2-90b-vision-instruct</code> via NVIDIA NIM. This model acts purely as an advanced OCR engine, extracting raw text and nutritional values with 99% accuracy into a structured JSON schema.
              </li>
              <li>
                <strong>Phase 2 (Reasoning):</strong> The extracted structured data is passed to <code className="text-xs bg-muted px-1 py-0.5 rounded">deepseek-ai/deepseek-v4-pro</code>. Stripped of the heavy image payload, DeepSeek focuses entirely on analyzing the ingredients against known health markers, allergies, and nutritional science.
              </li>
            </ol>
            
            <div className="mt-8">
              <MermaidDiagram chart={`sequenceDiagram
    participant App as Next.js API
    participant Llama as Llama 3.2 Vision
    participant Deep as DeepSeek-V4
    
    App->>Llama: Send Image (Food Label)
    Llama-->>App: Return Structured JSON (Ingredients & Macros)
    App->>Deep: Forward JSON & Health Prompt
    Deep-->>App: Return Health Analysis & Warnings`} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-headline font-bold text-foreground mb-6">Key Engineering Decisions</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-l-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Resilient JSON Output Parsing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A major challenge with LLMs is ensuring deterministic JSON output. I implemented custom retry logic and schema validation middleware. If the reasoning model drops a required key or breaks JSON formatting, the pipeline intercepts the error, provides the partial JSON back to the model, and requests a specific correction rather than failing the entire request.
              </p>
            </div>

            <div className="border-l-4 border-l-secondary pl-6">
              <h3 className="text-xl font-bold mb-2">Dark-Themed, Interactive UI</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The application features a modern, pure-black dark theme using Tailwind CSS and Framer Motion. The UI is designed to feel native and responsive, with complex loading states that communicate the progress of the multi-step AI inference to the user, managing latency expectations effectively.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
