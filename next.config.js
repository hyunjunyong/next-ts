/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.image.url",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
