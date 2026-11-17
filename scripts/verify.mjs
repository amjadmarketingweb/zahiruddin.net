import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { career } from "../src/data/career.ts";
import { employerLogos } from "../src/data/employer-logos.ts";
import { achievements } from "../src/data/achievements.ts";
import { publications } from "../src/data/publications.ts";
import {
  applicationAnswers,
  leadershipDNA,
  growthEngines,
  roadmap,
} from "../src/data/funnelevo-application.ts";
const root = dirname(dirname(fileURLToPath(import.meta.url)));
let checks = 0;
const check = (condition, message) => {
  assert.ok(condition, message);
  checks++;
};
const expected = [
  ["TAE Aerospace Malaysia", "May 2025", "Present"],
  ["Yayasan Amjad / Amjad Group", "October 2023", "April 2025"],
  ["Intellect Education Group", "April 2021", "August 2023"],
  ["Vennea Marketing Sdn. Bhd.", "October 2020", "March 2021"],
  ["RichWorks International Sdn. Bhd.", "January 2020", "September 2020"],
  ["Martial Arts Brigade Global", "August 2017", "December 2019"],
  ["Mulawarman Center, Indonesia", "January 2017", "July 2017"],
  ["Putra Intelek International College", "February 2015", "December 2016"],
  ["Education Malaysia Global Services", "May 2013", "August 2013"],
  ["Akademi Pintas", "January 2011", "January 2015"],
];
check(career.length === 10, "All ten roles must be present");
expected.forEach(([employer, start, end], i) => {
  check(
    career[i].employer === employer &&
      career[i].startDate === start &&
      career[i].endDate === end,
    `Career date integrity: ${employer}`,
  );
  check(
    career[i].responsibilities.length > 0 &&
      career[i].leadershipRelevance.length > 0,
    `Career detail: ${employer}`,
  );
});
check(
  career[3].additionalRole === "Acting General Manager Responsibilities",
  "Acting designation must remain qualified",
);
check(achievements.length === 6, "Six selected achievements");
check(publications.length === 0, "No fabricated publications");
check(employerLogos.filter((l) => l.src).length === 9, "Nine local logos");
for (const logo of employerLogos) {
  if (logo.src) {
    await access(join(root, "public", logo.src));
    checks++;
  }
}
for (const file of [
  "images/zahiruddin-hero.webp",
  "images/social-card.png",
  "fonts/manrope-latin.woff2",
  "fonts/OFL.txt",
]) {
  await access(join(root, "public", file));
  checks++;
}
check(
  leadershipDNA.map((x) => x.value).join("|") ===
    "RARE BREED|TRUST THE PROCESS|WIN TOGETHER|MAKE IT HAPPEN",
  "Published values",
);
check(
  growthEngines.length === 5 &&
    growthEngines.every(
      (e) => e.kpis.length >= 6 && e.opportunities.length >= 8,
    ),
  "All engines include opportunities and KPIs",
);
check(
  roadmap.length === 3 && roadmap.every((r) => r.deliverables.length === 4),
  "Three complete roadmap phases",
);
check(
  applicationAnswers.length === 2 &&
    applicationAnswers[0].blocks.length === 13 &&
    applicationAnswers[1].blocks.length === 30,
  "Both complete BM answers",
);
check(
  applicationAnswers[0].blocks
    .at(-1)
    .text.startsWith("Kekuatan saya bukan sekadar"),
  "First answer closing retained",
);
check(
  applicationAnswers[1].blocks
    .at(-1)
    .text.startsWith("Matlamat saya bukan sekadar"),
  "Second answer closing retained",
);
// Verify the exact export when explicitly requested; otherwise retain the
// standard Next.js build checks and permit a standalone exported checkout.
const isGitHubPages = process.env.GITHUB_PAGES === "true";
async function readBuildArtifact(serverPath, exportPaths) {
  const candidates = isGitHubPages
    ? exportPaths
    : [serverPath, ...exportPaths];
  for (const candidate of candidates) {
    try {
      return await readFile(join(root, candidate), "utf8");
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  throw new Error(
    `Build artifact missing. Run the matching production build first: ${candidates.join(", ")}`,
  );
}
const home = await readBuildArtifact(".next/server/app/index.html", [
  "out/index.html",
]);
const app = await readBuildArtifact(
  ".next/server/app/4gmfunnelevocollege.html",
  ["out/4gmfunnelevocollege/index.html", "out/4gmfunnelevocollege.html"],
);
const sitemap = await readBuildArtifact(".next/server/app/sitemap.xml.body", [
  "out/sitemap.xml",
]);
check(app.includes("noindex, follow"), "Candidature has noindex, follow");
check(
  !sitemap.includes("4gmfunnelevocollege") &&
    sitemap.includes("https://zahiruddin.net"),
  "Only homepage in sitemap",
);
check(
  home.includes("application/ld+json") &&
    home.includes("https://zahiruddin.net"),
  "Person metadata and canonical domain",
);
for (const html of [home, app]) {
  check(!html.includes("[INSERT_"), "No unresolved content placeholders");
  check(!html.includes("RM19,500"), "No speculative financial target");
  check(
    (html.match(/<h1[ >]/g) || []).length === 1,
    "One primary heading per page",
  );
}
check(
  (home.match(/class="career-entry"/g) || []).length === 10,
  "All ten career entries rendered",
);
check(
  (app.match(/class="answer-panel"/g) || []).length === 2,
  "Both answer panels rendered",
);
if (process.argv[2]) {
  const base = process.argv[2].replace(/\/$/, "");
  for (const path of [
    "/",
    "/4gmfunnelevocollege",
    "/sitemap.xml",
    "/robots.txt",
    "/fonts/manrope-latin.woff2",
    "/images/zahiruddin-hero.webp",
    "/images/social-card.png",
    ...employerLogos.filter((l) => l.src).map((l) => l.src),
  ]) {
    const res = await fetch(base + path);
    check(res.ok, `HTTP ${path}: ${res.status}`);
  }
  const missing = await fetch(base + "/nonexistent-page");
  check(missing.status === 404, "Unknown page returns 404");
}
console.log(`Passed ${checks} content, asset, metadata and route checks.`);
