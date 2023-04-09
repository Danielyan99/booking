/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  swcMinify: true,
  i18n,
  env: {
    API_URL: 'http://localhost:4000',
  },
};

module.exports = nextConfig;
