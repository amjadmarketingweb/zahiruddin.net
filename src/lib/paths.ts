// Next.js prefixes framework routes through basePath, while public files and
// ordinary anchors need the same prefix explicitly. Empty keeps root hosting.
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(
  /\/+$/,
  "",
);

export function withBasePath(path: string): string {
  if (!basePath || !path.startsWith("/") || path.startsWith("//")) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}

export function stripBasePath(path: string): string {
  if (basePath && (path === basePath || path.startsWith(`${basePath}/`))) {
    return path.slice(basePath.length) || "/";
  }
  return path;
}
