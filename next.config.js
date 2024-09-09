/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  basePath: process.env.NODE_ENV === "production" ? "/Swiftrack-LP" : "",
};

module.exports = nextConfig;
 