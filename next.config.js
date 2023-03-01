/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "material-kit-react.devias.io/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
