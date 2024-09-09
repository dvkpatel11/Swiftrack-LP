/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    output: "export",
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
