import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 60; // 60 requests per minute

function getRateLimitKey(request: NextRequest): string {
  // Use IP address from headers if available
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded ? forwarded.split(',')[0].trim() : realIp || 'unknown';
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, RATE_LIMIT_WINDOW);

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Redirect non-canonical domains to the canonical domain
  if (
    hostname.includes('qzz.io') ||
    hostname.includes('.vercel.app') ||
    (hostname !== 'amitdevx.tech' && !hostname.startsWith('localhost') && !hostname.startsWith('127.0.0.1') && !hostname.startsWith('[::1]'))
  ) {
    url.protocol = 'https:';
    url.host = 'amitdevx.tech';
    return NextResponse.redirect(url, { status: 301 });
  }

  // Apply rate limiting (skip for static assets and API health checks)
  const isStaticAsset = request.nextUrl.pathname.startsWith('/_next/') || 
                        request.nextUrl.pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|css|js)$/);
  const isHealthCheck = request.nextUrl.pathname === '/api/health';

  if (!isStaticAsset && !isHealthCheck) {
    const rateLimitKey = getRateLimitKey(request);
    const allowed = checkRateLimit(rateLimitKey);

    if (!allowed) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'Retry-After': '60',
          'Content-Type': 'text/plain',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
