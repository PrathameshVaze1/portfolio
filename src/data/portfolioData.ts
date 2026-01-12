// Portfolio Data - Update this with your actual information
// This file contains all the content for your portfolio website

export const personalInfo = {
  name: "Prathamesh Vaze",
  title: "Laravel Backend Developer",
  taglines: [
    "Laravel Backend Developer",
    "API Specialist",
    "Open Source Contributor",
    "Community Builder"
  ],
  bio: `I'm a <strong>Laravel Backend Developer</strong> with 3+ years of experience building secure, scalable applications and APIs. 
  I specialize in performance tuning, codebase modernization, and seamless third-party integrations. 
  Active contributor to Laravel open-source projects and community events like Laracon and Laravel Mumbai. 
  Familiar with AI-powered development tools and automation workflows, actively exploring applications of AI in backend development and API security.`,
  email: "prathameshvaze@gmail.com",
  phone: "+91 9403329930",
  location: "India",
  resumeUrl: "#",
  sourceUrl: "#",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/PrathameshVaze1", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/prathameshvaze", icon: "linkedin" },
  { name: "Twitter/X", url: "https://x.com/PrathameshVaze", icon: "twitter" },
  { name: "Email", url: "mailto:prathameshvaze@gmail.com", icon: "mail" },
];

export const skills = {
  "Languages & Frameworks": ["PHP", "Laravel", "MySQL", "ReactJS"],
  "AI & Tools": ["ChatGPT", "GitHub Copilot", "OpenAI API", "Claude"],
  "Development Tools": ["VS Code", "PHPStorm", "Cursor", "Git", "GitHub", "GitLab", "Postman", "Telescope", "Debugbar"],
  "Database Tools": ["TablePlus", "MySQL Workbench", "phpMyAdmin"],
  "Deployment": ["Laravel Forge", "GitHub Actions", "Laravel Cloud"],
  "Cloud/Remote": ["Azure", "DigitalOcean", "AWS", "VPN", "Citrix"],
};

export const experience = [
  {
    id: 1,
    role: "PHP - Laravel Developer",
    company: "Rapsys Technologies Pte Ltd",
    type: "Full-time",
    duration: "Oct 2025 - Present",
    description: [
     ],
    current: true,
  },
  {
    id: 2,
    role: "Software Engineer Innovator",
    company: "12Grids - The CX Technology Company",
    type: "Full-time",
    duration: "Jan 2024 - Sep 2024",
    description: [
      "Led design and strategy for system and database architecture to ensure scalability and maintainability",
      "Automated 25% of processes using CRON jobs, reducing manual efforts and boosting operational efficiency",
      "Refactored and optimized codebase for improved performance and reliability",
      "Oversaw task allocation and sprint planning across multiple ongoing projects",
      "Leveraged AI-assisted code tools like GitHub Copilot, Cursor to accelerate feature development and improve code quality",
    ],
    current: false,
  },
  {
    id: 3,
    role: "Associate Software Engineer",
    company: "12Grids - The CX Technology Company",
    type: "Full-time",
    duration: "Mar 2022 - Dec 2023",
    description: [
      "Developed and maintained APIs for iOS and Android mobile apps, to support a smooth and responsive user experience",
      "Integrated middleware and rate limiting to enhance API security and performance",
      "Spearheaded improvements in deployment pipelines, reducing deployment times by 70%",
      "Established long-term health and stability of projects through process improvements and documentation",
    ],
    current: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Laravel and React, featuring payment integration, inventory management, and real-time notifications.",
    image: null,
    techStack: ["Laravel", "React", "MySQL", "Stripe", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, team features, and advanced filtering capabilities.",
    image: null,
    techStack: ["Laravel", "Livewire", "Alpine.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support, SEO optimization, and a beautiful admin panel built with Filament.",
    image: null,
    techStack: ["Laravel", "Filament", "Tailwind CSS", "SQLite"],
    liveUrl: null,
    githubUrl: "#",
  },
  {
    id: 4,
    title: "API Starter Kit",
    description: "An open-source Laravel API boilerplate with authentication, rate limiting, and comprehensive documentation.",
    image: null,
    techStack: ["Laravel", "Sanctum", "PHPStan", "Pest"],
    liveUrl: null,
    githubUrl: "#",
  },
];

// export const talks = [
//   {
//     id: 1,
//     title: "Getting Started with Laravel Testing",
//     description: "A practical guide to testing in Laravel using PestPHP. Learn how to write expressive tests and build robust applications.",
//     locations: ["Local Meetup"],
//     githubUrl: "#",
//     videoUrl: null,
//   },
//   {
//     id: 2,
//     title: "Modern Laravel Development",
//     description: "Exploring modern tools and practices in Laravel development including Livewire, Alpine.js, and Tailwind CSS.",
//     locations: ["Tech Conference 2024"],
//     githubUrl: "#",
//     videoUrl: "#",
//   },
// ];

export const education = [
  {
    id: 1,
    degree: "B.Sc. Computer Science",
    field: "Computer Science",
    institution: "S. R. M. College Kudal",
    duration: "Completed",
    achievements: ["CGPA: 9.83"],
  },
  {
    id: 2,
    degree: "HSC",
    field: "Higher Secondary Certificate",
    institution: "N. A. D. Topiwalla Jr College",
    duration: "Completed",
    achievements: ["64%"],
  },
  {
    id: 3,
    degree: "SSC",
    field: "Secondary School Certificate",
    institution: "A. S. D. Topiwalla High School",
    duration: "Completed",
    achievements: ["78.6%"],
  },
];

export const achievements = [
  "Active contributor at Laravel Mumbai Community",
  "Event volunteer at Laracon IN 2025",
  "Laravel open-source contributor",
];

export const languages = ["English", "Hindi", "Marathi"];

export const interests = ["Chess", "Cooking", "Streaming", "Reading"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
//   { label: "Talks", href: "#talks" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
