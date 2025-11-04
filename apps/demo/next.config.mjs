/** @type {import('next').NextConfig} */
const isGhPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  transpilePackages: ["@crest-ui/ui", "@crest-ui/config", "@crest-ui/tokens"],
  output: 'export',
  trailingSlash: true,
  ...(isGhPages
    ? {
        basePath: '/crest-ui',
        assetPrefix: '/crest-ui/',
      }
    : {})
};

export default nextConfig;