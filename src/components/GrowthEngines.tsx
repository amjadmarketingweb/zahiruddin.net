"use client";
import { useId, useState } from "react";
import {
  ArrowUpRight,
  GraduationCap,
  BriefcaseBusiness,
  Network,
  Target,
  Workflow,
} from "lucide-react";
import { growthEngines } from "@/data/funnelevo-application";
const icons = [Target, GraduationCap, BriefcaseBusiness, Workflow, Network];
export default function GrowthEngines() {
  const [active, setActive] = useState(0);
  const id = useId();
  const engine = growthEngines[active];
  return (
    <div className="engines-interactive">
      <div
        className="engine-selector"
        role="group"
        aria-label="Choose a proposed growth engine"
      >
        <div className="ecosystem-diagram">
          <svg viewBox="0 0 520 480" aria-hidden>
            <circle cx="260" cy="238" r="160" />
            <circle cx="260" cy="238" r="116" strokeDasharray="3 8" />
            {[
              [260, 45],
              [445, 180],
              [375, 410],
              [145, 410],
              [75, 180],
            ].map(([x, y], i) => (
              <line
                className={active === i ? "selected-line" : ""}
                x1="260"
                y1="238"
                x2={x}
                y2={y}
                key={i}
              />
            ))}
          </svg>
          <div className="ecosystem-center">
            <small>FUNNELEVO COLLEGE</small>
            <strong>
              360<span>°</span>
            </strong>
            <span>
              FROM CLASSROOM
              <br />
              TO COMMERCE
            </span>
          </div>
          {growthEngines.map((e, i) => {
            const Icon = icons[i];
            return (
              <button
                className={`orbit-node node-${i} ${active === i ? "selected" : ""}`}
                key={e.id}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-controls={id}
                aria-label={`Engine ${e.id}: ${e.name}`}
              >
                <Icon size={23} aria-hidden />
                <span>{e.id}</span>
              </button>
            );
          })}
        </div>
        <div className="engine-list">
          {growthEngines.map((e, i) => (
            <button
              aria-pressed={active === i}
              aria-controls={id}
              className={active === i ? "active" : ""}
              onClick={() => setActive(i)}
              key={e.id}
            >
              <span>{e.id}</span>
              {e.name}
              <ArrowUpRight size={17} aria-hidden />
            </button>
          ))}
        </div>
      </div>
      <article
        className="engine-detail"
        id={id}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="eyebrow">PROPOSED GROWTH ENGINE {engine.id}</div>
        <h3>{engine.name}</h3>
        <p className="engine-proposition">{engine.proposition}</p>
        <h4>Commercial objective</h4>
        <p>{engine.objective}</p>
        <h4>Proposed opportunities</h4>
        <ul className="opportunities">
          {engine.opportunities.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        {engine.operatingModel.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h4>Possible performance indicators</h4>
        <div className="kpi-tags">
          {engine.kpis.map((k) => (
            <span key={k}>{k}</span>
          ))}
        </div>
        <div className="engine-conditions">
          <p>{engine.limitations}</p>
          {engine.regulatoryConsiderations && (
            <p>{engine.regulatoryConsiderations}</p>
          )}
        </div>
      </article>
    </div>
  );
}
