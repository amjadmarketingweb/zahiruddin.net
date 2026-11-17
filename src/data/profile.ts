// Professional facts supplied by Muhammad Zahiruddin in the approved master brief.
export interface Profile {
  name: string;
  displayName: string;
  headline: string;
  brand: string;
  signature: string;
  location: string;
  website: string;
  email: string | null;
  telephone: string | null;
  linkedin: string | null;
  portrait: string | null;
  cv: string | null;
  heroIntroduction: string[];
  biography: string[];
  proposition: string;
  philosophy: string;
  philosophySupporting: string[];
  contactIntroduction: string;
}
export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}
export interface Expertise {
  id: string;
  title: string;
  description: string;
}
export const profile: Profile = {
  name: "Muhammad Zahiruddin",
  displayName: "MUHAMMAD ZAHIRUDDIN",
  headline:
    "Executive Leadership | Education & TVET | Commercial Growth & Institutional Development",
  brand: "Education. Enterprise. Leadership.",
  signature: "Building Institutions. Developing Talent. Accelerating Growth.",
  location: "Kuala Lumpur, Malaysia",
  website: "https://zahiruddin.net",
  email: "zahierkhairul@gmail.com",
  telephone: "+60186662077",
  linkedin: null,
  portrait: "/images/zahiruddin-hero.webp",
  cv: null,
  heroIntroduction: [
    "Commercially driven education and business development leader with over 15 years of cross-sector experience spanning private education, TVET development, institutional growth, digital marketing, entrepreneurship, strategic partnerships, organisational leadership and international programme management.",
    "My professional journey combines direct college business development, multi-institution commercial leadership, training academy establishment, digital agency operations, SME advisory, government relations and international corporate experience.",
    "I believe sustainable institutional growth happens when education, people, technology, industry and commercial opportunities are connected through effective leadership and disciplined execution.",
  ],
  biography: [
    "Muhammad Zahiruddin is a commercially driven education and business development leader with more than 15 years of experience across private education, TVET development, entrepreneurship, digital marketing, organisational development, international programmes and corporate operations.",
    "His career includes leading commercial development initiatives across five education brands, establishing Amjad Academy and Amjad Marketing, undertaking Acting General Manager responsibilities within a digital marketing agency and contributing to the establishment of an international aerospace organisation's Malaysian operation.",
    "His education-sector experience includes student recruitment, institutional business development, JPK/NOSS competency frameworks, HRD Corp training-provider development, corporate learning opportunities, education programme positioning and industry partnerships.",
    "His commercial experience includes digital agency management, SME consulting, entrepreneurship development, business-to-business relationships and multidisciplinary operational leadership.",
    "He holds professional credentials in strategic human resource management, project management, Lean Six Sigma, training development and risk management.",
    "His approach combines commercial sustainability, industry relevance, measurable performance, organisational capability and long-term institutional development.",
  ],
  proposition:
    "Building commercially sustainable institutions that connect education, skills development, entrepreneurship, industry needs and meaningful economic opportunities.",
  philosophy:
    "Education should develop capability, create opportunities, and generate sustainable value for individuals, businesses, and society.",
  philosophySupporting: [
    "My approach to educational leadership combines education quality, commercial discipline, organisational capability, strategic partnerships and practical industry relevance.",
    "I believe successful education institutions should develop more than certificate holders. They should prepare capable professionals, entrepreneurs and future leaders who can contribute meaningfully to industry and society.",
  ],
  contactIntroduction:
    "I welcome conversations about executive leadership, institutional development, education, business growth, corporate partnerships and opportunities to create meaningful long-term value.",
};

export const impactMetrics: ImpactMetric[] = [
  {
    value: "15+",
    label: "Years",
    description: "Cross-sector professional experience",
  },
  {
    value: "5",
    label: "Education brands",
    description: "Group-level education business development",
  },
  {
    value: "11",
    label: "NOSS standards",
    description: "TVET development across three competency pathways",
  },
  {
    value: "21",
    label: "Employees",
    description: "Acting general management responsibility at Vennea",
  },
  {
    value: "60+",
    label: "SMEs",
    description: "Business advisory and client relationship portfolio",
  },
  {
    value: "100,000+",
    label: "Students",
    description: "Government-funded youth programme outreach",
  },
];

export const outreachEvidence: string[] = [
  "136 schools",
  "5 states",
  "RM680,000 programme funding",
];

export const expertise: Expertise[] = [
  {
    id: "01",
    title: "Institutional & Commercial Growth",
    description:
      "General Management, Education Business Development, Institutional Growth, Market Expansion, Revenue Diversification, Strategic Partnerships and Business Establishment.",
  },
  {
    id: "02",
    title: "Education & TVET Development",
    description:
      "Student Recruitment, Education Operations, JPK/NOSS Competency Frameworks, HRD Corp Training Provider Development, Corporate Training, Learning Pathways and Industry-Academia Collaboration.",
  },
  {
    id: "03",
    title: "Digital Business & Entrepreneurship",
    description:
      "Digital Marketing, B2B Business Development, Brand Positioning, SME Consulting, Customer Acquisition, Digital Customer Experience and Commercial Service Development.",
  },
  {
    id: "04",
    title: "People & Organisational Leadership",
    description:
      "Organisational Development, Workforce Planning, Multidisciplinary Leadership, Performance Management, Talent Development and Operating Structures.",
  },
  {
    id: "05",
    title: "Operational Excellence & Governance",
    description:
      "PMP Project Management, Lean Six Sigma, SOP Development, Continuous Improvement, Risk Management, Governance, Regulatory Compliance and Performance Accountability.",
  },
  {
    id: "06",
    title: "Government & International Relations",
    description:
      "Government Stakeholder Engagement, Institutional Partnerships, Public-Private Collaboration, International Programme Management, Education Outreach and Community Development.",
  },
];
