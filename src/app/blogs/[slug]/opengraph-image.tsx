import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/blog';

export const runtime = 'nodejs';

export const alt = 'Blog Post - Amit Divekar';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  const title = post ? post.title : 'Engineering Blog by Amit Divekar';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#a1a1aa',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            Amit Divekar
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '32px',
            fontWeight: 600,
            color: '#71717a',
            letterSpacing: '0.05em',
          }}
        >
          amitdevx.tech
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
