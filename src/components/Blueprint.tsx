import { ChevronDown, ArrowUpRight, Check, ArrowRight } from "lucide-react";
import {
  leadershipDNA,
  vision,
  roadmap,
  roadmapCommitment,
  day100Review,
  commercialNarrative,
  commercialPrinciples,
  commercialCommitment,
  applicationAnswers,
  experienceFit,
  executiveClosing,
} from "@/data/funnelevo-application";
import { SectionHeading, Button, CvButton } from "./ui";
import GrowthEngines from "./GrowthEngines";
export function LeadershipDNA() {
  return (
    <section className="section" id="dna">
      <div className="container">
        <SectionHeading
          number="01"
          eyebrow="MY LEADERSHIP DNA"
          intro="Different experiences. Shared values. One growth mindset."
        >
          An entrepreneurial mindset.
          <br />
          <span>A disciplined way to lead.</span>
        </SectionHeading>
        <p className="dna-source">
          My interpretation of the four values published by{" "}
          <a
            href="https://funnelevo.com/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FunnelEvo Group <ArrowUpRight size={13} aria-hidden />
          </a>
          .
        </p>
        <div className="dna-grid">
          {leadershipDNA.map((d) => (
            <details className="dna-card" key={d.id}>
              <summary>
                <span className="dna-number">{d.id}</span>
                <span className="eyebrow">{d.value}</span>
                <h3>{d.title}</h3>
                <span className="dna-expand">
                  Explore the evidence <ChevronDown size={17} aria-hidden />
                </span>
              </summary>
              <div className="dna-body">
                {d.narrative.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <ul>
                  {d.evidence.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <blockquote>{d.principle}</blockquote>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CollegeVision() {
  return (
    <section className="section vision-section" id="vision">
      <div className="container">
        <div className="vision-heading">
          <SectionHeading
            number="02"
            eyebrow="THE NEXT GROWTH OPPORTUNITY"
            light
          >
            From classroom
            <br />
            to <span>commerce.</span>
          </SectionHeading>
          <div>
            {vision.narrative.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="vision-concept">
          <span>THE STRATEGIC CONCEPT</span>
          <h3>
            FunnelEvo
            <br />
            College <b>360°</b>
          </h3>
          <p>{vision.supportingLine}</p>
        </div>
        <div className="vision-pillars">
          {vision.pillars.map((p) => (
            <div key={p.id}>
              <span>{p.id}</span>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
        <p className="vision-outcome">{vision.outcome}</p>
      </div>
    </section>
  );
}
export function Engines() {
  return (
    <section className="section bg-soft" id="engines">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="FUNNELEVO COLLEGE 360°"
          intro="Turning education into a sustainable platform for talent, industry and enterprise. Select an engine to explore the proposition."
        >
          Five growth engines.
          <br />
          <span>One connected ecosystem.</span>
        </SectionHeading>
        <GrowthEngines />
        <div className="ecosystem-flow" aria-label="Proposed value chain">
          {[
            "Education",
            "Competency",
            "Industry value",
            "Commercial opportunity",
            "Sustainable growth",
          ].map((s, i) => (
            <span key={s}>
              {s}
              {i < 4 && <ArrowRight size={18} aria-hidden />}
            </span>
          ))}
        </div>
        <p className="fine-print">
          Strategic proposals for discussion. Partnerships, programmes and
          technology integrations remain subject to demand validation,
          feasibility, relevant approvals and management agreement.
        </p>
      </div>
    </section>
  );
}
export function First100Days() {
  return (
    <section id="roadmap" className="section">
      <div className="container">
        <div className="roadmap-heading">
          <SectionHeading number="04" eyebrow="MY FIRST 100 DAYS">
            Establish visibility.
            <br />
            Activate opportunity.
            <br />
            <span>Prove the model.</span>
          </SectionHeading>
          <div className="roadmap-intro">
            {roadmapCommitment.introduction.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="roadmap-grid">
          {roadmap.map((r, i) => (
            <article className="roadmap-stage" key={r.days}>
              <div className="roadmap-days">
                <span>PHASE 0{i + 1}</span>
                <strong>{r.days}</strong>
              </div>
              <h3>{r.title}</h3>
              <p className="roadmap-subtitle">{r.subtitle}</p>
              <details>
                <summary>
                  Management priorities <ChevronDown size={17} aria-hidden />
                </summary>
                <ul>
                  {r.priorities.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </details>
              <h4>PROPOSED DELIVERABLES</h4>
              <ul className="deliverables">
                {r.deliverables.map((d) => (
                  <li key={d.name}>
                    <Check size={16} aria-hidden />
                    <div>
                      <strong>{d.name}</strong>
                      <p>{d.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="day100-review">
          <div>
            <div className="eyebrow">DAY 100 / EXECUTIVE REVIEW</div>
            <h3>
              Five questions.
              <br />
              Evidence-led answers.
            </h3>
          </div>
          <ol>
            {day100Review.map((r) => (
              <li key={r.question}>
                <strong>{r.question}</strong>
                <p>{r.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <blockquote className="roadmap-commitment">
          “{roadmapCommitment.featured}”
        </blockquote>
      </div>
    </section>
  );
}
export function CommercialDiscipline() {
  return (
    <section id="commercial" className="section commercial-section">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="COMMERCIAL & FINANCIAL SUSTAINABILITY"
          light
        >
          Build the model.
          <br />
          Validate the demand.
          <br />
          Prove the economics.
          <br />
          <span>Scale what works.</span>
        </SectionHeading>
        <div className="commercial-narrative">
          {commercialNarrative.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="commercial-principles">
          {commercialPrinciples.map((p) => (
            <article key={p.id}>
              <span>{p.id}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
        <p className="commercial-commitment">{commercialCommitment}</p>
      </div>
    </section>
  );
}
export function ExperienceFit() {
  return (
    <section id="fit" className="section">
      <div className="container">
        <SectionHeading
          number="06"
          eyebrow="WHY MY EXPERIENCE FITS"
          intro="The institutional understanding of an education business developer, the commercial perspective of an entrepreneur and the operational discipline of an organisational leader."
        >
          The experience to build.
          <br />
          <span>The discipline to execute.</span>
        </SectionHeading>
        <div className="fit-grid">
          {experienceFit.map((p) => (
            <article key={p.id}>
              <span>{p.id}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ApplicationAnswers() {
  return (
    <section id="track-record" lang="ms" className="section bg-soft">
      <div className="container">
        <SectionHeading
          number="07"
          eyebrow="PENGALAMAN & KOMITMEN KEPIMPINAN"
          intro="Dua soalan utama. Pengalaman sebenar. Komitmen kepimpinan yang boleh dinilai."
        >
          Bukan sekadar perancangan.
          <br />
          <span>
            Pengalaman membina
            <br />
            dan melaksanakan.
          </span>
        </SectionHeading>
        <div className="evidence-strip">
          {[
            ["2", "Entiti perniagaan"],
            ["5", "Jenama pendidikan"],
            ["21", "Pekerja di Vennea"],
            ["100,000+", "Pelajar didekati"],
          ].map(([n, l]) => (
            <div key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
        <p className="fine-print">
          Amjad Academy & Amjad Marketing · Intellect Education Group ·
          Tanggungjawab Acting GM, Vennea · Jangkauan Malaysia Against Bullies
        </p>
        <div className="answer-panels">
          {applicationAnswers.map((a) => (
            <details className="answer-panel" key={a.id}>
              <summary>
                <span className="answer-number">SOALAN 0{a.id}</span>
                <h3>{a.question}</h3>
                <ChevronDown aria-hidden />
              </summary>
              <div className="answer-content">
                {a.blocks.map((b, i) =>
                  b.type === "heading" ? (
                    <h4 key={i}>
                      {b.text === "Closing Statement"
                        ? "Pernyataan penutup"
                        : b.text}
                    </h4>
                  ) : (
                    <p
                      key={i}
                      className={b.type === "emphasis" ? "answer-emphasis" : ""}
                    >
                      {b.text}
                    </p>
                  ),
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ExecutiveClosing() {
  return (
    <section className="section executive-closing">
      <div className="container">
        <div className="eyebrow">MY LEADERSHIP COMMITMENT</div>
        <h2>
          From a college that
          <br />
          teaches business,
          <br />
          to a college that
          <br />
          <span>generates business.</span>
        </h2>
        <div className="closing-grid">
          <strong>{executiveClosing.statement}</strong>
          <div>
            {executiveClosing.narrative.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="closing-actions">
              <Button href="#contact">Let’s discuss the next chapter</Button>
              <CvButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
