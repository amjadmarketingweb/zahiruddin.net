import {
  Button,
  CvButton,
  Portrait,
  Contact,
  Footer,
  Arrow,
} from "@/components/ui";
import {
  EmployerExperience,
  Impact,
  Profile,
  Expertise,
  Achievements,
  Career,
  Credentials,
  Philosophy,
  Insights,
} from "@/components/Portfolio";
import { profile } from "@/data/profile";
import Link from "next/link";
export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.website,
    jobTitle: "Education & Commercial Leadership Professional",
    description: profile.headline,
    image: "https://zahiruddin.net/images/zahiruddin-hero.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    knowsAbout: [
      "Education business development",
      "TVET",
      "Institutional growth",
      "Digital business",
      "Strategic partnerships",
      "Organisational leadership",
    ],
  };
  return (
    <>
      <main id="main">
        <section id="top" className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="red-dash" />
                EDUCATION · ENTERPRISE · LEADERSHIP
              </div>
              <h1>
                Building
                <br />
                Institutions.
                <br />
                Developing Talent.
                <br />
                <span>
                  Accelerating
                  <br className="desktop-break" /> Growth.
                </span>
              </h1>
              <div className="hero-intro">
                <h2>MUHAMMAD ZAHIRUDDIN</h2>
                <p className="hero-identity">{profile.headline}</p>
                <p>{profile.heroIntroduction[0]}</p>
              </div>
              <div className="hero-buttons">
                <Button href="#career">Explore my leadership journey</Button>
                <CvButton />
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-edition">
                EXECUTIVE PORTFOLIO <span>01 / 02</span>
              </div>
              <Portrait />
              <Link href="/4gmfunnelevocollege" className="blueprint-teaser">
                <span className="teaser-number">
                  100<span>DAYS</span>
                </span>
                <span>
                  <small>A VISION FOR WHAT COMES NEXT</small>My FunnelEvo
                  College
                  <br />
                  GM blueprint
                </span>
                <Arrow />
              </Link>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>INSTITUTIONAL EXPERIENCE. COMMERCIAL PERSPECTIVE.</span>
            <a href="#impact">
              Discover the impact <Arrow down />
            </a>
          </div>
        </section>
        <EmployerExperience />
        <div id="impact">
          <Impact />
        </div>
        <Profile />
        <Expertise />
        <Achievements />
        <Career />
        <Credentials />
        <Philosophy />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
