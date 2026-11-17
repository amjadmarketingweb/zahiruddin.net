// Professional facts supplied by Muhammad Zahiruddin in the approved master brief.
export interface Achievement {
  id: string;
  organisation: string;
  title: string;
  description: string[];
  points: string[];
  significance: string;
}
export const achievements: Achievement[] = [
  {
    id: "01",
    organisation: "Amjad Academy",
    title: "Established an Education & Training Institution",
    description: [
      "Established Amjad Academy and secured HRD Corp training-provider registration.",
      "Developed institutional foundations, training operations, trainer sourcing and competency-based learning opportunities.",
      "Coordinated 11 JPK/NOSS occupational standards across three pathways:",
      "Developed institutional collaboration with JAIP and MUIP.",
    ],
    points: [
      "Mosque Operations, Administration & Management — Levels 1–5.",
      "Sales & Marketing Operations, Administration & Management — Levels 3–5.",
      "Tahfiz Management — Levels 3–5.",
    ],
    significance:
      "Experience establishing and developing an education and training institution.",
  },
  {
    id: "02",
    organisation: "Intellect Education Group",
    title: "Commercial Leadership Across Five Education Brands",
    description: [
      "Provided group-level commercial and business development leadership involving:",
      "Worked on student recruitment, institutional market development, programme positioning and commercial partnerships.",
    ],
    points: [
      "Putra Intelek International College.",
      "Malvern International Academy.",
      "Kasturi College International.",
      "Asia Pacific Academy.",
      "Portman College.",
    ],
    significance:
      "Direct experience with education business development across multiple institutions.",
  },
  {
    id: "03",
    organisation: "Vennea Marketing",
    title: "Acting General Management — 21 Employees",
    description: [
      "Undertook Acting General Manager responsibilities during the Vice President's maternity leave.",
      "Coordinated 21 employees across four departments:",
      "Supported business continuity, digital marketing operations, commercial activities and client service delivery.",
    ],
    points: [
      "Creative.",
      "Marketing.",
      "Business Development.",
      "Administration.",
    ],
    significance:
      "Organisation-wide responsibility in a multidisciplinary digital agency.",
  },
  {
    id: "04",
    organisation: "Amjad Marketing",
    title: "Established a Digital Marketing Business",
    description: [
      "Established Amjad Marketing and developed a nine-member multidisciplinary digital marketing and technology team.",
      "Developed commercial services involving branding, creative work, marketing campaigns, website solutions and digital business operations.",
      "Served group businesses and external paying clients.",
    ],
    points: [],
    significance:
      "Practical experience building digital business capabilities and a commercial service team.",
  },
  {
    id: "05",
    organisation: "Malaysia Against Bullies",
    title: "Large-Scale Government-Funded Youth Programme",
    description: [
      "Coordinated Malaysia Against Bullies, reaching more than 100,000 students across 136 schools in five states.",
      "Supported by RM680,000 in government programme funding.",
    ],
    points: [],
    significance:
      "Programme execution, government relations, stakeholder coordination and nationwide youth outreach.",
  },
  {
    id: "06",
    organisation: "TAE Aerospace Malaysia",
    title: "International Greenfield Business Establishment",
    description: [
      "Contributed to the establishment and operational readiness of TAE Aerospace's Malaysian operation.",
      "Worked across workforce strategy, organisational development, governance, senior stakeholder engagement, international workforce coordination and cross-functional operational priorities.",
    ],
    points: [],
    significance:
      "International corporate exposure and participation in greenfield business establishment.",
  },
];
