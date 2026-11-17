"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { stripBasePath } from "@/lib/paths";
import { Menu, X, ArrowUpRight } from "lucide-react";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  const normalizedPath = stripBasePath(path).replace(/\/+$/, "") || "/";
  const application = normalizedPath === "/4gmfunnelevocollege";
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);
  const links = application
    ? [
        ["Vision", "#vision"],
        ["Growth engines", "#engines"],
        ["100-day plan", "#roadmap"],
        ["Track record", "#track-record"],
      ]
    : [
        ["Profile", "#profile"],
        ["Expertise", "#expertise"],
        ["Journey", "#career"],
        ["Credentials", "#credentials"],
      ];
  useEffect(() => {
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <Link
            href="/"
            className="wordmark"
            aria-label="Muhammad Zahiruddin homepage"
            onClick={() => setOpen(false)}
          >
            MUHAMMAD
            <br />
            <strong>
              ZAHIRUDDIN<span>.</span>
            </strong>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href={application ? "/" : "/4gmfunnelevocollege"}
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            {application ? "Executive portfolio" : "GM blueprint"}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
          <button
            ref={button}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          hidden={!open}
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href={application ? "/" : "/4gmfunnelevocollege"}
            onClick={() => setOpen(false)}
          >
            {application ? "Executive portfolio" : "GM blueprint"}
          </Link>
        </nav>
      </header>
    </>
  );
}
