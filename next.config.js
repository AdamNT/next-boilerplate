const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withOffline = require('next-offline');
const runtimeCaching = require('next-pwa/cache');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const generateSitemap = require('./scripts/generate-sitemap');

const isProduction = process.env.NODE_ENV === 'production';
const localeSubpaths = {
  pl: 'pl',
};

const nextConfig = {
  compress: false,
  // next-offline
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  // next-i18next
  rewrites: async () => [
    ...nextI18NextRewrites(localeSubpaths),
    {
      source: '/service-worker.js',
      destination: '/_next/static/service-worker.js',
    },
  ],
  publicRuntimeConfig: {
    localeSubpaths,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap;
    }

    return config;
  },
  pwa: {
    disable: !isProduction,
    dest: 'public',
    runtimeCaching,
  },
};

module.exports = withPlugins(
  [[withPWA], [withOffline], [withBundleAnalyzer]],
  nextConfig
);
