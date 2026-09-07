export const profile = {
  name: "Mayank Somani",
  email: "mayank06011999@gmail.com",
  github: "https://github.com/somanimk",
  linkedin: "https://www.linkedin.com/in/mayanksomani/",
  resume: "/Mayank_Somani_Resume.pdf",
};

export const navigation = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Selected work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
];

export const assignments = [
  {
    name: "Clari Align",
    context: "Salesloft x Clari · B2B deal collaboration",
    date: "Feb 2026 – Present",
    summary: "Own frontend feature delivery for shared deal plans, from component design and data-flow conventions to implementation and review.",
    bullets: [
      "Delivered Milestone planning, section navigation, and organization hierarchy features for enterprise users.",
      "Defined reusable component architecture, state-management and data-fetching conventions, and guided engineers through design and code reviews.",
      "Used Claude Code with MCP integrations for codebase analysis, implementation planning, and testing.",
    ],
    tags: ["React", "TypeScript", "Frontend architecture", "Technical delivery"],
  },
  {
    name: "DoseSpot",
    context: "Healthcare SaaS · E-prescribing",
    date: "Jul 2025 – Jan 2026",
    summary: "Developed and stabilized prescription workflows, with responsibility for shared components, type safety, and engineering quality.",
    bullets: [
      "Built shared UI components and JS/TS libraries adopted by multiple frontend teams.",
      "Investigated critical issues in multi-step prescription workflows and improved data fetching and rendering performance.",
      "Led JavaScript-to-TypeScript migration across the Nx monorepo, expanded Jest unit and integration coverage, and supported QA and code reviews.",
    ],
    tags: ["React", "TypeScript", "Nx", "Mantine UI", "Jest"],
  },
];

export const earlierExperience = [
  {
    company: "KollegeApply", role: "Software Engineer", date: "Jan – Jun 2025",
    description: "Developed the education platform and CMS, covering API integration, reusable components, performance, and SEO. Supported interns and associates through code reviews and collaboration with the Tech Lead.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    company: "HyperCharge Studio", role: "Frontend Developer", date: "Dec 2022 – Jan 2025",
    description: "Developed learning and collaboration applications with shared UI components and API integration. Contributed to an online learning platform and built frontend and backend functionality for DevStalk.",
    tags: ["React", "Next.js", "Redux", "Socket.io"],
  },
];

// Professional case studies describe contributions supported by the latest resume.
// No client screenshots, proprietary code, or unverified demo URLs are published.
export const selectedWork = [
  {
    number: "01",
    type: "Enterprise collaboration · Bounteous x Accolite",
    title: "Clari Align",
    problem: "Coordinate shared deal plans and reporting structures across complex enterprise workflows.",
    approach: "Built Milestone scheduling with drag-and-drop, inline auto-save, collaboration controls, and four deal-health states. Implemented a feature-flagged navigator derived from live plan blocks and a permission-aware organization chart using Clari’s design system.",
    outcome: "Delivered planning, navigation, and hierarchy-management features while defining reusable components, state-management conventions, and data-fetching patterns.",
    tags: ["React", "TypeScript", "Design systems", "Frontend architecture"],
  },
  {
    number: "02",
    type: "Healthcare SaaS · Bounteous x Accolite",
    title: "DoseSpot",
    problem: "Improve reliability in multi-step prescription workflows and reduce unnecessary data fetching.",
    approach: "Developed and stabilized RX Change and RX Refill, built shared Mantine components, and led the JavaScript-to-TypeScript migration across an Nx monorepo. Applied caching and rendering optimizations and expanded Jest coverage.",
    outcome: "Reduced unnecessary API calls by 25% and delivered shared components adopted by multiple frontend teams.",
    tags: ["React", "TypeScript", "Nx", "Mantine UI", "Jest"],
  },
  {
    number: "03",
    type: "Education platform & CMS",
    title: "KollegeApply",
    problem: "Support dynamic content and filtering across an education platform and its CMS while improving performance and discoverability.",
    approach: "Built Next.js and TypeScript modules with API integration, dynamic forms, and reusable theme-compatible components. Applied SSR/SSG, lazy loading, code splitting, and memoization.",
    outcome: "Delivered CMS and public-site improvements, reduced component redundancy, and supported engineers through code reviews.",
    tags: ["Next.js", "TypeScript", "SSR / SSG", "Tailwind CSS", "PostgreSQL"],
  },
  {
    number: "04",
    type: "Learning platforms & developer collaboration",
    title: "HyperCharge Studio",
    problem: "Support interactive learning and real-time developer collaboration.",
    approach: "Built video, quiz, and progress-tracking components using React and Redux. Developed DevStalk’s frontend and Node.js/Express backend with MongoDB and Socket.io.",
    outcome: "Contributed to a learning platform serving 5,000+ users and delivered real-time collaboration functionality for DevStalk.",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
  },
];

export const expertise = [
  {
    title: "Web architecture",
    description: "React, TypeScript, and Next.js applications built around reusable components, shared libraries, and design-system integration.",
    tags: ["React", "TypeScript", "Next.js", "Nx"],
  },
  {
    title: "State, data & integration",
    description: "State-management conventions, REST/GraphQL integration, caching, and API-backed workflows for interactive, data-heavy applications.",
    tags: ["Redux", "React Query", "REST APIs", "GraphQL"],
  },
  {
    title: "Performance & reliability",
    description: "Rendering optimization, SSR/SSG, TypeScript migrations, Jest testing, and workflow debugging to improve responsiveness and reliability.",
    tags: ["SSR / SSG", "Jest", "Type safety", "Debugging"],
  },
  {
    title: "Technical delivery",
    description: "Design and code reviews, cross-team component adoption, and QA collaboration. AI-assisted analysis, planning, and testing with Claude Code and MCP integrations.",
    tags: ["Code reviews", "Claude Code", "MCP", "Cursor"],
  },
];
