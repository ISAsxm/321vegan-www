import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  allowedDevOrigins: [
    "localhost",
    "*.localhost",
    "192.168.1.5",
    "*.192.168.1.5",
  ],
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  serverExternalPackages: ["@react-email/components"],
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
      {
        source: "/a-propos",
        destination: "/about",
      },
      {
        source: "/scanner-vegan",
        destination: "/scan",
      },
      {
        source: "/verification-d-additifs",
        destination: "/additives",
      },
      {
        source: "/verification-de-cosmetiques",
        destination: "/cosmetics",
      },
      {
        source: "/partenaires",
        destination: "/partners",
      },
      {
        source: "/suivi-d-impact",
        destination: "/impact",
      },
      {
        source: "/sources",
        destination: "/impact",
      },
      {
        source: "/politique-de-confidentialite",
        destination: "/privacy-policy",
      },
      {
        source: "/mentions-legales",
        destination: "/terms",
      },
    ];
  },
};

export default nextConfig;
