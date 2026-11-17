// Professional facts supplied by Muhammad Zahiruddin in the approved master brief.
export interface Publication {
  cover: string;
  title: string;
  category: string;
  description: string;
  year: number;
  url: string;
}
export const publications: Publication[] = [];

export const publicationCategories: string[] = [
  "Education & TVET",
  "Business Strategy & Entrepreneurship",
  "Human Capital & Organisational Development",
  "Leadership & Management",
  "Risk, Governance & Operational Excellence",
];
