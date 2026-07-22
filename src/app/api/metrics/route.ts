/**
 * Performance Metrics API Endpoint
 * Tracks and logs Core Web Vitals metrics
 */

import { NextRequest, NextResponse } from 'next/server';

interface PerformanceMetric {
  name: string;
  value: number;
  rating?: string;
  id: string;
  delta: number;
  navigationType: string;
  timestamp?: string;
  url?: string;
  userAgent?: string;
}

/**
 * SECURITY: Validate external metrics endpoint URL.
 * Only HTTPS URLs are allowed to prevent SSRF via env var injection.
 * Returns null if the URL is invalid or unsafe.
 */
function getValidatedMetricsEndpoint(): string | null {
  const endpoint = process.env.EXTERNAL_METRICS_ENDPOINT;
  if (!endpoint) return null;

  try {
    const url = new URL(endpoint);
    // Only allow HTTPS to prevent data exfiltration over plain HTTP
    if (url.protocol !== 'https:') {
      console.error('[Metrics] Rejected non-HTTPS external endpoint');
      return null;
    }
    // Block internal/private network addresses (SSRF prevention)
    const hostname = url.hostname;
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '0.0.0.0' ||
      hostname.startsWith('10.') ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('172.') ||
      hostname === '::1' ||
      hostname.endsWith('.internal') ||
      hostname.endsWith('.local')
    ) {
      console.error('[Metrics] Rejected internal network endpoint');
      return null;
    }
    return url.toString();
  } catch {
    console.error('[Metrics] Invalid EXTERNAL_METRICS_ENDPOINT URL');
    return null;
  }
}

/**
 * Log metrics to console and potentially send to monitoring service
 */
function logMetric(metric: PerformanceMetric) {
  const { name, value, rating } = metric;
  
  // Color code based on rating
  let color = '🟢'; // Good
  if (rating === 'needs-improvement') {
    color = '🟡'; // Needs improvement
  } else if (rating === 'poor') {
    color = '🔴'; // Poor
  }

  console.log(`${color} [${name}] ${value.toFixed(2)}ms (${rating})`);

  // SECURITY: Validate the external endpoint URL before forwarding
  const validatedEndpoint = getValidatedMetricsEndpoint();
  if (validatedEndpoint) {
    // Strip sensitive metadata before forwarding - only send metric data
    const { name, value, rating, id, delta, navigationType } = metric;
    fetch(validatedEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        value,
        rating,
        id,
        delta,
        navigationType,
        timestamp: new Date().toISOString(),
      }),
    }).catch(err => console.error('Failed to send metrics:', err));
  }
}

/**
 * Allowed Core Web Vitals metric names - reject anything else.
 */
const ALLOWED_METRICS = new Set([
  'CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB',
]);

/**
 * POST handler for performance metrics
 */
export async function POST(request: NextRequest) {
  try {
    // SECURITY: Reject oversized payloads (max 2KB)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 2048) {
      return NextResponse.json(
        { error: 'Payload too large' },
        { status: 413 }
      );
    }

    const metric = (await request.json()) as PerformanceMetric;

    // Validate metric structure
    if (!metric.name || metric.value === undefined || typeof metric.value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid metric format' },
        { status: 400 }
      );
    }

    // SECURITY: Only accept known Core Web Vitals metrics
    if (!ALLOWED_METRICS.has(metric.name)) {
      return NextResponse.json(
        { error: 'Unknown metric name' },
        { status: 400 }
      );
    }

    // Add request metadata
    const enrichedMetric: PerformanceMetric = {
      ...metric,
      timestamp: new Date().toISOString(),
      url: request.headers.get('referer') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Log the metric
    logMetric(enrichedMetric);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing metrics:', error);
    return NextResponse.json(
      { error: 'Failed to process metrics' },
      { status: 500 }
    );
  }
}

/**
 * GET handler to retrieve metrics summary (optional)
 */
export async function GET(_request: NextRequest) {
  // This could retrieve aggregated metrics from your storage
  return NextResponse.json({
    message: 'Performance metrics endpoint',
    methods: ['POST'],
    format: {
      name: 'string',
      value: 'number',
      rating: 'string (good|needs-improvement|poor)',
      id: 'string (unique metric id)',
      delta: 'number',
      navigationType: 'string',
    },
  });
}
