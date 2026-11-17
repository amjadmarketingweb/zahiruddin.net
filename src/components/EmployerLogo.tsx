import Image from "next/image";
import { employerLogos } from "@/data/employer-logos";
import { withBasePath } from "@/lib/paths";
export function EmployerLogo({ slug }: { slug: string | null }) {
  const logo = employerLogos.find((l) => l.slug === slug);
  if (!logo) return null;
  return (
    <div
      className={`employer-logo ${logo.preferredBackground === "dark" ? "logo-dark" : ""}`}
    >
      {logo.src ? (
        <Image
          src={withBasePath(logo.src)}
          width={240}
          height={100}
          alt={logo.alt}
          sizes="(max-width:600px) 140px, 190px"
        />
      ) : (
        <span>{logo.employer}</span>
      )}
    </div>
  );
}
export function EmployerLogoGrid() {
  return (
    <div className="logo-grid">
      {employerLogos
        .filter((l) => l.src)
        .map((l) => (
          <EmployerLogo key={l.slug} slug={l.slug} />
        ))}
    </div>
  );
}
