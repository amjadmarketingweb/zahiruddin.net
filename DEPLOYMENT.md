# GitHub and Vercel deployment

The source is prepared for deployment. A target GitHub repository, Vercel project and domain access have not been supplied or verified. These instructions do not assert a live publication.

## 1. Validate the final source

From this project directory, run:

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
pnpm verify
```

If installing for the first time before a lockfile exists, run `pnpm install` once and commit the generated `pnpm-lock.yaml`. Subsequent deployments should use `--frozen-lockfile`. Resolve failures before publishing. Review [QA.md](QA.md) and check both routes in the production preview.

Confirm that the public files contain only approved publication material. `public/` is served to every visitor: keep original reference archives, private correspondence, certificates containing private identifiers and employment documents out of it. Current `.gitignore` excludes dependency/build directories, local environment files and `.vercel/` state.

## 2. Put the project in a repository you control

Create an empty GitHub repository with the desired visibility. Choose the repository yourself; no organization or existing repository is assumed. If the source is already inside a Git repository, inspect that repository and its remotes before adding or changing anything.

For a new, standalone repository, the sequence is:

```sh
git init
git add .
git status --short
git diff --cached --stat
git commit -m "Build executive portfolio and leadership blueprint"
git branch -M main
```

Review the staged files before committing. Then add the URL supplied by GitHub as the `origin` remote and push `main`, using GitHub's displayed instructions. Do not paste account tokens into commands, source files or documentation. Use your existing Git credential manager or authenticated GitHub workflow.

If this project lives in a larger repository, commit it within that repository only when that is your intended arrangement. In Vercel, set the Root Directory to the project subdirectory. Do not create an unintended nested repository.

## 3. Import into Vercel

1. In your Vercel account, choose **Add New → Project** and import the intended GitHub repository. Grant access only to the repository needed for this project.
2. Select **Next.js** as the framework. Set Root Directory to the folder containing this project's `package.json`.
3. Use the Node.js runtime supported by both Vercel and the pinned Next.js release. The source declares Node.js `>=24.0.0`.
4. Retain `pnpm install --frozen-lockfile` as Install Command and `pnpm build` as Build Command. Leave Output Directory at the Next.js default; do not set it to `public/`.
5. No environment variables are required by the current portfolio. Keep any future secrets in Vercel's environment settings, never in `NEXT_PUBLIC_*` values or Git.
6. Deploy and wait for a successful deployment. Open the returned Vercel URL and verify both pages, local assets, interactions and metadata before adding the production domain.

The included `vercel.json` declares the framework and commands. Git integration supports deployments when the connected repository changes; review the Production Branch and preview settings in your project. See Vercel's [Next.js guidance](https://vercel.com/docs/frameworks/full-stack/nextjs) and [Git deployment documentation](https://vercel.com/docs/git).

## 4. Connect `zahiruddin.net`

First verify that you control the domain and can edit its DNS. In Vercel's project **Settings → Domains**, add `zahiruddin.net`. If you also want `www.zahiruddin.net`, add it there and configure it to redirect to the canonical apex domain.

Copy the **exact current DNS record type, name and value displayed by Vercel for this project** into the domain provider's DNS console. Apply any ownership-verification record Vercel requests. Do not copy an old generic IP address or CNAME target from a tutorial; values and required verification may differ. Preserve unrelated email, verification and service records.

Wait for Vercel to confirm valid domain configuration and HTTPS issuance. Check that `https://zahiruddin.net/` and `https://zahiruddin.net/4gmfunnelevocollege` resolve successfully. Vercel's [custom-domain instructions](https://vercel.com/docs/domains/working-with-domains/add-a-domain) describe the current dashboard flow.

The source already uses `https://zahiruddin.net` for canonical metadata. Connecting a preview hostname does not prove ownership or configure that domain. Do not redirect `zahirudin.work` unless ownership and access to that domain are independently confirmed.

## 5. Verify the published result

- Homepage returns successfully and uses the apex canonical URL.
- Candidature returns successfully and exposes `noindex, follow` metadata.
- Sitemap includes the homepage and excludes the candidature route.
- All nine employer assets and the authentic portrait load locally without private Drive hotlinks.
- Email/telephone actions work; unavailable CV and LinkedIn resources produce no broken links.
- Mobile menu, anchors, career expansion, engine selection and Malay answer panels work by keyboard and touch.
- Desktop and mobile layouts remain readable, with no horizontal overflow.
- HTTPS is valid; any configured `www` redirect reaches the canonical domain.

`noindex` is not privacy. Anyone with the candidature URL can visit it unless you separately configure access protection in your hosting environment. No such protection is implemented by the page metadata.

## Update and rollback

Update centralized content, run the checks, review the diff and push through the configured repository workflow. Inspect Vercel's resulting deployment before promoting changes when using a preview workflow. If a production release fails, use the previously verified deployment in Vercel's deployment history to roll back, then correct the source and redeploy. Record the verified URL and deployment identifier in your release notes.
