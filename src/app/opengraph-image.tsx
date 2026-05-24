import { ImageResponse } from 'next/og';
import { heroData } from '@/data/portfolio-data';

export const runtime = 'edge';

export const alt = 'Amit Divekar - Cloud Architect and Full-Stack Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
            gap: '24px',
            maxWidth: '900px',
          }}
        >
          <div
            style={{
              fontSize: '84px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {heroData.name}
          </div>
          <div
            style={{
              fontSize: '42px',
              color: '#a1a1aa',
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            {heroData.title}
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
