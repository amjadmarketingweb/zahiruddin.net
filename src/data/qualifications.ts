// Professional facts supplied by Muhammad Zahiruddin in the approved master brief.
export interface Credential {
  name: string;
  institution?: string;
  year: number;
}
export interface QualificationGroup {
  category: string;
  credentials: Credential[];
}
export const qualificationGroups: QualificationGroup[] = [
  {
    category: "Academic Qualifications",
    credentials: [
      {
        name: "Bachelor of Business Administration (BBA)",
        institution: "Charter University",
        year: 2019,
      },
      {
        name: "Diploma in Risk Management",
        institution: "Putra Intelek International College",
        year: 2015,
      },
      {
        name: "Sijil Pelajaran Malaysia",
        institution: "Victoria Institution, Kuala Lumpur",
        year: 2010,
      },
    ],
  },
  {
    category: "Leadership & Strategic Management",
    credentials: [
      {
        name: "SHRM Senior Certified Professional (SHRM-SCP)",
        year: 2026,
      },
      {
        name: "Project Management Professional (PMP)",
        year: 2026,
      },
      {
        name: "Lean Six Sigma Black Belt",
        year: 2026,
      },
      {
        name: "Lean Six Sigma Green Belt",
        year: 2025,
      },
      {
        name: "ICPM Certified Supervisor",
        year: 2020,
      },
      {
        name: "Certified Risk Associate (CRA)",
        year: 2011,
      },
    ],
  },
  {
    category: "Education, Training & TVET",
    credentials: [
      {
        name: "HRD Corp Train-the-Trainer (TTT)",
        year: 2023,
      },
      {
        name: "JPK Certified Trainer",
        year: 2023,
      },
      {
        name: "Anti-Sexual Harassment Training of Trainers",
        year: 2023,
      },
      {
        name: "Human Resource Management Professional Development",
        year: 2025,
      },
    ],
  },
  {
    category: "Risk, Safety & Governance",
    credentials: [
      {
        name: "NIOSH Safety and Health Officer Training",
        year: 2017,
      },
      {
        name: "Occupational Safety and Health Coordinator",
        year: 2025,
      },
    ],
  },
];
