export interface EmployerLogo {
  employer: string;
  slug: string;
  src: string | null;
  alt: string;
  preferredBackground: "light" | "dark" | "either";
}
export const employerLogos: EmployerLogo[] = [
  {
    employer: "TAE Aerospace",
    slug: "tae-aerospace",
    src: "/logos/tae-aerospace.png",
    alt: "TAE Aerospace",
    preferredBackground: "light",
  },
  {
    employer: "Yayasan Amjad",
    slug: "yayasan-amjad",
    src: "/logos/yayasan-amjad.png",
    alt: "Yayasan Amjad",
    preferredBackground: "dark",
  },
  {
    employer: "Intellect Education Group",
    slug: "intellect-education-group",
    src: "/logos/intellect-education-group.png",
    alt: "Intellect Education Group",
    preferredBackground: "light",
  },
  {
    employer: "Vennea Marketing",
    slug: "vennea-marketing",
    src: "/logos/vennea-marketing.png",
    alt: "Vennea Marketing",
    preferredBackground: "light",
  },
  {
    employer: "RichWorks International",
    slug: "richworks-international",
    src: "/logos/richworks-international.png",
    alt: "RichWorks International",
    preferredBackground: "light",
  },
  {
    employer: "Martial Arts Brigade Global",
    slug: "martial-arts-brigade-global",
    src: "/logos/martial-arts-brigade-global.png",
    alt: "Martial Arts Brigade International — supplied emblem for Martial Arts Brigade Global",
    preferredBackground: "light",
  },
  {
    employer: "Mulawarman Center",
    slug: "mulawarman-center",
    src: "/logos/mulawarman-center.png",
    alt: "Mulawarman Center emblem",
    preferredBackground: "light",
  },
  {
    employer: "Putra Intelek International College",
    slug: "putra-intelek-international-college",
    src: "/logos/putra-intelek-international-college.png",
    alt: "Putra Intelek International College",
    preferredBackground: "light",
  },
  {
    employer: "Akademi Pintas",
    slug: "akademi-pintas",
    src: "/logos/akademi-pintas.png",
    alt: "Akademi Pintas",
    preferredBackground: "light",
  },
  {
    employer: "Education Malaysia Global Services",
    slug: "emgs",
    src: null,
    alt: "Education Malaysia Global Services",
    preferredBackground: "either",
  },
];
