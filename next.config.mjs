import fs from 'node:fs';
import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config) => {
    // https://github.com/atomiks/rehype-pretty-code/issues/128
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkEmoji, { accessible: true }]],
    rehypePlugins: [[rehypePrettyCode, { theme: 'dark-plus' }]],
  },
});

export default withMDX(nextConfig);
