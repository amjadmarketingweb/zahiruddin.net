import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Download,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { assets } from "@/data/assets";
import { withBasePath } from "@/lib/paths";
import type { ReactNode } from "react";

export function Arrow({ down = false }: { down?: boolean }) {
  return down ? (
    <ArrowDown size={17} aria-hidden />
  ) : (
    <ArrowUpRight size={18} aria-hidden />
  );
}
export function Button({
  href,
  children,
  secondary = false,
  download = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  download?: boolean;
}) {
  const cls = `button ${secondary ? "button-secondary" : "button-primary"}`;
  return download ? (
    <a href={withBasePath(href)} className={cls} download>
      {children}
      <Download size={17} aria-hidden />
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      <Arrow />
    </Link>
  );
}
export function SectionHeading({
  number,
  eyebrow,
  children,
  intro,
  light = false,
}: {
  number: string;
  eyebrow: string;
  children: ReactNode;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "on-dark" : ""}`}>
      <div className="eyebrow">
        <span className="section-num">{number}</span>
        {eyebrow}
      </div>
      <h2>{children}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
export function Portrait({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`portrait-wrap ${compact ? "compact" : ""}`}>
      <div className="portrait-grid" aria-hidden />
      <span className="portrait-axis" aria-hidden>
        EDUCATION / ENTERPRISE / LEADERSHIP
      </span>
      {assets.portrait ? (
        <Image
          src={withBasePath(assets.portrait)}
          alt="Muhammad Zahiruddin, executive leadership professional"
          fill
          priority
          sizes="(max-width: 750px) 90vw, 44vw"
          className="portrait"
        />
      ) : (
        <div className="portrait-fallback">
          <span>
            MZ<span>.</span>
          </span>
          <p>MUHAMMAD ZAHIRUDDIN</p>
        </div>
      )}
      <div className="portrait-caption">
        <span className="status-dot" />
        <span>
          MUHAMMAD ZAHIRUDDIN<small>Kuala Lumpur, Malaysia</small>
        </span>
        <Arrow />
      </div>
    </div>
  );
}
export function CvButton({ secondary = true }: { secondary?: boolean }) {
  return assets.cv ? (
    <Button href={assets.cv} secondary={secondary} download>
      Download executive profile
    </Button>
  ) : null;
}
export function Contact({ application = false }: { application?: boolean }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top">
          <div>
            <div className="eyebrow">
              <span className="status-dot" />
              OPEN TO MEANINGFUL CONVERSATIONS
            </div>
            <h2>
              Let’s build
              <br />
              what comes <span>next.</span>
            </h2>
          </div>
          <div className="contact-copy">
            <p>
              {application
                ? "I would welcome the opportunity to discuss this leadership proposition, explore the assumptions behind the proposed growth model and determine where my experience could contribute the greatest value."
                : "I welcome conversations about executive leadership, institutional development, education, business growth, corporate partnerships and opportunities to create meaningful long-term value."}
            </p>
            <div className="location">
              <MapPin size={16} aria-hidden />
              Kuala Lumpur, Malaysia
            </div>
          </div>
        </div>
        <div className="contact-links">
          {assets.email && (
            <a href={`mailto:${assets.email}`}>
              <span>
                <Mail size={18} aria-hidden />
                <small>EMAIL ME</small>
              </span>
              {assets.email}
              <Arrow />
            </a>
          )}
          {assets.phone && (
            <a href={`tel:${assets.phone}`}>
              <span>
                <Phone size={18} aria-hidden />
                <small>CALL ME</small>
              </span>
              +60 18 666 2077
              <Arrow />
            </a>
          )}
          {assets.linkedin && (
            <a href={assets.linkedin} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
              <Arrow />
            </a>
          )}
        </div>
        <div className="contact-actions">
          <CvButton />
          <Link
            href={application ? "/" : "/4gmfunnelevocollege"}
            className="text-link"
          >
            {application
              ? "View full executive portfolio"
              : "View my GM blueprint"}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Footer({ application = false }: { application?: boolean }) {
  return (
    <footer>
      <div className="container footer-inner">
        <Link href="/" className="wordmark">
          MUHAMMAD
          <br />
          <strong>
            ZAHIRUDDIN<span>.</span>
          </strong>
        </Link>
        <p>
          {application
            ? "Independent General Manager Candidature — FunnelEvo College"
            : "Executive Leadership · Education & TVET · Commercial Growth"}
          <small>
            © {new Date().getFullYear()} Muhammad Zahiruddin. All rights
            reserved.
          </small>
        </p>
        <a href="#top" className="back-top">
          Back to top <Arrow />
        </a>
      </div>
    </footer>
  );
}
