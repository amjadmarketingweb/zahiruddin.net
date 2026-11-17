# GitHub Pages deployment

Repository: [amjadmarketingweb/zahiruddin.net](https://github.com/amjadmarketingweb/zahiruddin.net)

The workflow in `.github/workflows/deploy-pages.yml` builds, verifies and deploys the static Next.js export on pushes to `main`. GitHub Pages is configured to use **GitHub Actions**.

## Current deployment

Custom domain `zahiruddin.net` was configured on **18 November 2026**. [Root-domain run 44173645527](https://github.com/amjadmarketingweb/zahiruddin.net/actions/runs/44173645527) succeeded for commit `74e41773d9b6460ffebc1ee24d2635f3756d85f0`. The build log confirms an empty `NEXT_PUBLIC_BASE_PATH`, targeting the custom-domain root.

The portfolio is live at [https://zahiruddin.net/](https://zahiruddin.net/) and [its candidature route](https://zahiruddin.net/4gmfunnelevocollege/). Both return 200 over HTTPS, and images load in the browser. The candidature retains `noindex, follow`.

All five DNS records were confirmed through all three authoritative nameservers and tested public resolvers. GitHub Pages reports a successful DNS check. Certificate trust and names validate for the apex and `www` across all four IPv4 endpoints. HTTPS `www` returns 301 to the apex. **Enforce HTTPS** is enabled and remained enabled after reloading settings.

These are targeted root-domain checks. The earlier 72-check live suite passed on the original GitHub project URL; it was not rerun in full against root HTTPS.

## DNS snapshot

Records saved in NameSilo on 18 November 2026:

| Host | Type | Value | TTL |
| --- | --- | --- | --- |
| `@` | A | `185.199.108.153` | 3600 |
| `@` | A | `185.199.109.153` | 3600 |
| `@` | A | `185.199.110.153` | 3600 |
| `@` | A | `185.199.111.153` | 3600 |
| `www` | CNAME | `amjadmarketingweb.github.io` | 3600 |

Preserve unrelated DNS records during future changes. A client that cached an earlier failed DNS lookup may need time for that cache to expire even after authoritative and public DNS checks pass.

## Build behaviour

`GITHUB_PAGES=true` enables static export, trailing slashes and unoptimized Next images; the authentic portrait is compressed to WebP. `actions/configure-pages` provides the URL prefix, supporting the original GitHub project address and the custom-domain root. Internal links, public images and the bundled font support that prefix. Canonical metadata remains `https://zahiruddin.net`.

For an equivalent root-domain export locally (PowerShell):

```powershell
$env:GITHUB_PAGES = 'true'
$env:NEXT_PUBLIC_BASE_PATH = ''
pnpm build
pnpm verify
```

Use `/zahiruddin.net` only when building for the original GitHub project address. The default build without `GITHUB_PAGES=true` remains compatible with Vercel.

Original/refined comparisons and the original PNG portrait are retained separately and excluded from this public repository. Production logos, the optimized authentic portrait, font license and social image are included.

GitHub Pages serves static files and does not apply the Next.js server headers configured for the alternative Vercel deployment. No server-only feature is required. The candidature remains `noindex, follow`; this does not make it private.
