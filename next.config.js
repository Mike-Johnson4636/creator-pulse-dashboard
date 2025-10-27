/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@stylexjs/stylex'],
  webpack: (config) => {
    // Ensure these extensions are properly handled
    config.resolve.extensions.push('.stylex.ts', '.stylex.js');
    return config;
  }
};

module.exports = nextConfig;