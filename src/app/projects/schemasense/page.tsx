import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Database, Zap, Shield, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SystemArchitectureVisual } from '@/components/projects/SystemArchitectureVisual';

export default function SchemaSenseCaseStudy() {
  return (
    <article className="min-h-screen py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <Link href="/#projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-12 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>
      
      <header className="space-y-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">AI Systems</Badge>
          <Badge variant="outline">Backend Architecture</Badge>
        </div>
        
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          SchemaSense AI
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
          An AI-powered database documentation platform that auto-generates schema docs and maps table relationships using DeepSeek-V3.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="https://schemasense.amitdevx.tech" target="_blank">
              Live Application
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/amitdevx/schemasense" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Link>
          </Button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-y border-border/40">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Performance</h4>
          <p className="text-2xl font-bold text-primary flex items-center gap-2">
            <Zap className="w-5 h-5" /> 56x
          </p>
          <p className="text-xs text-muted-foreground">Speedup via Caching</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Security</h4>
          <p className="text-xl font-bold flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-500" /> Active
          </p>
          <p className="text-xs text-muted-foreground">Prompt Injection Defense</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Tech Stack</h4>
          <p className="text-xl font-bold flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-500" /> Next+FastAPI
          </p>
          <p className="text-xs text-muted-foreground">PostgreSQL & SQLite</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">AI Model</h4>
          <p className="text-xl font-bold flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-purple-500" /> DeepSeek
          </p>
          <p className="text-xs text-muted-foreground">Streaming Responses</p>
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-12">
        <section>
          <h2 className="text-3xl font-headline font-bold text-foreground mb-6">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            Database documentation is notoriously difficult to maintain. As schemas evolve, existing documentation quickly becomes stale. Engineering teams waste countless hours trying to decipher complex table relationships, undocumented foreign keys, and tribal knowledge hidden within legacy databases.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            I built SchemaSense AI to automate this entirely—connecting directly to the database, parsing the schema, and leveraging LLMs to generate human-readable documentation and ER diagrams on the fly.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-headline font-bold text-foreground mb-6">System Architecture</h2>
          <SystemArchitectureVisual architectureType="schemasense" />
          <p className="text-muted-foreground leading-relaxed mt-4">
            The platform is built on a high-performance decoupled architecture:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4 marker:text-primary">
            <li><strong>Frontend:</strong> Next.js 14 (App Router) handling dynamic UI and server-sent events (SSE) for streaming AI responses.</li>
            <li><strong>Backend API:</strong> A high-throughput Python FastAPI service responsible for executing DDL queries and orchestrating LLM calls.</li>
            <li><strong>AI Pipeline:</strong> DeepSeek-V3 via OpenRouter, utilizing strict JSON schemas and system prompts to ensure deterministic outputs.</li>
            <li><strong>Caching Layer:</strong> A custom intelligent caching mechanism that hashes schema structures to prevent redundant LLM invocations, achieving a <strong>56x performance increase</strong> on repeated queries.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-headline font-bold text-foreground mb-6">Key Engineering Challenges</h2>
          
          <div className="space-y-8">
            <div className="bg-card/20 border border-border/40 p-6 rounded-lg border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-2">1. Defending Against Prompt Injection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Because users can query their database structure via plain English chat, the system is vulnerable to prompt injection attacks where a user might attempt to trick the AI into executing malicious SQL or exposing system prompt instructions.
                <br/><br/>
                <strong>Solution:</strong> I implemented a multi-layered defense middleware. Before any user query reaches the LLM, it is sanitized, strictly parameterized, and evaluated by a lightweight secondary model acting as a security gatekeeper.
              </p>
            </div>

            <div className="bg-card/20 border border-border/40 p-6 rounded-lg border-l-4 border-l-secondary">
              <h3 className="text-xl font-bold mb-2">2. Handling High-Latency LLM Inference</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Generating documentation for databases with 100+ tables takes significant compute time, leading to poor UX and timeouts on serverless environments.
                <br/><br/>
                <strong>Solution:</strong> I moved from synchronous blocking requests to an asynchronous streaming architecture (Server-Sent Events). Additionally, the robust caching layer ensures that if a table's schema hash hasn't changed, the documentation is instantly retrieved from SQLite/Redis instead of querying DeepSeek.
              </p>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}