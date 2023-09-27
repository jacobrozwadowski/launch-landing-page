/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "cdn.builder.io"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
