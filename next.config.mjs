/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'vexaarchitect.in',
          },
        ],
        destination: 'https://www.vexaarchitect.in/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'vexaarchitects.in',
          },
        ],
        destination: 'https://www.vexaarchitect.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
