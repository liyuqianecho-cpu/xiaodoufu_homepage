export const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(assetPath: string) {
  if (!assetPath.startsWith("/") || !publicBasePath) {
    return assetPath;
  }

  return `${publicBasePath}${assetPath}`;
}
