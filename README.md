# Muhammad Zahiruddin — Executive Portfolio

A Next.js executive portfolio and independent FunnelEvo College General Manager candidature. The implementation follows the supplied master brief, preserves the ten career records and separates historical experience from proposed strategy.

## Pages

| Route                  | Purpose                                                                                                                                                                                                | Search indexing                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `/`                    | Comprehensive portfolio with anchored sections, employer experience, impact metrics, biography, expertise, achievements, expandable career history, credentials, philosophy, publications and contact. | Canonical: `https://zahiruddin.net/`      |
| `/4gmfunnelevocollege` | Leadership DNA, College 360° ecosystem, five proposed growth engines, first 100 days, commercial discipline, suitability evidence and full Bahasa Malaysia answers.                                    | `noindex, follow`; excluded from sitemap. |

There are no separate About, Career, Publications or Contact pages. `noindex` controls search indexing; it does not restrict access or make the candidature private.

## Run locally

Use Node.js 24 or later (required by the native TypeScript content verifier; the package declares `>=24.0.0`) and pnpm `10.28.0`.

```sh
pnpm install
pnpm dev
```

Open the local address printed by Next.js. For a production preview:

```sh
pnpm build
pnpm start
```

The committed package configuration pins Next.js `16.4.6`, React `19.3.1`, TypeScript `6.0.3`, Tailwind CSS `4.3.5` and Lucide React `1.74.0`. Use the lockfile for reproducible installs; do not update versions as part of an ordinary deployment.

## Checks

```sh
pnpm typecheck
pnpm lint
pnpm build
pnpm verify
```

These commands provide type checking, linting, project-specific verification and the production build. Browser, keyboard and responsive checks supplement these commands. The exact observed results belong in [QA.md](QA.md); the presence of a script does not mean its checks have passed.

## Maintain content

Professional content is centralized under `src/data/`.

| File                       | Edit here                                                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `profile.ts`               | Executive identity, biography, impact metrics, expertise and philosophy.                                                                         |
| `career.ts`                | The ten employment records, dates, designations, responsibilities and leadership relevance.                                                      |
| `achievements.ts`          | Six selected leadership achievements and their supporting evidence.                                                                              |
| `qualifications.ts`        | Academic qualifications and professional credentials.                                                                                            |
| `funnelevo-application.ts` | Leadership DNA, growth engines, roadmap, commercial discipline, suitability evidence and Bahasa Malaysia answers.                                |
| `publications.ts`          | Publication records and categories. The gallery intentionally begins empty.                                                                      |
| `assets.ts`                | Authentic portrait, CV and verified contact-resource availability. A `null` resource must suppress its link rather than create a broken control. |
| `employer-logos.ts`        | Employer-to-logo mapping, alternative text and preferred backgrounds.                                                                            |

Preserve dates and overlapping appointments, including the 2013 EMGS internship. Vennea involved **Acting General Manager responsibilities**, not a permanent appointed General Manager role. The supplied 2026 qualifications are user-provided facts; no verification links or certificates have been fabricated.

The six impact metrics require their original context: 100,000+ students means programme outreach, not college enrolment; RM680,000 means government programme funding, not revenue; 60+ SMEs means client relationships; and 21 employees refers to the acting management scope at Vennea. Do not add speculative financial targets or present proposed partnerships, programmes or approvals as achieved facts.

## Assets and missing resources

The authentic portrait is configured at `public/images/zahiruddin-hero.webp`. Verified email and telephone details are configured in the data. Employer logo assets belong in `public/logos/`; the nine filenames are:

```text
akademi-pintas.png
putra-intelek-international-college.png
mulawarman-center.png
martial-arts-brigade-global.png
richworks-international.png
vennea-marketing.png
intellect-education-group.png
yayasan-amjad.png
tae-aerospace.png
```

All nine refined Drive assets were retrieved and compared with the original uploads. Because the refinements altered trademark details, the original artwork is used under the brief’s fidelity exception. Both sets are retained in `asset-reference/`, outside the public website; see [asset provenance](docs/ASSET-SOURCES.md). Preserve trademark wording, colours and proportions. Yayasan Amjad uses a dark container. The Martial Arts Brigade emblem retains its supplied “International” wording even though the career entry says “Global”. EMGS uses text unless an authentic logo is supplied. See [QA.md](QA.md) for final asset-import verification.

The following resources remain intentionally unavailable until authentic material is supplied:

- Current executive CV PDF.
- Verified LinkedIn URL.
- Verified publications and publication covers.

To activate the CV, place the approved PDF at `public/documents/Muhammad_Zahiruddin_Executive_Profile.pdf`, set its local URL in the resource data, and test the rendered download. Set LinkedIn only after checking the actual profile URL. Add publications with `cover`, `title`, `category`, `description`, `year` and `url` fields, using a local cover path or an approved accessible URL. Do not create fictitious publications as placeholders.

## Design and accessibility

The original visual direction uses red, charcoal, white and grey, with large editorial typography and restrained motion. The colours proposed in the brief are not asserted to be official FunnelEvo brand codes. Employer experience does not imply employer endorsement. The candidature is an independent strategic proposal.

Navigation and interactive panels must remain keyboard operable; preserve semantic headings, visible focus, image alternatives, adequate contrast and reduced-motion support. Keep essential information available without hovering. Recheck mobile overflow and diagrams after substantial content changes.

## Deployment

This project is prepared for GitHub and Vercel. No repository, Vercel account deployment, domain ownership or DNS change is implied by the source files. Follow [DEPLOYMENT.md](DEPLOYMENT.md) to publish using an account and repository you control. The configuration sets the Next.js framework, `pnpm build` and a frozen-lockfile installation. No application secrets or backend services are required for the current portfolio.
