/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  //assetsPrefix: "/out",
  //trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
