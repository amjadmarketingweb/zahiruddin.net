# Verification report

Status snapshot: **18 November 2026**. Initial implementation checks were completed on 17 November 2026; GitHub Pages publication and the root-domain rebuild followed on 18 November 2026.

## Build and deployment

| Check | Observed result |
| --- | --- |
| Production build, independent TypeScript and ESLint | Passed. |
| Initial content, asset and generated-metadata checks | 55 passed. |
| Initial live GitHub Pages checks | 72 passed before the custom-domain switch, covering both pages, assets, metadata and the missing-page response. |
| Root-domain static export | Passed with `GITHUB_PAGES=true` and empty `NEXT_PUBLIC_BASE_PATH`; 55 checks passed. |
| Root-domain workflow | [Run 44173645527](https://github.com/amjadmarketingweb/zahiruddin.net/actions/runs/44173645527) succeeded for commit `74e41773d9b6460ffebc1ee24d2635f3756d85f0`; build, type checking, lint, export verification and deployment passed. |
| Custom domain | `zahiruddin.net` saved in GitHub Pages on 18 November 2026. |
| DNS | All five saved records confirmed through all three authoritative nameservers and tested public DNS resolvers. GitHub Pages DNS check succeeded. |
| Root HTTPS / www | Homepage and candidature returned 200 over HTTPS, images loaded in browser, and application noindex remained present. Certificate trust and names validated for apex and www on all four IPv4 endpoints. HTTPS www returned 301 to the apex; Enforce HTTPS remained enabled after settings reload. |
| Final check scope | Targeted root-domain DNS, certificate, page, image and redirect checks passed. The complete 72-check suite was not rerun against root HTTPS. |
| Vercel | Alternative configuration retained; no deployment performed. |

## Browser and content checks

Both pages were inspected at 390×844, 768×1024 and 1440×1000 without horizontal overflow. All ten career entries expanded. Enter-key operation, the mobile menu, Escape returning focus, section navigation, all five growth engines, roadmap and leadership disclosures, and both complete Malay answer panels were tested. No console warnings or errors were captured on the inspected routes. Inspected homepage markup had no missing image alternatives, empty unlabeled buttons or broken local anchors.

All ten career dates and designations match the brief, including the EMGS overlap and qualified Acting General Manager responsibilities. Six achievements, six metrics, supplied credentials and full Malay answers are retained. Strategies and approvals remain proposals. No speculative financial targets, fabricated publications or testimonials were introduced.

Canonical metadata uses `https://zahiruddin.net`. The candidature exposes `noindex, follow` and is absent from the sitemap. Contact hrefs were checked without initiating a message or call.

Reduced-motion handling was verified in source. No browser preference emulation, Lighthouse/axe score, full screen-reader audit or full WCAG conformance is claimed.

## Assets and remaining inputs

All nine original/refined logo pairs were compared. Original uploads preserve the supplied artwork and are used under the brief’s fidelity exception; comparison material is retained separately and excluded from this public repository. Some original logos have limited resolution or padding. Yayasan Amjad uses charcoal; the martial-arts emblem retains International wording; EMGS uses text. The authentic portrait is optimized to WebP. Manrope is bundled through `next/font/local` with its OFL license.

A current authentic executive CV PDF, verified LinkedIn URL and actual publications remain unavailable. Corresponding links are omitted and the publication gallery has an empty state. See [GITHUB-PAGES.md](GITHUB-PAGES.md) for current deployment status and [DEPLOYMENT.md](DEPLOYMENT.md) for the alternative Vercel process.

Dependencies, generated output and private reference material are excluded from the public source repository.
