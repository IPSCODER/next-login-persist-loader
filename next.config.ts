import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:'export',
  images:{
    unoptimized:true,
    domains: ["media.istockphoto.com"],
  }
};

export default nextConfig;
