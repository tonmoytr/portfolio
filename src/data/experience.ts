export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export const experiences: WorkExperience[] = [
  {
    role: "Front-End Developer",
    company: "Ivey Solutions",
    period: "Oct 2023 - Dec 2025",
    location: "Remote, Full Time",
    highlights: [
      "Engineered responsive, cross-browser compliant web interfaces using HTML5, CSS3, and vanilla JavaScript to translate Figma layouts into pixel-perfect templates.",
      "Spearheaded the team's transition toward component-driven architecture by developing modular, reusable UI layouts using React.js during the final phases of tenure.",
      "Collaborated in an Agile remote environment using Git/GitHub for version control, code reviews, and meeting strict sprint deliverables."
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Git",
      "GitHub",
      "Figma",
      "Agile"
    ]
  }
];
