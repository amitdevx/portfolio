// Navigation and portfolio content configuration
export const navigationLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/amit-divekar', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#skills', label: 'Skills' },
  { href: '/blogs', label: 'Blog' },
  { href: '/notes', label: 'Notes' },
  { href: '/#contact', label: 'Contact' },
];

export const heroData = {
  name: "Amit Divekar",
  title: "Cloud Architect & Full-Stack Engineer from India",
  tagline: "I architect resilient cloud systems and engineer high-performance web applications.",
  bio: "Building the infrastructure for tomorrow. Specializing in highly scalable AWS/GCP architectures, Kubernetes orchestration, and AI-integrated Next.js ecosystems. Code that ships, systems that scale.",
  contactLink: "#projects"
};

export const aboutData = {
  bio: "Cloud Architect and Full-Stack Engineer who designs resilient distributed systems and ships production-grade web applications. Specializing in AWS/GCP infrastructure, container orchestration, and AI-powered developer tooling - with a track record of building systems that handle real-world scale.",
  stats: [
    { label: "Projects Shipped", value: "12+" },
    { label: "Cloud Deployments", value: "AWS & GCP" },
    { label: "Technologies", value: "25+" },
    { label: "Blog Articles", value: "16+" },
  ],
  education: {
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor's Degree in Computer Science",
    duration: "2024 - 2027",
    sgpa: "SGPA: 8.36/10.0",
    courses: [
      "Programming Fundamentals", "Data Structures and Algorithms",
      "Database Management Systems", "Computer Networks", "Operating Systems"
    ]
  },
  hobbies: [
    "Web and software development",
    "Solving puzzles and logic games like Chess",
    "Digital art, illustration, and concept design",
    "Exploring new digital tools for productivity"
  ]
};

export const experienceData = [
  {
    company: "Electronic Arts (EA)",
    role: "Software Engineering Virtual Experience",
    duration: "Completed: Feb 2024",
    description: "Crafted a feature proposal, designed a C class diagram, and fixed a significant bug in the EA Sports College Football codebase, enhancing performance by integrating a more efficient data structure."
  },
  {
    company: "Accenture UK",
    role: "Developer and Technology Virtual Experience",
    duration: "Completed: 2025",
    description: "Gained a thorough understanding of the SDLC, researched emerging tech trends like DevOps, compared Waterfall vs. Agile, and designed/optimized a Python program to improve functionality."
  },
  {
    company: "Scaler",
    role: "Software Development Program",
    duration: "Apr 2024 - Jul 2024",
    description: "Participated in structured technical learning focused on development fundamentals and practiced problem-solving and programming as a new dev.",
    isInternship: true
  }
];

export const projectsData = [
  {
    title: "md2pdf",
    description: "Production-grade open-source Markdown to PDF rendering engine for Node.js that converts Markdown into high-fidelity PDFs using Playwright, Chromium, and the Unified processing pipeline.",
    technologies: ["Node.js", "TypeScript", "Chromium", "Playwright", "Markdown", "Unified", "npm"],
    githubLink: "https://github.com/amitdevx/md2pdf",
    liveLink: "https://www.npmjs.com/package/@amitdevx/md2pdf",
    docLink: "/projects/md2pdf",
    category: "Open Source"
  },
  {
    title: "SelfHealOps",
    description: "An autonomous, self-healing DevOps agent designed to automatically classify, analyze, and remediate CI/CD pipeline failures and infrastructure issues using a hierarchical multi-agent system.",
    technologies: ["Python", "NVIDIA NIM", "LangGraph", "FastAPI", "Redis", "Prometheus", "Grafana"],
    githubLink: "https://github.com/amitdevx/self-healops",
    docLink: "/projects/self-healops",
    category: "Featured"
  },
  {
    title: "SchemaSense AI",
    description: "AI-powered database documentation platform that auto-generates schema docs, maps table relationships, and provides a real-time chat interface for querying your database structure in plain English. Built with prompt injection defense, intelligent caching (56x speedup), and streaming AI responses.",
    technologies: ["Next.js", "FastAPI", "Python", "TypeScript", "PostgreSQL", "DeepSeek-V3", "OpenRouter", "SQLite"],
    githubLink: "https://github.com/amitdevx/schemasense",
    liveLink: "https://schemasense.amitdevx.tech",
    docLink: "/projects/schemasense",
    category: "Featured"
  },
  {
    title: "Professor Profiler",
    description: "An advanced multi-agent system that reverse-engineers exam papers to decode professor psychology and generate optimized study strategies.",
    technologies: ["Python 3.11", "Gemini 2.0 Pro", "Multi-Agent Systems", "Google ADK", "Pydantic"],
    githubLink: "https://github.com/amitdevx/Professor_Profiler",
    docLink: "/projects/professor-profiler",
    category: "Featured"
  },
  {
    title: "EatInformed",
    description: "An AI-driven platform for instant nutrition analysis from food label images, built with Next.js, Genkit, and Google Gemini, featuring a modern UI with Tailwind CSS.",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Genkit", "Gemini", "Llama 3.2"],
    githubLink: "https://github.com/amitdevx/Eatinformed",
    liveLink: "https://eatinformed.amitdevx.tech/",
    docLink: "/projects/eatinformed",
    category: "Experiment"
  },

  {
    title: "2FA Password Protector",
    description: "A Flask-based authentication system with three layers of security: login, PIN, and Two-Factor Authentication (2FA), using SQLite and cryptography for secure data handling.",
    technologies: ["Python", "Flask", "SQLite", "Cryptography"],
    githubLink: "https://github.com/amitdevx",
    category: "Experiment"
  },
  {
    title: "Cloud File Uploader",
    description: "A secure file storage system similar to Google Drive, developed with Node.js and SQLite, allowing users to store and manage files efficiently in a cloud-based environment.",
    technologies: ["Node.js", "SQLite"],
    githubLink: "https://github.com/amitdevx/FileFlow",
    category: "Experiment"
  }
];

export const certificationsData = [
  {
    title: "Career Essentials in Cybersecurity",
    issuer: "Microsoft and LinkedIn",
    skills: ["Threat & Vulnerability Management", "Cybersecurity", "Information Security Awareness"],
    link: "https://www.linkedin.com/learning/certificates/16c6ab131a12d6d3a28080405cb38e3101483950290ad29c6b5650840398a147",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    title: "Trust and Security with Google Cloud",
    issuer: "Google",
    skills: ["Cloud Security", "Google Cloud Platform", "Trust Infrastructure"],
    link: "https://www.cloudskillsboost.google/public_profiles/40d340d4-c84b-4413-b630-69f4ba00ce20/badges/17592342",
    companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
  },
  {
    title: "Software Engineering",
    issuer: "Electronic Arts (EA)",
    skills: ["Game Engine Technology", "Data Structures", "Future Design", "Object Oriented Design"],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_iqBjeEZPS8ycoo8nH_1739022094480_completion_certificate.pdf",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Electronic-Arts-Logo.svg"
  },
  {
    title: "Developer and Technology",
    issuer: "Accenture UK & Ireland",
    skills: ["Agile & Waterfall Methodologies", "SDLC", "DevOps"],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_iqBjeEZPS8ycoo8nH_1735299487533_completion_certificate.pdf",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"
  },
  {
    title: "IP Addressing and Subnetting",
    issuer: "GeeksforGeeks",
    skills: ["IP Addressing", "Subnetting", "Internet Protocol Suite (TCP/IP)", "Internet Protocol (IP)"],
    link: "https://media.geeksforgeeks.org/courses/certificates/9f02af57d75cc46e928c771bfbcdfe62.pdf",
    companyLogo: "https://www.svgrepo.com/show/330494/geeksforgeeks.svg"
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    skills: ["Analytical Skills", "Data Analysis"],
    link: "#",
    companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
  },
  {
    title: "HackFest Certificate",
    issuer: "GDG New Delhi",
    skills: ["Hackathon", "Problem Solving"],
    link: "https://www.creadefy.com/verify/CERT-3635E29E-3AD6-49F4",
    companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
  }
];

export const skillsData = {
  categories: [
    {
      name: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
        { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
        { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
        { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
      ]
    },
    {
      name: "AI & Multi-Agent Systems",
      icon: "BrainCircuit",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        { name: "LangGraph", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Genkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
        { name: "Pydantic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Google ADK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
        { name: "Multi-Agent Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg" },
      ]
    },
    {
      name: "Frontend",
      icon: "Palette",
      skills: [
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
      ]
    },
    {
      name: "Backend",
      icon: "ServerCog",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      ]
    },
    {
      name: "Tools",
      icon: "Wrench",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
        { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
      ]
    },
  ],
  // Keep flat list for marquee
  technical: [
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
    { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
    { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
    { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "LangGraph", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Genkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    { name: "Pydantic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Google ADK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
    { name: "Multi-Agent Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
    { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
  ],
  soft: [
    "Problem Solving",
    "Adaptability",
    "Documentation",
    "Research Skills"
  ]
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/divekar-amit",
  github: "https://github.com/amitdevx",
  kaggle: "https://www.kaggle.com/divekaramit",
  x: "https://x.com/amitdevx_",
  instagram: "https://instagram.com/amitdevx",
  emailUser: "admin",
  emailDomain: "amitdevx.tech"
};
