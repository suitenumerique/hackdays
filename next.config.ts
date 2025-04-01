import type { Configuration } from 'webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    })

    return config
  },
}

export default nextConfig
