/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    publicRuntimeConfig: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/',
    },
  };
