export const person = {
  name: "Abu Raihan Biswas",
  first: "Abu Raihan",
  last: "Biswas",
  short: "ARB",
  role: "Electronics & Communication Engineering",
  headline: "Electronics student in Kolkata, building toward embedded systems, VLSI, and research.",
  location: "Kolkata, West Bengal",
  phone: "9093647489",
  phoneHref: "tel:+919093647489",
  phoneDisplay: "+91 90936 47489",
  email: "aburaihanbiswas2@gmail.com",
  linkedin: "https://www.linkedin.com/in/abu-raihan-biswas-337141383",
  resumeHref: "/resume.pdf",
  status: "Open to internships and research",
  semester: "3rd semester",
  expected: "2029",
} as const;

export const profile = `Electronics and Communication Engineering student with an interest in electronics, embedded systems, VLSI and emerging technologies. Seeking opportunities to strengthen technical expertise through hands-on projects, research and industry experience, with a long-term interest in advanced studies and research.`;

export const interests = [
  "Electronics",
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
    label: "Programming",
    items: [{ name: "C", level: "Foundations" }],
  },
  {
    label: "Engineering tools",
    items: [
      { name: "MATLAB", level: "Foundations" },
      { name: "PCB design", level: "Coursework" },
    ],
  },
  {
    label: "Core ECE",
    items: [
      { name: "Analog electronics", level: "Foundations" },
      { name: "Network analysis", level: "Foundations" },
      { name: "Embedded systems", level: "Coursework" },
      { name: "VLSI", level: "Coursework" },
    ],
  },
] as const;

export const project = {
  title: "Smart Athlete Shoe",
  context: "Smart India Hackathon 2025",
  team: "ALIASTEIN",
  venue: "Student Innovation Challenge, Aliah University Internal Hackathon",
  outcome: "Qualified for the next round of Smart India Hackathon 2025",
  summary:
    "A wearable smart-shoe concept that watches how an athlete moves and loads the body, then flags injury risk before it becomes a problem.",
  points: [
    "Proposed a wearable smart-shoe designed to identify potential injury risks during athletic activity and give the wearer an early warning.",
    "Centered the concept on sensor-based monitoring of movement and physical loading for preventive injury detection.",
    "Built and pitched the idea with Team ALIASTEIN at the Aliah University internal hackathon for Smart India Hackathon 2025.",
    "The team qualified for the next round of the national selection process.",
  ],
} as const;

export const achievement = {
  title: "Smart India Hackathon 2025 — next round",
  detail: "Qualified with Team ALIASTEIN after the Aliah University internal selection.",
} as const;

export const certifications = [
  {
    title: "VLSI Course",
    issuer: "Simplilearn SkillUp",
    date: "June 2026",
    kind: "Course",
  },
  {
    title: "Embedded Systems Course",
    issuer: "Simplilearn SkillUp",
    date: "May 2026",
    kind: "Course",
  },
  {
    title: "PCB Design Course",
    issuer: "Simplilearn SkillUp",
    date: "May 2026",
    kind: "Course",
  },
  {
    title: "Introduction to MATLAB: Become a Machine Learning Expert",
    issuer: "Simplilearn SkillUp",
    date: "March 2026",
    kind: "Course",
  },
  {
    title: "Explore Electrical Engineering Job Simulation",
    issuer: "GE Aerospace / Forage",
    date: "July 2026",
    kind: "Simulation",
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte / Forage",
    date: "July 2026",
    kind: "Simulation",
  },
  {
    title: "Monitoring Water Quality in Lakes and Coastal Regions Using STREAM",
    issuer: "NASA ARSET",
    date: "February 2026",
    kind: "Training",
  },
  {
    title: "AI Tools & Claude Workshop",
    issuer: "Be10X",
    date: "August 2026",
    kind: "Workshop",
  },
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
