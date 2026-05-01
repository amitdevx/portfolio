import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center px-6">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tight text-primary">
            404
          </h1>
          <p className="font-headline text-2xl md:text-3xl font-bold">
            Page Not Found
          </p>
          <p className="max-w-md text-lg text-foreground/80 leading-relaxed">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Button asChild size="lg" className="group mt-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Go Back Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
