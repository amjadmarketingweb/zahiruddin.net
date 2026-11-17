# Verification report

Verified 17 November 2026 against the final source and its local production build.

## Results

| Check | Observed result |
| --- | --- |
| Dependency installation | Passed; exact versions recorded in pnpm-lock.yaml. |
| Production build | Passed; both requested pages prerendered successfully with Next.js 16.4.6. |
| Independent TypeScript check | Passed, exit 0. |
| ESLint | Passed, exit 0, no findings. |
| Content/asset/generated metadata verification | 55 checks passed. |
| Verification with production HTTP requests | 72 checks passed, including both pages, nine logos, portrait, font, social image, sitemap, robots and 404 response. |
| Responsive browser inspection | 390×844, 768×1024 and 1440×1000; both pages fit their viewport without horizontal overflow. |
| Career timeline | All ten entries expanded successfully; Enter key tested. |
| Mobile navigation | Open/close, Escape returning focus to toggle, and section-link closing tested. |
| Growth engines | All five selections updated pressed state and the corresponding detail content. |
| Other disclosures | Leadership DNA and roadmap disclosure tested; both complete Malay answer panels expanded by keyboard/click. |
| Browser diagnostics | No captured console warnings or errors on either final route. No missing image alt attributes, empty unlabeled buttons or broken local anchor targets in the inspected homepage DOM. |
| Contact actions | Verified mailto and tel href values; no message or call was initiated. |
| Search metadata | Canonical domain correct; candidature exposes noindex, follow and is absent from sitemap. |
| Reduced motion | Source inspection confirms CSS and entrance observer respect the preference; browser preference emulation was not performed. |
| Accessibility limits | Manual keyboard, semantics and contrast review performed. No Lighthouse/axe score, full screen-reader audit or full WCAG conformance claim. |
| GitHub | Not published; no target repository supplied or modified. |
| Vercel / domain | Not deployed; no Vercel account/project or DNS control verified. |

## Content integrity

All ten dates and designations match the master brief, including the overlapping EMGS internship. Vennea remains Acting General Manager responsibilities. Six achievements, six metrics and all supplied credentials are included. Both Malay answers were compared text-for-text with the supplied brief after removing Markdown presentation. All five engines contain objectives, opportunities, proposed KPIs and relevant operating conditions. Proposed partnerships, programmes, accreditation and technology integration are not presented as approvals. No speculative revenue targets or fabricated publications/testimonials were introduced.

## Asset decisions

All nine refined Drive files and original references were retrieved and visually compared. Refinements altered trademark details, so the original uploads are used under the brief’s fidelity exception. Both sets, comparison sheet and checksums remain in asset-reference/. See [asset provenance](docs/ASSET-SOURCES.md). Original source padding and low resolution limit some logo clarity; verified high-resolution originals would improve those marks. Yayasan Amjad uses charcoal; the martial-arts emblem retains International wording. EMGS uses text. The actual portrait is optimized to WebP and the font is self-hosted with its OFL license.

## Remaining inputs and release steps

A current authentic executive CV PDF, verified LinkedIn URL and actual publications remain unavailable. The corresponding links are omitted and the publications gallery has a clear empty state. Supply these resources, select a GitHub repository and Vercel project, then follow [DEPLOYMENT.md](DEPLOYMENT.md). Use Vercel’s exact project-specific DNS values after verifying domain ownership. No live URL is claimed.


## Build environment

The final source was verified in a temporary build mirror. Source equality was checked before packaging. Dependencies and generated output are excluded from the source repository.
