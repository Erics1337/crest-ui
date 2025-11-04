/** @type {import('next').NextConfig} */
const isGhPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  transpilePackages: ["@crest-code/crest-ui", "@crest-code/config", "@crest-code/tokens"],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGhPages
    ? {
        basePath: '/crest-ui',
        assetPrefix: '/crest-ui/',
      }
    : {})
};

export default nextConfig;