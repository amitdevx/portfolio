import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  // SECURITY: Only expose minimal health status - no server internals
  return NextResponse.json(
    { status: 'ok' },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    }
  );
}
