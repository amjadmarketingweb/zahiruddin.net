# GitHub Pages deployment

Repository: https://github.com/amjadmarketingweb/zahiruddin.net

Custom domain `zahiruddin.net` was configured in GitHub Pages on **18 November 2026**. DNS and HTTPS verification are in progress. This rebuild uses the custom-domain root path reported by `actions/configure-pages`; saving the domain alone does not confirm DNS propagation or certificate readiness.

The workflow in `.github/workflows/deploy-pages.yml` builds, verifies and deploys the Next.js static export on pushes to `main`. Select **GitHub Actions** in the repository's **Settings → Pages → Build and deployment → Source**.

`GITHUB_PAGES=true` enables static export, trailing slashes and unoptimized Next images; the portrait is already compressed to WebP. The workflow obtains the actual URL prefix from `actions/configure-pages`, so the same source supports the initial GitHub project address and a later custom domain. Internal links, public image paths and the bundled font support that prefix.

Canonical metadata remains `https://zahiruddin.net`, as specified in the master brief. A repository named `zahiruddin.net` does not itself connect that domain. Custom-domain setup requires verified domain ownership and the relevant DNS changes. Add the domain in GitHub Pages only after confirming control and configure the exact records from GitHub's current documentation. Do not change the INSAN site or its `www.insan.asia` domain.

The original/refined logo comparisons and original PNG portrait remain in the local deliverable's `asset-reference/` and image folder. They are excluded from this public source repository; the production logo PNGs, optimized authentic portrait, font license and social image are included.

GitHub Pages serves static files and does not apply the Next.js server security headers configured for the alternative Vercel deployment. No server-only feature is required by this site. The candidature remains `noindex, follow`; this does not make it private.

To build an equivalent export locally (PowerShell):

```powershell
$env:GITHUB_PAGES = 'true'
$env:NEXT_PUBLIC_BASE_PATH = ''
pnpm build
pnpm verify
```

The empty prefix above is for the configured custom-domain root. Use `/zahiruddin.net` only when building for the original GitHub project address. The default build without `GITHUB_PAGES=true` remains compatible with Vercel.
