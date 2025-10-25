import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.extensions.push('.stylex.js', '.stylex.ts');
    return config;
  }
};

export default nextConfig;
