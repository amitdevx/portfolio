
import type {NextConfig} from 'next';

// Next.js configuration with performance optimizations
const nextConfig: NextConfig = {
  /* config options here */
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // Optimize for Google Search
  trailingSlash: false,
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@radix-ui', 'lucide-react'], // Tree-shake unused code
  },
  
  // Configure React settings for performance
  reactStrictMode: true,
  
  // Optimize builds
  staticPageGenerationTimeout: 120,
  
  // Performance headers only — security headers (CSP, X-Frame-Options, etc.)
  // are defined exclusively in vercel.json to prevent conflicts.
  // See: vercel.json "headers" section for the authoritative CSP policy.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // Performance headers
          {
            key: 'Accept-CH',
            value: 'DPR, Viewport-Width, Width'
          }
        ],
      },
      // Cache static assets with long TTL
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache public assets
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
      // Cache fonts aggressively
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  eslint: {
    // Enforce code quality in production builds
    ignoreDuringBuilds: false,
    dirs: ['src', 'app', 'components', 'lib'],
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
    // Allow all public directory paths for local image optimization
    localPatterns: [
      { pathname: '/**' },
    ],
    // Image optimization settings
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
