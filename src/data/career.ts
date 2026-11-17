// Professional facts supplied by Muhammad Zahiruddin in the approved master brief.
export interface CareerRecord {
  slug: string;
  employer: string;
  position: string;
  additionalRole: string | null;
  startDate: string;
  endDate: string;
  period: string;
  description: string;
  logoSlug: string | null;
  responsibilities: string[];
  achievements: string[];
  leadershipRelevance: string;
  portfolio: string[];
}
export const career: CareerRecord[] = [
  {
    slug: "tae-aerospace",
    employer: "TAE Aerospace Malaysia",
    position: "Head of People & Capability",
    additionalRole: null,
    startDate: "May 2025",
    endDate: "Present",
    period: "May 2025 – Present",
    description:
      "Australian aerospace and defence engineering organisation with greenfield Malaysian operations.",
    logoSlug: "tae-aerospace",
    responsibilities: [
      "Lead strategic people and capability initiatives supporting business establishment.",
      "Contribute to workforce strategy and organisational development.",
      "Coordinate manpower planning, talent acquisition and workforce mobilisation.",
      "Partner with Malaysian and Australian senior leadership.",
      "Support senior government and institutional engagement involving MINDEF, RMAF, PERHEBAT and relevant industry stakeholders.",
      "Coordinate international workforce development and mobility requirements, including Australian Subclass 407 Training Visa-related processes.",
      "Participate in governance, regulatory compliance, operational risk and workplace safety coordination.",
      "Support cross-functional operational requirements and supplier evaluations.",
    ],
    achievements: [
      "Contributed to the establishment and operational readiness of TAE Aerospace’s Malaysian operation.",
    ],
    leadershipRelevance:
      "International operations, organisational strategy, stakeholder management, business establishment and workforce development.",
    portfolio: [],
  },
  {
    slug: "yayasan-amjad",
    employer: "Yayasan Amjad / Amjad Group",
    position: "Business Development Director",
    additionalRole: null,
    startDate: "October 2023",
    endDate: "April 2025",
    period: "October 2023 – April 2025",
    description:
      "A business group with education, digital marketing, distribution, retail and community welfare operations.",
    logoSlug: "yayasan-amjad",
    responsibilities: [
      "Established Amjad Academy.",
      "Secured HRD Corp training-provider registration.",
      "Developed institutional and training operations.",
      "Coordinated 11 JPK/NOSS occupational standards across three competency pathways.",
      "Developed institutional collaboration involving JAIP and MUIP.",
      "Supported skills-based learning pathways, trainer sourcing and corporate learning opportunities.",
      "Explored SLDN and competency-based skills development.",
      "Established Amjad Marketing.",
      "Developed and led a nine-member digital marketing and technology team.",
      "Supported digital marketing and commercial services for internal and external clients.",
      "Contributed to group distribution and retail operations involving an approximately 120-agent sales network.",
      "Participated in education, community welfare and humanitarian initiatives.",
    ],
    achievements: [
      "Established Amjad Academy and Amjad Marketing.",
      "Secured HRD Corp training-provider registration.",
      "Coordinated 11 JPK/NOSS occupational standards across three competency pathways.",
      "Developed and led a nine-member digital marketing and technology team.",
    ],
    leadershipRelevance:
      "Institution building, TVET, business establishment, digital agency operations and commercial diversification.",
    portfolio: [
      "Amjad Academy.",
      "Amjad Marketing.",
      "Amjad Distributor.",
      "AD Laundry.",
      "AD Mart.",
      "Yayasan Amjad.",
    ],
  },
  {
    slug: "intellect-education-group",
    employer: "Intellect Education Group",
    position: "Business Development Director",
    additionalRole: null,
    startDate: "April 2021",
    endDate: "August 2023",
    period: "April 2021 – August 2023",
    description: "An education group involving five education brands.",
    logoSlug: "intellect-education-group",
    responsibilities: [
      "Led group-level business development strategy.",
      "Coordinated institutional commercial priorities.",
      "Supported student recruitment and market expansion.",
      "Developed recruitment channels and admissions partnerships.",
      "Worked with schools, government agencies, employers, industry stakeholders and recruitment agents.",
      "Coordinated education fairs, community outreach and market development.",
      "Supported academic, professional and skills-based programme opportunities.",
      "Explored corporate training and workforce development opportunities.",
    ],
    achievements: [
      "Provided group-level commercial and business development leadership involving five education brands.",
    ],
    leadershipRelevance:
      "Multi-institution commercial leadership, education market expansion and student acquisition.",
    portfolio: [
      "Putra Intelek International College.",
      "Malvern International Academy.",
      "Kasturi College International.",
      "Asia Pacific Academy.",
      "Portman College.",
    ],
  },
  {
    slug: "vennea-marketing",
    employer: "Vennea Marketing Sdn. Bhd.",
    position: "Assistant Vice President, Digital Experience",
    additionalRole: "Acting General Manager Responsibilities",
    startDate: "October 2020",
    endDate: "March 2021",
    period: "October 2020 – March 2021",
    description: "B2B digital marketing agency.",
    logoSlug: "vennea-marketing",
    responsibilities: [
      "Assumed Acting General Manager responsibilities during the Vice President's maternity leave.",
      "Coordinated a workforce of 21 employees.",
      "Oversaw Creative, Marketing, Business Development and Administration.",
      "Supported business continuity and organisation-wide commercial priorities.",
      "Managed digital marketing and customer experience operations.",
      "Coordinated agency activities involving up to 30 client accounts.",
      "Supported campaign development, client acquisition and service delivery.",
      "Monitored operational performance.",
    ],
    achievements: [
      "Undertook Acting General Manager responsibilities involving 21 employees across four departments during the Vice President’s maternity leave.",
    ],
    leadershipRelevance:
      "Acting general management, digital business, multidisciplinary team leadership and commercial operations.",
    portfolio: [],
  },
  {
    slug: "richworks-international",
    employer: "RichWorks International Sdn. Bhd.",
    position: "Client Account Manager",
    additionalRole: null,
    startDate: "January 2020",
    endDate: "September 2020",
    period: "January 2020 – September 2020",
    description:
      "SME business coaching and entrepreneurship development organisation.",
    logoSlug: "richworks-international",
    responsibilities: [
      "Managed relationships with more than 60 SMEs.",
      "Worked with a combined client workforce exceeding 600 employees.",
      "Supported entrepreneurs and business owners with organisational and business development.",
      "Provided advisory support involving SOPs, KPIs, OKRs and performance management.",
      "Conducted training needs analysis.",
      "Supported entrepreneurship, coaching and professional development programmes.",
    ],
    achievements: [
      "Managed relationships with more than 60 SMEs with a combined workforce exceeding 600 employees.",
    ],
    leadershipRelevance:
      "SME business development, entrepreneurship, client portfolio management and business advisory.",
    portfolio: [],
  },
  {
    slug: "martial-arts-brigade-global",
    employer: "Martial Arts Brigade Global",
    position: "Program Manager",
    additionalRole: null,
    startDate: "August 2017",
    endDate: "December 2019",
    period: "August 2017 – December 2019",
    description:
      "Youth empowerment, community development and vocational skills.",
    logoSlug: "martial-arts-brigade-global",
    responsibilities: [
      "Developed youth career empowerment initiatives.",
      "Engaged more than 50 martial arts clubs, associations and bodies across Malaysia and Indonesia.",
      "Coordinated Malaysia Against Bullies.",
      "Reached more than 100,000 students across 136 schools.",
      "Coordinated a programme supported by RM680,000 in government funding.",
      "Supported JPK/NOSS martial arts competency development.",
      "Collaborated with universities, government agencies and community organisations.",
      "Developed international and government stakeholder relationships.",
    ],
    achievements: [
      "Coordinated Malaysia Against Bullies, reaching more than 100,000 students in 136 schools across five states, supported by RM680,000 in government programme funding.",
    ],
    leadershipRelevance:
      "Large-scale government-funded programmes, TVET, youth development and institutional partnerships.",
    portfolio: [],
  },
  {
    slug: "mulawarman-center",
    employer: "Mulawarman Center, Indonesia",
    position: "Project Manager",
    additionalRole: null,
    startDate: "January 2017",
    endDate: "July 2017",
    period: "January 2017 – July 2017",
    description: "International education, youth and community development.",
    logoSlug: "mulawarman-center",
    responsibilities: [
      "Established and coordinated a 20-member multidisciplinary project team.",
      "Supported international education and youth entrepreneurship programmes.",
      "Coordinated activities within a broader portfolio exceeding 100 programmes.",
      "Supported educational outreach involving more than 20 schools in East Kalimantan.",
      "Engaged provincial and district government stakeholders.",
      "Managed project planning, resources and programme implementation.",
    ],
    achievements: [
      "Established and coordinated a 20-member multidisciplinary project team.",
      "Supported educational outreach involving more than 20 schools in East Kalimantan.",
    ],
    leadershipRelevance:
      "International education programmes, stakeholder relations and project leadership.",
    portfolio: [],
  },
  {
    slug: "putra-intelek-international-college",
    employer: "Putra Intelek International College",
    position: "Business Development Executive",
    additionalRole: null,
    startDate: "February 2015",
    endDate: "December 2016",
    period: "February 2015 – December 2016",
    description:
      "A private college delivering academic, professional and skills-based programmes.",
    logoSlug: "putra-intelek-international-college",
    responsibilities: [
      "Student recruitment.",
      "Institutional business development.",
      "Education marketing.",
      "School engagement.",
      "Recruitment-agent coordination.",
      "Education exhibitions.",
      "Student financing pathway support involving PTPTN, MARA and relevant institutions.",
      "Promotion of Risk Management, Logistics, IT, Entrepreneurship and Cybersecurity programmes.",
    ],
    achievements: [],
    leadershipRelevance:
      "Direct college recruitment and institutional commercial development.",
    portfolio: [],
  },
  {
    slug: "emgs",
    employer: "Education Malaysia Global Services",
    position: "Executive Assistant — Internship",
    additionalRole: null,
    startDate: "May 2013",
    endDate: "August 2013",
    period: "May 2013 – August 2013",
    description:
      "International education administration and institutional stakeholder coordination.",
    logoSlug: null,
    responsibilities: [
      "Supported international student applications.",
      "Assisted institutional account administration.",
      "Supported visa facilitation.",
      "Coordinated administrative communication involving Immigration and higher education authorities.",
    ],
    achievements: [],
    leadershipRelevance:
      "International education administration and institutional stakeholder coordination.",
    portfolio: [],
  },
  {
    slug: "akademi-pintas",
    employer: "Akademi Pintas",
    position: "Centre Coordinator",
    additionalRole: null,
    startDate: "January 2011",
    endDate: "January 2015",
    period: "January 2011 – January 2015",
    description:
      "Education centre operations and educational programme delivery.",
    logoSlug: "akademi-pintas",
    responsibilities: [
      "Coordinated education centre operations.",
      "Supported peak enrolment of approximately 700 students.",
      "Coordinated a workforce of 31 tutors.",
      "Developed learning modules, academic schedules and curricula.",
      "Delivered educational programmes.",
      "Supported registrations, operating licences and regulatory requirements.",
      "Coordinated educational outreach across more than 60 institutions.",
      "Contributed to programmes reaching more than 25,000 participants.",
    ],
    achievements: [
      "Supported peak enrolment of approximately 700 students and coordinated 31 tutors.",
      "Contributed to programmes reaching more than 25,000 participants.",
    ],
    leadershipRelevance:
      "Education centre management, student administration, curriculum delivery and academic operations.",
    portfolio: [],
  },
];
