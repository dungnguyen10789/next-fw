/* eslint-disable no-unused-vars */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    // removeConsole: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
  runAfterProductionCompile: async (dirs: { distDir: string; projectDir: string }) => {
    // dirs.distDir: The build output directory (defaults to .next)
    // dirs.projectDir: The root directory of the project
    // upload sourcemap
  },
  turbopack: {
    resolveAlias: {
      underscore: 'lodash',
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
};

export default nextConfig;
