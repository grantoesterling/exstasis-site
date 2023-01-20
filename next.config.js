/**
 * @type {import('next').NextConfig}
 */
const path = require('path')
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = {
      fs: false,
      module: false,
      events: path.resolve(__dirname, 'node_modules/events'),
      ...config.resolve.fallback,
    }

    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    })

    return config
  },
})
