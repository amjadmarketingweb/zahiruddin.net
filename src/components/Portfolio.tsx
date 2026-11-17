import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Globe2,
  GraduationCap,
  Layers3,
  Target,
  Users,
  Workflow,
  ChevronDown,
  Award,
} from "lucide-react";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import {
  profile,
  impactMetrics,
  expertise,
  outreachEvidence,
} from "@/data/profile";
import { achievements } from "@/data/achievements";
import { career } from "@/data/career";
import { qualificationGroups } from "@/data/qualifications";
import { publications, publicationCategories } from "@/data/publications";
import { EmployerLogo, EmployerLogoGrid } from "./EmployerLogo";
import { SectionHeading } from "./ui";
const icons = [Building2, GraduationCap, Target, Users, Workflow, Globe2];
export function EmployerExperience() {
  return (
    <section className="employers section-small">
      <div className="container">
        <div className="strip-heading">
          <div className="eyebrow">THE ORGANISATIONS BEHIND THE JOURNEY</div>
          <h2>
            A career across education, enterprise
            <br />& international organisations.
          </h2>
        </div>
        <EmployerLogoGrid />
        <p className="fine-print">
          Selected organisations from my career. Logos identify employment
          history and do not imply endorsement.
        </p>
      </div>
    </section>
  );
}
export function Impact() {
  return (
    <section className="impact-section">
      <div className="container">
        <div className="impact-heading">
          <div className="eyebrow">EXPERIENCE, IN PERSPECTIVE</div>
          <h2>
            Measured by what
            <br />
            I’ve helped build.
          </h2>
        </div>
        <div className="metrics-grid">
          {impactMetrics.map((m) => (
            <div className="metric" key={m.label}>
              <div className="metric-value">
                {m.value}
                <span className="metric-dot">.</span>
              </div>
              <h3>{m.label}</h3>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
        <div className="impact-foot">
          <span>YOUTH PROGRAMME REACH</span>
          <p>{outreachEvidence.join("  /  ")}</p>
          <small>
            Programme funding, not commercial revenue. Outreach, not college
            enrolment.
          </small>
        </div>
      </div>
    </section>
  );
}
export function Profile() {
  return (
    <section id="profile" className="section">
      <div className="container profile-layout">
        <div>
          <SectionHeading number="01" eyebrow="EXECUTIVE PROFILE">
            A builder across
            <br />
            education, business
            <br />
            and organisations.
          </SectionHeading>
          <div className="profile-signature">
            Education.
            <br />
            Enterprise.
            <br />
            <span>Leadership.</span>
          </div>
        </div>
        <div className="profile-prose">
          {profile.biography.map((p, i) => (
            <p className={i === 0 ? "lead" : ""} key={p}>
              {p}
            </p>
          ))}
          <blockquote>{profile.proposition}</blockquote>
        </div>
      </div>
    </section>
  );
}
export function Expertise() {
  return (
    <section id="expertise" className="section bg-soft">
      <div className="container">
        <SectionHeading number="02" eyebrow="LEADERSHIP EXPERTISE">
          Six disciplines.
          <br />
          <span>One integrated perspective.</span>
        </SectionHeading>
        <div className="expertise-grid">
          {expertise.map((e, i) => {
            const Icon = icons[i];
            return (
              <article className="expertise-item reveal" key={e.id}>
                <div className="expertise-top">
                  <Icon size={27} strokeWidth={1.3} aria-hidden />
                  <span>{e.id}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="SELECTED ACHIEVEMENTS"
          intro="Practical experience establishing institutions, developing businesses and delivering programmes at scale."
        >
          Experience that builds.
          <br />
          Leadership that delivers.
        </SectionHeading>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <article
              className={`achievement reveal ${i === 0 ? "achievement-featured" : ""}`}
              key={a.id}
            >
              <div className="achievement-label">
                <span>{a.id}</span>
                {a.organisation}
                <ArrowUpRight size={20} aria-hidden />
              </div>
              <h3>{a.title}</h3>
              {a.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {a.points.length > 0 && (
                <ul>
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              <div className="significance">
                <span>LEADERSHIP SIGNIFICANCE</span>
                <p>{a.significance}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Career() {
  return (
    <section id="career" className="section bg-soft">
      <div className="container">
        <div className="career-heading">
          <SectionHeading number="04" eyebrow="PROFESSIONAL EXPERIENCE">
            My leadership
            <br />
            <span>journey.</span>
          </SectionHeading>
          <p>
            Ten roles. Multiple sectors. A consistent thread of building
            capability and connecting opportunity.
            <small>
              Expand each role to explore the responsibilities and leadership
              relevance.
            </small>
          </p>
        </div>
        <div className="career-timeline">
          {career.map((c, i) => (
            <details className="career-entry" key={c.slug} open={i === 0}>
              <summary>
                <span className="timeline-year">
                  {c.startDate.split(" ").at(-1)}
                </span>
                <div className="career-logo">
                  <EmployerLogo slug={c.logoSlug || "emgs"} />
                </div>
                <div className="career-title">
                  <span className="career-period">
                    {c.period}
                    {c.endDate === "Present" && <b>CURRENT</b>}
                  </span>
                  <h3>{c.position}</h3>
                  <p>{c.employer}</p>
                  {c.additionalRole && (
                    <span className="acting-label">{c.additionalRole}</span>
                  )}
                </div>
                <span className="expand-icon">
                  <ChevronDown size={20} aria-hidden />
                </span>
              </summary>
              <div className="career-body">
                <p className="career-description">{c.description}</p>
                {c.portfolio.length > 0 && (
                  <div className="portfolio-tags">
                    {c.portfolio.map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                  </div>
                )}
                <div className="career-detail-grid">
                  <div>
                    <h4>Responsibilities & contributions</h4>
                    <ul>
                      {c.responsibilities.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="career-relevance">
                    <Layers3 size={24} aria-hidden />
                    <h4>Leadership relevance</h4>
                    <p>{c.leadershipRelevance}</p>
                    {c.achievements.length > 0 && (
                      <>
                        <h4>Selected achievements</h4>
                        {c.achievements.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="ACADEMIC & PROFESSIONAL CREDENTIALS"
        >
          The knowledge behind
          <br />
          <span>the leadership.</span>
        </SectionHeading>
        <div className="credentials-grid">
          {qualificationGroups.map((g, i) => (
            <article key={g.category} className="credential-group">
              <div className="credential-category">
                <Award size={22} aria-hidden />
                <span>0{i + 1}</span>
              </div>
              <h3>{g.category}</h3>
              <ul>
                {g.credentials.map((c) => (
                  <li key={c.name}>
                    <div>
                      <strong>{c.name}</strong>
                      {c.institution && <p>{c.institution}</p>}
                    </div>
                    <span>{c.year}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="container">
        <div className="eyebrow">06 / LEADERSHIP PHILOSOPHY</div>
        <div className="quote-mark" aria-hidden>
          “
        </div>
        <h2>{profile.philosophy}</h2>
        <div className="philosophy-bottom">
          <strong>
            Purpose-driven leadership.
            <br />
            <span>Commercially sustainable results.</span>
          </strong>
          <div>
            {profile.philosophySupporting.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function Insights() {
  return (
    <section id="insights" className="section">
      <div className="container">
        <SectionHeading
          number="07"
          eyebrow="PUBLICATIONS & INSIGHTS"
          intro="Professional resources and perspectives informed by experience across education, enterprise and organisational development."
        >
          Ideas. Knowledge.
          <br />
          <span>Practical leadership.</span>
        </SectionHeading>
        {publications.length ? (
          <div className="publications-grid">
            {publications.map((p) => (
              <a
                key={p.title}
                href={withBasePath(p.url)}
                className="publication"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={withBasePath(p.cover)}
                  alt={`Cover of ${p.title}`}
                  width={480}
                  height={600}
                />
                <small>
                  {p.category} · {p.year}
                </small>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="text-link">
                  Read publication <ArrowUpRight size={18} />
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className="insights-empty">
            <div className="insight-symbol">
              <BookOpen size={35} strokeWidth={1.2} aria-hidden />
            </div>
            <div>
              <h3>A space for ideas that move practice forward.</h3>
              <p>
                Selected resources and professional insights will be shared here
                as they become available.
              </p>
            </div>
            <span className="empty-label">IN DEVELOPMENT</span>
          </div>
        )}
        <div className="insight-categories">
          {publicationCategories.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
