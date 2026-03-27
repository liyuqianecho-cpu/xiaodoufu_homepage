import type { NextConfig } from "next";

// GitHub Pages 配置
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPages = repositoryName.endsWith(".github.io");
const basePath = isGitHubActions && repositoryName && !isUserOrOrgPages ? `/${repositoryName}` : "";

// Vercel 检测 - Vercel 上不需要 basePath
const isVercel = process.env.VERCEL === "true";
const effectiveBasePath = isVercel ? "" : basePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: effectiveBasePath,
  assetPrefix: effectiveBasePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: effectiveBasePath,
  },
};

export default nextConfig;
