import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Deploying to Vercel or any Node host? Leave this as is.
  //
  // Deploying to a plain static host (GitHub Pages, Netlify drop, cPanel,
  // an S3 bucket)? Uncomment the line below and run `npm run build` —
  // Next writes a fully static site to ./out that you can upload as files.
  //
  output: "export",

  // Static export has no server to run the image optimizer, so /_next/image
  // 404s. Emit plain <img> tags instead.
  images: { unoptimized: true },
};

export default nextConfig;
