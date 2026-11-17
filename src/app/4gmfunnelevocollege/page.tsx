import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { withBasePath } from "@/lib/paths";
import { ArrowUpRight } from "lucide-react";
import { Button, Contact, Footer } from "@/components/ui";
import {
  LeadershipDNA,
  CollegeVision,
  Engines,
  First100Days,
  CommercialDiscipline,
  ExperienceFit,
  ApplicationAnswers,
  ExecutiveClosing,
} from "@/components/Blueprint";
import { applicationHero } from "@/data/funnelevo-application";
export const metadata: Metadata = {
  title:
    "General Manager Candidature | Muhammad Zahiruddin | FunnelEvo College",
  description:
    "An independent leadership proposal presenting Muhammad Zahiruddin's experience, FunnelEvo College 360° vision and proposed 100-day management roadmap.",
  alternates: { canonical: "/4gmfunnelevocollege" },
  robots: { index: false, follow: true },
  openGraph: {
    url: "https://zahiruddin.net/4gmfunnelevocollege",
    title: "My Leadership Blueprint for FunnelEvo College",
    description:
      "Independent General Manager Candidature — Muhammad Zahiruddin",
  },
};
export default function Application() {
  return (
    <>
      <main id="main" className="application-page">
        <section className="application-hero" id="top">
          <div className="container">
            <div className="application-kicker">
              <span className="eyebrow">
                <span className="status-dot" />
                GENERAL MANAGER CANDIDATURE
              </span>
              <span>MUHAMMAD ZAHIRUDDIN / STRATEGIC PROPOSITION</span>
            </div>
            <p className="application-title">
              MY LEADERSHIP BLUEPRINT FOR FUNNELEVO COLLEGE
            </p>
            <h1>
              Not just to lead
              <br />a college.
              <br />
              <span>
                To build its next
                <br />
                growth engine.
              </span>
            </h1>
            <div className="application-hero-bottom">
              <div className="application-hero-copy">
                <div className="candidate-byline">
                  {assets.portrait && (
                    <Image
                      src={withBasePath(assets.portrait)}
                      width={72}
                      height={86}
                      alt="Muhammad Zahiruddin"
                      sizes="72px"
                    />
                  )}
                  <span>
                    General Manager Candidature
                    <strong>Muhammad Zahiruddin</strong>
                  </span>
                </div>
                {applicationHero.introduction.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div className="hero-buttons">
                  <Button href="#roadmap">Explore my 100-day blueprint</Button>
                  <Button href="#fit" secondary>
                    Why my experience fits
                  </Button>
                </div>
                <Link href="/" className="application-profile-link">
                  View my executive profile{" "}
                  <ArrowUpRight size={17} aria-hidden />
                </Link>
              </div>
              <div
                className="blueprint-emblem"
                aria-label="FunnelEvo College 360 degrees — From Classroom to Commerce"
              >
                <div className="emblem-orbit orbit-one" />
                <div className="emblem-orbit orbit-two" />
                <div className="emblem-orbit orbit-three" />
                <div className="emblem-content">
                  <span>FUNNELEVO COLLEGE</span>
                  <strong>
                    360<span>°</span>
                  </strong>
                  <b>
                    FROM CLASSROOM
                    <br />
                    TO COMMERCE
                  </b>
                </div>
                <span className="emblem-point p1" />
                <span className="emblem-point p2" />
                <span className="emblem-point p3" />
                <span className="emblem-point p4" />
              </div>
            </div>
            <div className="application-disclaimer">
              <span>{applicationHero.disclaimer}</span>
              <span>
                One ecosystem. Multiple revenue streams. Nationwide scalability.
              </span>
            </div>
          </div>
        </section>
        <LeadershipDNA />
        <CollegeVision />
        <Engines />
        <First100Days />
        <CommercialDiscipline />
        <ExperienceFit />
        <ApplicationAnswers />
        <ExecutiveClosing />
        <Contact application />
      </main>
      <Footer application />
    </>
  );
}
