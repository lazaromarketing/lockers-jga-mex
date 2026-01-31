import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 👇 ESTO ES LO QUE TE FALTA: Permiso para las fotos de Contentful */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;