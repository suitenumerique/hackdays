import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    /* uncomment other locales when at least the homepage is translated */
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  webpack: (config: Configuration) => {
      config.module?.rules?.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      });

      return config;
    },
}

export default nextConfig
