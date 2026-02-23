// Navigation and portfolio content configuration
export const navigationLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience'},
  { href: '/#projects', label: 'Projects' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#skills', label: 'Skills' },
  { href: '/blogs', label: 'Blog' },
  { href: '/notes', label: 'Notes' },
  { href: '/#contact', label: 'Contact' },
];

export const heroData = {
  name: "Amit Divekar",
  title: "Full-Stack Software Engineer | Cloud & DevOps Specialist | AI Solutions",
  bio: "Full-Stack Software Engineer with expertise in Cloud Architecture (AWS, Google Cloud, Azure), DevOps practices, and AI-driven solutions. I build scalable applications using modern technologies like React, Next.js, TypeScript, and Docker.",
  contactLink: "#contact"
};

export const aboutData = {
  bio: "Amit Divekar is a computer science student and software engineer exploring AI-powered features and DevOps practices to ship reliable software.",
  education: {
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor's Degree in Computer Science",
    duration: "2024 - 2027",
    cgpa: "CGPA: 8.36/10.0",
    courses: [
      "Programming Fundamentals", "Data Structures and Algorithms", 
      "Database Management Systems", "Computer Networks", "Operating Systems"
    ]
  },
  hobbies: [
    "Web and software development",
    "Solving puzzles and logic games like Chess",
    "Digital art, illustration, and concept design",
    "UI/UX and animation design",
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
    duration: "Completed: Dec 2023",
    description: "Gained a thorough understanding of the SDLC, researched emerging tech trends like DevOps, compared Waterfall vs. Agile, and designed/optimized a Python program to improve functionality."
  }
];

export const projectsData = [
  {
    title: "SchemaSense AI",
    description: "AI-powered database documentation platform that auto-generates schema docs, maps table relationships, and provides a real-time chat interface for querying your database structure in plain English. Built with prompt injection defense, intelligent caching (56x speedup), and streaming AI responses.",
    technologies: ["Next.js", "FastAPI", "Python", "TypeScript", "PostgreSQL", "DeepSeek-V3", "OpenRouter", "SQLite"],
    githubLink: "https://github.com/amitdevx/schemasense",
    liveLink: "https://schemasense.amitdevx.tech"
  },
  {
    title: "Professor Profiler",
    description: "An advanced multi-agent system that reverse-engineers exam papers to decode professor psychology and generate optimized study strategies.",
    technologies: ["Python", "Software Development", "DevOps", "Git + GitHub", "Multi-agent AI", "Hub-and-Spoke architecture"],
    githubLink: "https://github.com/amitdevx/Professor_Profiler",
    docLink: "https://deepwiki.com/amitdevx/Professor_Profiler"
  },
  {
    title: "Eatinformed",
    description: "An AI-driven platform for instant nutrition analysis from food label images, built with Next.js, Genkit, and Google Gemini, featuring a modern UI with Tailwind CSS.",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Genkit", "Gemini"],
    githubLink: "https://github.com/amitdevx/Eatinformed",
    liveLink: "https://eatinformed.amitdevx.tech/"
  },
  {
    title: "2FA Password Protector",
    description: "A Flask-based authentication system with three layers of security: login, PIN, and Two-Factor Authentication (2FA), using SQLite and cryptography for secure data handling.",
    technologies: ["Python", "Flask", "SQLite", "Cryptography"],
    githubLink: "https://github.com/amitdevx"
  },
  {
    title: "Cloud File Uploader",
    description: "A secure file storage system similar to Google Drive, developed with Node.js and SQLite, allowing users to store and manage files efficiently in a cloud-based environment.",
    technologies: ["Node.js", "SQLite"],
    githubLink: "https://github.com/amitdevx/FileFlow"
  },
  {
    title: "Anime Viewing Platform",
    description: "A responsive Flask-based website for streaming copyright-free anime, ensuring a smooth user experience with dynamic content loading and an intuitive UI.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/amitdevx/anime-view-site"
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
  technical: [
    // Cloud & DevOps
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
    { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
    // AI & Data
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    // Full-Stack Frontend
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    // Full-Stack Backend
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Database Management", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    // Developer Tools & Others
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "API Integration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "UI/UX Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Data Structures", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Agile Methodologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
    { name: "Cybersecurity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Frontend & Backend Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg" },
    { name: "DBMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
  ],
  soft: [
    "Teamwork", "Time Management", "Presentations",
    "Documentation", "Cross-Team Collaboration", "Problem Solving",
    "Adaptability", "Critical Thinking", "Creativity",
    "Attention to Detail", "Leadership", "Research Skills"
  ]
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/divekar-amit",
  github: "https://github.com/amitdevx",
  kaggle: "https://www.kaggle.com/divekaramit",
  x: "https://x.com/amitdevx_",
  instagram: "https://instagram.com/amitdevx",
  email: "Amitdivekar289@gmail.com"
};


    
    

    
