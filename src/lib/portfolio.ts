export const person = {
  name: "Abu Raihan Biswas",
  first: "Abu Raihan",
  last: "Biswas",
  short: "ARB",
  role: "ECE Student @ Aliah University",
  headline: "CitiesRISE Fellow · NASA ARSET Certified · Electronics & Emerging Technology",
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

export const profile = `Electronics and Communication Engineering student at Aliah University with interests in semiconductor fabrication, semiconductor devices, semiconductor packaging, embedded systems, VLSI and emerging technologies. CitiesRISE Nature-Youth Fellow for the Kolkata cohort in 2026 and selected for Smart India Hackathon 2026. Also active on LinkedIn with 8K+ followers.`;

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
    school: "Aliah University",
    board: null,
    period: "Expected 2029",
    meta: "3rd semester",
    result: "CGPA 7.6 / 10",
    current: true,
  },
  {
    id: "hs",
    program: "Higher Secondary (Science)",
    school: "WBCHSE",
    board: "West Bengal Council of Higher Secondary Education",
    period: "2024",
    meta: null,
    result: "85.2%",
    current: false,
  },
  {
    id: "sec",
    program: "Secondary",
    school: "WBBSE",
    board: "West Bengal Board of Secondary Education",
    period: "2022",
    meta: null,
    result: "88%",
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
    title: "LinkedIn",
    detail: "8K+ followers on LinkedIn.",
    kind: "Community",
  },
] as const;

export const certifications = [
  {
    title:
      "Emerging Microelectronics, MEMS, SiC and Flexible Electronics: Technologies, Applications and Opportunities for Viksit Bharat 2047 (NWM2SF-2026)",
    issuer: "Aliah University, Kolkata",
    date: "Sep 2026",
    kind: "Workshop",
  },
  {
    title: "National-Space Day Quiz 2026",
    issuer: "MyGov India",
    date: "Sep 2026",
    kind: "Quiz",
  },
  {
    title: "Quiz on India's Semiconductor Journey",
    issuer: "MyGov India",
    date: "Sep 2026",
    kind: "Quiz",
  },
  {
    title: "AI Tools & Claude Workshop",
    issuer: "Be10x",
    date: "Aug 2026",
    kind: "Workshop",
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
    date: "Jul 2026",
    kind: "Simulation",
  },
  {
    title: "Explore Electrical Engineering Job Simulation",
    issuer: "GE Aerospace",
    date: "Jul 2026",
    kind: "Simulation",
  },
  {
    title: "VLSI Course",
    issuer: "Simplilearn",
    date: "2026",
    kind: "Course",
  },
  {
    title: "PCB design course",
    issuer: "Simplilearn",
    date: "2026",
    kind: "Course",
  },
  {
    title: "Embedded system course",
    issuer: "Simplilearn",
    date: "2026",
    kind: "Course",
  },
  {
    title: "NASA’s Applied Remote Sensing Training (ARSET) Program",
    issuer: "NASA - National Aeronautics and Space Administration",
    date: "Feb 2026",
    kind: "Training",
  },
  {
    title: "Become a Machine Learning Expert: Introduction to MATLAB",
    issuer: "Simplilearn",
    date: "Mar 2026",
    kind: "Course",
  },
  {
    title: "Digital marketing",
    issuer: "Zaptriq Ai",
    date: "Mar 2026",
    kind: "Course",
  },
  {
    title: "Get started with Databricks for Generative AI",
    issuer: "Databricks",
    date: "Dec 2025",
    kind: "Course",
  },
  {
    title: "Introduction to generative AI Studio by Google",
    issuer: "Google",
    date: "2025",
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
