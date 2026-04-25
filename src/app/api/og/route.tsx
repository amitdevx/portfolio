import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get dynamic title
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Amit Divekar | Cloud Architect & Full-Stack Engineer';
      
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              backgroundColor: 'rgba(15, 15, 20, 0.95)',
              padding: '60px 80px',
              border: '2px solid rgba(179, 165, 200, 0.2)',
              borderRadius: '24px',
              width: '85%',
              height: '75%',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  color: '#b3a5c8',
                  fontSize: 24,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                amitdevx.tech
              </div>
            </div>
            
            <div
              style={{
                fontSize: title && title.length > 60 ? 54 : 64,
                fontFamily: 'sans-serif',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.2,
                marginBottom: '40px',
              }}
            >
              {title}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 32,
                  color: '#e5e5e5',
                  fontWeight: 600,
                }}
              >
                Amit Divekar
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 24,
                  color: '#888',
                  marginLeft: '20px',
                  borderLeft: '2px solid #333',
                  paddingLeft: '20px',
                }}
              >
                Cloud Architect & Full-Stack Engineer
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
