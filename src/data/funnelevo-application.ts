// Professional facts supplied by Muhammad Zahiruddin in the approved master brief.
export interface LeadershipDNA {
  id: string;
  value: string;
  title: string;
  narrative: string[];
  evidence: string[];
  principle: string;
}
export interface Vision {
  concept: string;
  tagline: string;
  supportingLine: string;
  narrative: string[];
  pillars: { id: string; title: string; description: string }[];
  outcome: string;
}
export interface GrowthEngine {
  id: string;
  name: string;
  proposition: string;
  opportunities: string[];
  objective: string;
  kpis: string[];
  operatingModel: string[];
  limitations: string;
  regulatoryConsiderations: string;
}
export interface RoadmapStage {
  days: string;
  title: string;
  subtitle: string;
  priorities: string[];
  deliverables: { name: string; description: string }[];
}
export interface ManagementPrinciple {
  id: string;
  title: string;
  description: string;
}
export interface ApplicationAnswer {
  id: string;
  question: string;
  blocks: { type: "heading" | "emphasis" | "paragraph"; text: string }[];
}
export interface ExecutiveClosing {
  headline: string;
  narrative: string[];
  statement: string;
  cta: string;
  supporting: string;
}
export interface ApplicationHero {
  eyebrow: string;
  title: string;
  headline: string;
  introduction: string[];
  disclaimer: string;
}
export interface RoadmapCommitment {
  introduction: string[];
  featured: string;
}

export const applicationHero: ApplicationHero = {
  eyebrow: "General Manager Candidature",
  title: "My Leadership Blueprint for FunnelEvo College",
  headline: "Not Just to Lead a College. To Build Its Next Growth Engine.",
  introduction: [
    "I see the General Manager's responsibility as more than maintaining enrolment, overseeing programmes and managing daily operations.",
    "It is about connecting education, talent, entrepreneurship, industry partnerships, digital technology and commercial opportunities into a sustainable institutional growth model.",
    "My career has equipped me with practical experience in college business development, education institution establishment, TVET competency frameworks, digital marketing operations, SME advisory, government relations and organisational leadership.",
    "I would bring these disciplines together to help develop FunnelEvo College's next stage of growth.",
  ],
  disclaimer: "Independent General Manager Candidature & Strategic Proposal",
};

export const leadershipDNA: LeadershipDNA[] = [
  {
    id: "01",
    value: "RARE BREED",
    title: "Build Beyond Conventional Boundaries",
    narrative: [
      "I bring education-sector experience together with commercial business development, TVET competency frameworks, digital agency operations, SME advisory, international programmes and organisational leadership.",
      "My advantage is the ability to connect these disciplines into practical business opportunities rather than managing them in isolation.",
    ],
    evidence: [
      "Business development across five education brands.",
      "Established Amjad Academy and Amjad Marketing.",
      "JPK/NOSS competency development.",
      "SME business advisory.",
      "International programme and corporate experience.",
    ],
    principle:
      "I connect disciplines to discover opportunities that conventional organisational boundaries may overlook.",
  },
  {
    id: "02",
    value: "TRUST THE PROCESS",
    title: "Build Systems That Can Scale",
    narrative: [
      "My approach combines PMP project discipline, Lean Six Sigma continuous improvement, workforce strategy, operating procedures, governance and measurable performance management.",
      "Sustainable growth requires more than ambition. It requires systems capable of maintaining quality, cost discipline and accountability as the business expands.",
    ],
    evidence: [
      "PMP qualification.",
      "Lean Six Sigma Black Belt.",
      "Organisational development.",
      "Workforce strategy.",
      "SOP and KPI development.",
      "Governance and operational improvement.",
    ],
    principle:
      "Growth becomes sustainable when ambition is supported by disciplined systems, measurable outcomes and operational accountability.",
  },
  {
    id: "03",
    value: "WIN TOGETHER",
    title: "Connect Talent, Industry & Opportunity",
    narrative: [
      "My career has involved collaborating with educational institutions, government agencies, business owners, international stakeholders, industry practitioners and multidisciplinary teams.",
      "I believe the strongest education businesses are those in which students, employers, partners, staff and the institution succeed together.",
    ],
    evidence: [
      "Educational institutional collaborations.",
      "Government-funded youth programmes.",
      "SME advisory relationships.",
      "International stakeholder engagement.",
      "Multidisciplinary team leadership.",
    ],
    principle:
      "The strongest growth ecosystems create value for every stakeholder, not merely the institution itself.",
  },
  {
    id: "04",
    value: "MAKE IT HAPPEN",
    title: "Convert Strategy Into Execution",
    narrative: [
      "I have participated in establishing new operating businesses, building teams, coordinating government-funded programmes and developing institutional partnerships.",
      "I favour clear ownership, disciplined execution, meaningful milestones and measurable outcomes over activity reporting without commercial results.",
    ],
    evidence: [
      "Established Amjad Academy and Amjad Marketing.",
      "Built a nine-member digital business team.",
      "Undertook Acting General Manager responsibilities involving 21 employees.",
      "Coordinated youth outreach reaching more than 100,000 students.",
      "Supported international greenfield business establishment.",
    ],
    principle:
      "Strategies become valuable when they are executed, measured and translated into meaningful outcomes.",
  },
];

export const vision: Vision = {
  concept: "FunnelEvo College 360°",
  tagline: "From Classroom to Commerce",
  supportingLine:
    "One Ecosystem. Multiple Revenue Streams. Nationwide Scalability.",
  narrative: [
    "FunnelEvo has an entrepreneurial education platform, a strong digital business orientation, business communities and technology capabilities.",
    "I see the opportunity to connect these strengths into a more comprehensive, industry-integrated college model.",
    "A college that does not depend solely on student enrolment fees, but strategically develops:",
  ],
  pillars: [
    {
      id: "1",
      title: "A REPEATABLE EDUCATION & CAREER PIPELINE",
      description:
        "Connecting education opportunities with schools, communities, employers, industry networks and appropriate government partnerships.",
    },
    {
      id: "2",
      title: "A CAREER-TO-COMPETENCY LEARNING ECOSYSTEM",
      description:
        "Developing practical, industry-relevant skills pathways for students, jobseekers, employees and aspiring entrepreneurs.",
    },
    {
      id: "3",
      title: "INDUSTRY-CONNECTED COMMERCIAL SERVICES",
      description:
        "Creating professionally supervised opportunities for practical learning while exploring commercially viable services for SMEs.",
    },
    {
      id: "4",
      title: "DEMAND-LED TVET & CORPORATE TRAINING EXPANSION",
      description:
        "Introducing training solutions based on actual workforce needs, regulatory suitability and demonstrable commercial demand.",
    },
    {
      id: "5",
      title: "FUNNELEVO GROUP ECOSYSTEM INTEGRATION",
      description:
        "Connecting education, entrepreneurship, business technology and industry partnerships to strengthen customer value and sustainable commercial growth.",
    },
  ],
  outcome:
    "An institution where education develops talent, talent strengthens businesses, and business relationships create new opportunities for the institution and its students.",
};

export const growthEngines: GrowthEngine[] = [
  {
    id: "01",
    name: "Education & Career Pipeline",
    proposition:
      "Turn institutional and community relationships into scalable student acquisition channels.",
    opportunities: [
      "School engagement.",
      "Education institution partnerships.",
      "Employer and industry networks.",
      "Community development programmes.",
      "Suitable parliamentary and state constituency collaboration.",
      "Career fairs.",
      "Digital recruitment funnels.",
      "Appropriate government and institutional partnerships.",
    ],
    objective:
      "Develop a repeatable and cost-effective pipeline for attracting, qualifying, enrolling and retaining students.",
    kpis: [
      "Qualified student leads.",
      "Enrolment conversion.",
      "Cost per enrolment.",
      "Recruitment channel performance.",
      "Student retention.",
      "Partnership contribution.",
    ],
    operatingModel: [],
    limitations:
      "Proposed partnerships require validation and agreement; they are not confirmed arrangements.",
    regulatoryConsiderations:
      "Appropriate government and institutional collaboration, subject to institutional approval.",
  },
  {
    id: "02",
    name: "Career-to-Competency Academy",
    proposition:
      "Develop practical skills pathways that connect career aspirations with industry requirements.",
    opportunities: [
      "Short professional courses.",
      "Workplace competency training.",
      "Employer-sponsored upskilling.",
      "Entrepreneurship programmes.",
      "Modular learning.",
      "Career transition programmes.",
      "Recognised skills pathways where approved.",
      "Corporate training.",
    ],
    objective:
      "Diversify education offerings through relevant programmes responding to genuine learning and workforce needs.",
    kpis: [
      "Programme enrolment.",
      "Course completion.",
      "Competency attainment.",
      "Repeat participation.",
      "Employer satisfaction.",
      "Programme contribution margins.",
    ],
    operatingModel: [],
    limitations:
      "Recognised skills pathways are subject to relevant approval. Programme accreditation must be verified.",
    regulatoryConsiderations:
      "Relevant education, skills-pathway and accreditation authorisations must be verified before programme launch.",
  },
  {
    id: "03",
    name: "Student-Powered SME Services",
    proposition:
      "Connect practical learning with real business needs through professionally supervised commercial services.",
    opportunities: [
      "Digital marketing support.",
      "Social media content.",
      "Business administration.",
      "HR documentation support.",
      "Recruitment coordination.",
      "Digital business operations.",
      "Marketing analytics.",
      "Other suitable professional services.",
    ],
    objective:
      "Explore commercially sustainable service activities that provide practical industry exposure and business value.",
    kpis: [
      "Paying SME clients.",
      "Customer retention.",
      "Service delivery cost.",
      "Contribution margins.",
      "Student participation.",
      "Service quality.",
      "Learning outcomes.",
    ],
    operatingModel: [
      "Create structured practical learning opportunities involving appropriately trained students, supervised by qualified professionals.",
      "Professional delivery teams must remain accountable for service quality, compliance, confidentiality and client satisfaction.",
    ],
    limitations:
      "Student work must be professionally supervised. Professional delivery teams remain accountable for service quality, confidentiality, compliance and client satisfaction.",
    regulatoryConsiderations:
      "All student participation must comply with applicable employment, internship, education, safety, professional-service and data-protection requirements. Students must not independently deliver regulated professional services without appropriate qualifications and supervision.",
  },
  {
    id: "04",
    name: "Demand-Driven TVET Expansion",
    proposition: "Develop the skills programmes that employers genuinely need.",
    opportunities: [
      "Industry workforce needs.",
      "Employer demand.",
      "JPK/NOSS applicability.",
      "Skills requirements.",
      "Trainer availability.",
      "Delivery readiness.",
      "Regulatory approval.",
      "Commercial feasibility.",
      "Industry partnerships.",
      "Student employability prospects.",
    ],
    objective:
      "Develop relevant and sustainable education offerings based on validated demand and institutional capabilities.",
    kpis: [
      "Validated programme demand.",
      "Training utilisation.",
      "Programme contribution.",
      "Employer engagement.",
      "Competency attainment.",
      "Graduate employability where supported by data.",
    ],
    operatingModel: [],
    limitations:
      "Programme expansion depends on validated employer demand, trainer availability, delivery readiness, commercial feasibility and relevant authorisation.",
    regulatoryConsiderations:
      "Evaluate JPK/NOSS applicability and regulatory approval. No programme is represented as approved before relevant authorisation.",
  },
  {
    id: "05",
    name: "FunnelEvo Ecosystem Integration",
    proposition:
      "Connect education, entrepreneurship, industry networks and business technology.",
    opportunities: [
      "Entrepreneurship education.",
      "Digital business training.",
      "Business coaching ecosystems.",
      "SME capability development.",
      "Corporate learning.",
      "Industry partnerships.",
      "Business technology.",
      "Applicable Kuasa OS capabilities.",
    ],
    objective:
      "Identify opportunities to deepen relationships, strengthen customer value and support sustainable institutional commercial growth.",
    kpis: [
      "Qualified referrals.",
      "Cross-business customer engagement.",
      "Conversion to paid programmes or services.",
      "Customer retention.",
      "Partner satisfaction.",
      "Contribution to institutional sustainability.",
    ],
    operatingModel: [],
    limitations:
      "Potential Kuasa OS integration requires discussion, feasibility assessment and management approval. No integration is represented as approved.",
    regulatoryConsiderations:
      "Any cross-business or technology initiative is subject to relevant approvals, suitability and operating requirements.",
  },
];

export const roadmap: RoadmapStage[] = [
  {
    days: "01–30",
    title: "ESTABLISH CONTROL",
    subtitle: "Understand the Business. Establish the Baseline.",
    priorities: [
      "Review available profit and loss information.",
      "Assess cash-flow position.",
      "Analyse student enrolment and revenue streams.",
      "Evaluate student acquisition costs.",
      "Review conversion performance.",
      "Assess programme economics.",
      "Review workforce and operational capacity.",
      "Assess training quality and compliance.",
      "Evaluate commercial partnerships.",
      "Identify underutilised capabilities.",
      "Establish performance priorities and accountability.",
    ],
    deliverables: [
      {
        name: "Executive Operating Baseline",
        description:
          "An evidence-based assessment of current commercial and operational performance.",
      },
      {
        name: "Commercial Performance Dashboard",
        description:
          "A structured view of enrolment, acquisition costs, programme economics and relevant KPIs.",
      },
      {
        name: "Opportunity and Risk Register",
        description:
          "Prioritised assessment of growth possibilities and operational constraints.",
      },
      {
        name: "Strategic Priority Map",
        description:
          "An initial framework for focused business development and operational improvement.",
      },
    ],
  },
  {
    days: "31–60",
    title: "ACTIVATE GROWTH",
    subtitle: "Align the Team. Validate the Opportunities.",
    priorities: [
      "Establish a cross-functional implementation team.",
      "Assign clear accountability.",
      "Prioritise commercially viable opportunities.",
      "Develop student acquisition pilots.",
      "Explore corporate training opportunities.",
      "Engage suitable partners.",
      "Evaluate SME service opportunities.",
      "Launch selected pilots subject to approval.",
      "Establish performance indicators.",
      "Monitor delivery capability and resources.",
    ],
    deliverables: [
      {
        name: "Growth Pilot Portfolio",
        description: "Prioritised pilot initiatives.",
      },
      {
        name: "Partnership Development Pipeline",
        description:
          "Structured engagement with prospective education, employer and industry partners.",
      },
      {
        name: "Market Validation Report",
        description: "Early evidence of demand and commercial interest.",
      },
      {
        name: "Operational Readiness Review",
        description: "Assessment of institutional capability to deliver.",
      },
    ],
  },
  {
    days: "61–100",
    title: "PROVE THE MODEL",
    subtitle: "Demonstrate Traction. Evaluate Sustainability.",
    priorities: [
      "Validate customer and employer demand.",
      "Assess early commercial traction.",
      "Evaluate pilot results.",
      "Monitor acquisition costs.",
      "Analyse programme and service unit economics.",
      "Assess delivery capability.",
      "Review customer satisfaction.",
      "Evaluate training outcomes.",
      "Identify sustainable opportunities.",
      "Prioritise evidence-based expansion.",
      "Prepare a medium-term institutional growth roadmap.",
    ],
    deliverables: [
      {
        name: "Commercial Validation Report",
        description:
          "Evidence of actual customer demand and pilot performance.",
      },
      {
        name: "Unit Economics Assessment",
        description:
          "Analysis of cost drivers, acquisition costs, pricing and contribution margins.",
      },
      {
        name: "Operational Capacity Assessment",
        description:
          "Evaluation of workforce, delivery capability and expansion readiness.",
      },
      {
        name: "Institutional Growth Roadmap",
        description: "A prioritised plan for sustainable growth.",
      },
    ],
  },
];

export const roadmapCommitment: RoadmapCommitment = {
  introduction: [
    "My first priority would be to establish a clear operating and financial baseline: student enrolment, acquisition costs, programme economics, cash flow, workforce capacity, training quality, compliance and existing commercial opportunities.",
    "From that baseline, I would move quickly to focused growth pilots, prioritising the most commercially promising student-acquisition, corporate training and industry-service opportunities.",
    "By Day 100, my objective would be to present evidence—not merely projections—of validated demand, early commercial traction, operating costs, delivery capability, measurable learning outcomes and a financially disciplined expansion roadmap.",
  ],
  featured:
    "My measure of success is not how many initiatives are announced, but how many create genuine value and can be sustained.",
};

export const day100Review: { question: string; description: string }[] = [
  {
    question: "Where are we now?",
    description: "What the operating and commercial evidence shows.",
  },
  {
    question: "Where is the opportunity?",
    description: "What customers, employers and the market actually need.",
  },
  {
    question: "What have we demonstrated?",
    description: "What the pilot initiatives have proven.",
  },
  {
    question: "What can we sustain?",
    description:
      "Which opportunities are operationally and financially viable.",
  },
  {
    question: "What should we do next?",
    description: "Which initiatives should scale, improve or stop.",
  },
];

export const commercialNarrative: string[] = [
  "My priority is to develop commercially sustainable revenue streams beyond conventional student enrolment, supported by validated market demand, responsible financial management and operational readiness.",
  "During my first 100 days, I would evaluate opportunities across corporate training, professional development, SME services, strategic partnerships and industry-connected education.",
  "Each opportunity would be assessed against its commercial potential, customer acquisition cost, operational requirements, contribution margin, institutional capacity and long-term scalability.",
  "I believe sustainable business development requires more than ambitious revenue projections. It requires understanding real customer demand, commercial costs, delivery quality, organisational capability and financial performance.",
];

export const commercialPrinciples: ManagementPrinciple[] = [
  {
    id: "01",
    title: "VALIDATE DEMAND",
    description: "Determine whether genuine customer and market demand exists.",
  },
  {
    id: "02",
    title: "UNDERSTAND THE ECONOMICS",
    description:
      "Evaluate pricing, acquisition costs, delivery costs and contribution margins.",
  },
  {
    id: "03",
    title: "EXECUTE WITH DISCIPLINE",
    description:
      "Test opportunities through focused pilots, appropriate systems and measurable indicators.",
  },
  {
    id: "04",
    title: "SCALE WHAT WORKS",
    description:
      "Expand proven opportunities while improving or discontinuing activities that do not create sustainable value.",
  },
];

export const commercialCommitment: string =
  "My commitment is to establish a commercially disciplined growth model backed by real performance data—not speculative revenue projections.";

export const applicationAnswers: ApplicationAnswer[] = [
  {
    id: "1",
    question:
      "Apakah perkara paling besar yang pernah anda bina atau kembangkan? Tunjukkan angka.",
    blocks: [
      {
        type: "emphasis",
        text: "Saya bukan sekadar mengurus organisasi. Saya mempunyai pengalaman membina institusi, membangunkan perniagaan dan menggerakkan ekosistem yang menghubungkan pendidikan, industri serta peluang komersial.",
      },
      {
        type: "paragraph",
        text: "Antara pencapaian utama saya ialah:",
      },
      {
        type: "heading",
        text: "1. Membangunkan dua entiti perniagaan — Amjad Academy dan Amjad Marketing.",
      },
      {
        type: "paragraph",
        text: "Saya menerajui penubuhan Amjad Academy sehingga memperoleh pendaftaran penyedia latihan HRD Corp, serta membangunkan portfolio TVET berasaskan 11 standard NOSS merangkumi tiga bidang kemahiran dan Tahap 1–5, dengan kerjasama JAIP dan MUIP.",
      },
      {
        type: "heading",
        text: "2. Membina pasukan digital dan komersial seramai sembilan orang.",
      },
      {
        type: "paragraph",
        text: "Melalui Amjad Marketing, saya membangunkan pasukan yang menyediakan perkhidmatan kepada syarikat kumpulan serta pelanggan perniagaan luar.",
      },
      {
        type: "heading",
        text: "3. Memikul tanggungjawab Acting General Manager dan menerajui pembangunan perniagaan pendidikan.",
      },
      {
        type: "paragraph",
        text: "Saya menyelaras operasi 21 pekerja merentasi empat jabatan di Vennea Marketing, selain pengalaman menerajui strategi pembangunan perniagaan bagi lima jenama pendidikan di Intellect Education Group.",
      },
      {
        type: "heading",
        text: "4. Menyelaras program pembangunan belia berskala besar dan mengurus hubungan PMKS.",
      },
      {
        type: "paragraph",
        text: "Saya menyelaras program Malaysia Against Bullies, melibatkan 136 sekolah, lima negeri, lebih 100,000 pelajar dan peruntukan kerajaan RM680,000.",
      },
      {
        type: "paragraph",
        text: "Saya juga pernah mengurus portfolio hubungan perniagaan dengan lebih 60 PMKS yang secara keseluruhan menggaji lebih 600 pekerja.",
      },
      {
        type: "heading",
        text: "Closing Statement",
      },
      {
        type: "emphasis",
        text: "Kekuatan saya bukan sekadar membina sesuatu dari kosong, tetapi menghubungkan manusia, kepakaran, pasaran dan sistem supaya organisasi mempunyai asas untuk terus berkembang.",
      },
    ],
  },
  {
    id: "2",
    question:
      "Jika dilantik sebagai GM FunnelEvo College, apakah yang akan anda lakukan dalam 100 hari pertama?",
    blocks: [
      {
        type: "emphasis",
        text: "Saya melihat FunnelEvo College bukan sekadar sebuah kolej TVET, tetapi sebuah enjin pertumbuhan yang berpotensi menghasilkan bakat, peluang perniagaan dan pendapatan berulang dalam ekosistem FunnelEvo Group.",
      },
      {
        type: "paragraph",
        text: "Visi saya ialah:",
      },
      {
        type: "heading",
        text: "FUNNELEVO COLLEGE 360°",
      },
      {
        type: "emphasis",
        text: "From Classroom to Commerce.",
      },
      {
        type: "emphasis",
        text: "One Ecosystem. Multiple Revenue Streams. Nationwide Scalability.",
      },
      {
        type: "paragraph",
        text: "Saya mahu mengaktifkan lima enjin pertumbuhan yang saling melengkapi:",
      },
      {
        type: "heading",
        text: "1. Education & Career Pipeline",
      },
      {
        type: "paragraph",
        text: "Membina saluran pengambilan pelajar melalui jaringan industri, sekolah, komuniti serta kerjasama Parlimen dan DUN yang bersesuaian.",
      },
      {
        type: "heading",
        text: "2. Career-to-Competency Academy",
      },
      {
        type: "paragraph",
        text: "Membangunkan latihan kemahiran pekerjaan berasaskan kompetensi dengan model pembelajaran fleksibel dan potensi pendapatan berulang.",
      },
      {
        type: "heading",
        text: "3. Student-Powered SME Services",
      },
      {
        type: "paragraph",
        text: "Menghubungkan pembelajaran praktikal dengan projek perniagaan sebenar melalui perkhidmatan PMKS yang diselia secara profesional.",
      },
      {
        type: "heading",
        text: "4. Demand-Driven TVET Expansion",
      },
      {
        type: "paragraph",
        text: "Mengenal pasti bidang kemahiran baharu berdasarkan keperluan industri, potensi pasaran dan kelulusan berkaitan.",
      },
      {
        type: "heading",
        text: "5. FunnelEvo Ecosystem Integration",
      },
      {
        type: "paragraph",
        text: "Mengoptimumkan sinergi pendidikan, latihan korporat, jaringan usahawan dan teknologi kumpulan, termasuk potensi Kuasa OS, bagi mewujudkan nilai komersial baharu.",
      },
      {
        type: "heading",
        text: "Pelan 100 Hari Saya",
      },
      {
        type: "emphasis",
        text: "Hari 1–30 | Establish Control",
      },
      {
        type: "paragraph",
        text: "Mengenal pasti kedudukan sebenar P&L, cash flow, enrolment, kos pemerolehan pelajar, kapasiti operasi dan peluang komersial yang belum dimanfaatkan.",
      },
      {
        type: "emphasis",
        text: "Hari 31–60 | Activate Growth",
      },
      {
        type: "paragraph",
        text: "Membentuk pasukan pelaksanaan, mengaktifkan kerjasama strategik dan memulakan projek rintis yang berpotensi menjana pengambilan pelajar serta pelanggan korporat.",
      },
      {
        type: "emphasis",
        text: "Hari 61–100 | Prove the Model",
      },
      {
        type: "paragraph",
        text: "Menguji permintaan pasaran, mendapatkan pelanggan berbayar apabila berdaya maju, menilai unit economics dan membentangkan pelan pengembangan berdasarkan prestasi sebenar.",
      },
      {
        type: "heading",
        text: "Komitmen Pengurusan",
      },
      {
        type: "paragraph",
        text: "Dalam tempoh 100 hari pertama, saya mahu memastikan pihak pengurusan mempunyai gambaran yang jelas mengenai kedudukan operasi, peluang pertumbuhan, kesediaan sumber dan potensi komersial yang telah dinilai secara objektif.",
      },
      {
        type: "paragraph",
        text: "Setiap inisiatif akan dinilai berdasarkan permintaan pasaran, kemampuan pelaksanaan, kos operasi, hasil sebenar dan keupayaan untuk dikembangkan secara mampan.",
      },
      {
        type: "paragraph",
        text: "Saya tidak mahu mengemukakan sasaran kewangan tanpa memahami keadaan sebenar institusi.",
      },
      {
        type: "paragraph",
        text: "Sebaliknya, keutamaan saya adalah untuk membina asas pertumbuhan yang boleh dibuktikan melalui data, hasil pelaksanaan dan disiplin kewangan.",
      },
      {
        type: "heading",
        text: "Closing Statement",
      },
      {
        type: "emphasis",
        text: "Matlamat saya bukan sekadar meningkatkan enrolment. Saya mahu membina sebuah sistem di mana pelajar memperoleh kemahiran, kemahiran menghasilkan nilai kepada industri, dan hubungan industri mewujudkan peluang pendapatan baharu kepada kolej.",
      },
    ],
  },
];

export const applicationEvidence: string[] = [
  "2 Entiti Perniagaan",
  "5 Jenama Pendidikan",
  "21 Pekerja",
  "100,000+ Pelajar Didekati",
];

export const experienceFit: ManagementPrinciple[] = [
  {
    id: "01",
    title: "DIRECT EDUCATION INDUSTRY EXPERIENCE",
    description:
      "Commercial leadership across five education brands, direct student recruitment experience and practical knowledge of education operations.",
  },
  {
    id: "02",
    title: "EXPERIENCE ESTABLISHING INSTITUTIONS",
    description:
      "Established Amjad Academy and secured HRD Corp training-provider registration.",
  },
  {
    id: "03",
    title: "TVET & SKILLS DEVELOPMENT",
    description:
      "Practical experience coordinating JPK/NOSS occupational competency pathways.",
  },
  {
    id: "04",
    title: "DIGITAL BUSINESS MANAGEMENT",
    description:
      "Established Amjad Marketing and undertook acting general management responsibilities at Vennea Marketing.",
  },
  {
    id: "05",
    title: "ENTREPRENEURSHIP & SME ECOSYSTEM",
    description:
      "Managed relationships with more than 60 SMEs and supported business improvement initiatives.",
  },
  {
    id: "06",
    title: "EXECUTION & ORGANISATIONAL DISCIPLINE",
    description:
      "PMP, Lean Six Sigma Black Belt, organisational development, operational governance and multidisciplinary team leadership.",
  },
];

export const experienceFitNarrative: string[] = [
  "My professional journey connects several capabilities directly relevant to an entrepreneurial education institution.",
  "I have worked in college business development, led commercial initiatives across education brands, established training and digital marketing operations, advised business owners, undertaken acting general management responsibilities and coordinated government-supported education programmes.",
  "These experiences have given me an understanding of both the institutional requirements of education and the commercial realities of operating a business.",
];

export const experienceFitConclusion: string =
  "I bring the perspective of an education business developer, the commercial understanding of an entrepreneur, and the operational discipline of an organisational leader.";

export const executiveClosing: ExecutiveClosing = {
  headline:
    "From a College That Teaches Business, to a College That Generates Business.",
  narrative: [
    "My ambition is not to introduce initiatives merely for the sake of appearing innovative.",
    "It is to connect the institution's people, programmes, partnerships, systems and commercial opportunities so that growth becomes measurable, repeatable and sustainable.",
    "I would approach the General Manager role with commercial curiosity, operational discipline, respect for education quality and a commitment to execution.",
    "I believe an education institution succeeds when it develops capable people, strengthens industry relationships and generates lasting value for the community and the organisation.",
  ],
  statement: "A Builder. Not a Caretaker.",
  cta: "Let's Discuss FunnelEvo College's Next Growth Chapter",
  supporting:
    "I would welcome the opportunity to discuss this leadership proposition, explore the assumptions behind the proposed growth model and determine where my experience could contribute the greatest value.",
};
