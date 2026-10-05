export const person = {
  name: "Abu Raihan Biswas",
  first: "Abu Raihan",
  last: "Biswas",
  short: "ARB",
  role: "ECE Student @ Aliah University",
  headline:
    "NASA ARSET Certified · CitiesRISE Fellow · Electronics & Emerging Technology · 8K+ LinkedIn Followers",
  location: "Kolkata, West Bengal",
  phone: "9093647489",
  phoneHref: "tel:+919093647489",
  phoneDisplay: "+91 90936 47489",
  email: "aburaihanbiswas2@gmail.com",
  linkedin: "https://www.linkedin.com/in/abu-raihan-biswas-337141383",
  resumeHref: "/resume.pdf",
  status: "Open to internships, research, and opportunities",
  semester: "B.Tech in Electronics & Communication Engineering",
  expected: "2029",
} as const;

export const profile = `Electronics and Communication Engineering student at Aliah University with interests in semiconductor fabrication, semiconductor devices, semiconductor packaging, embedded systems, VLSI and emerging technologies. Selected as a CitiesRISE Nature-Youth Fellow for the Kolkata cohort in 2026 and selected for Smart India Hackathon 2026. Also 8K+ followers on LinkedIn, with certifications and training listed below.`;

export const interests = [
  "Semiconductor fabrication",
  "Semiconductor devices",
  "Semiconductor packaging",
  "Embedded systems",
  "VLSI",
  "Emerging technologies",
] as const;

export const education = [
  {
    id: "btech",
    program: "B.Tech in Electronics & Communication Engineering",
    school: "Aliah University, Kolkata",
    board: null,
    period: "2025–2029",
    meta: null,
    result: null,
    current: true,
  },
  {
    id: "hs",
    program: "Higher Secondary",
    school: "Tikarbaria KN High School",
    board: null,
    period: "2022–2024",
    meta: null,
    result: null,
    current: false,
  },
  {
    id: "sec",
    program: "Secondary",
    school: "Kupila MIOS SR Madrasah",
    board: null,
    period: "2011–2022",
    meta: null,
    result: null,
    current: false,
  },
] as const;

export const skillGroups = [
  {
    label: "Semiconductor",
    items: [
      { name: "Semiconductor fabrication", level: "Focus" },
      { name: "Semiconductor devices", level: "Focus" },
      { name: "Semiconductor packaging", level: "Focus" },
    ],
  },
  {
    label: "Electronics",
    items: [
      { name: "Embedded systems", level: "Coursework" },
      { name: "PCB design", level: "Coursework" },
      { name: "VLSI", level: "Coursework" },
    ],
  },
  {
    label: "Engineering",
    items: [
      { name: "Electronics & communication", level: "Academic" },
      { name: "Emerging technologies", level: "Interest" },
      { name: "Digital marketing", level: "Certified" },
    ],
  },
] as const;

export const project = {
  title: "Smart India Hackathon 2026",
  context: "Smart India Hackathon 2026",
  team: "ALIASTEIN",
  venue: "Aliah University Internal Hackathon",
  outcome: "Selected for Smart India Hackathon 2026",
  summary:
    "Selected with Team ALIASTEIN through the Aliah University internal hackathon pathway.",
  points: [
    "Selected for Smart India Hackathon 2026.",
    "Participated with Team ALIASTEIN through the Aliah University internal hackathon.",
    "Presented a wearable smart-shoe concept focused on monitoring movement and physical loading.",
    "The concept was aimed at supporting earlier identification of potential injury risk during athletic activity.",
  ],
} as const;

export const achievement = {
  title: "Smart India Hackathon 2026 — Selected",
  detail: "Selected with Team ALIASTEIN through the university hackathon pathway.",
} as const;

export const achievements = [
  {
    title: "CitiesRISE Fellowship",
    detail: "Nature-Youth Fellow, Kolkata cohort, 2026.",
    kind: "Fellowship",
  },
  {
    title: "Smart India Hackathon 2026",
    detail: "Selected with Team ALIASTEIN.",
    kind: "Hackathon",
  },
  {
    title: "NWM2SF-2026 Workshop",
    detail:
      "Emerging Microelectronics, MEMS, SiC and Flexible Electronics: Technologies, Applications and Opportunities for Viksit Bharat 2047 (NWM2SF-2026)",
    kind: "Workshop",
  },
  {
    title: "LinkedIn",
    detail: "8K+ followers.",
    kind: "Community",
  },
] as const;

export const certifications = [
  {
    title: "NASA’s Applied Remote Sensing Training (ARSET) Program",
    issuer: "NASA ARSET",
    date: "2026",
    kind: "Training",
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte / Forage",
    date: "2026",
    kind: "Simulation",
  },
  {
    title: "Embedded System Course",
    issuer: "Course",
    date: "2026",
    kind: "Course",
  },
  {
    title: "PCB Design Course",
    issuer: "Course",
    date: "2026",
    kind: "Course",
  },
  {
    title: "Digital Marketing",
    issuer: "Course",
    date: "2026",
    kind: "Course",
  },
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Highlights" },
  { href: "#achievements", label: "Achievements" },
  { href: "#skills", label: "Skills" },
  { href: "#training", label: "Training" },
  { href: "#contact", label: "Contact" },
] as const;
