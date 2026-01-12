// Portfolio Data - Update this with your actual information
// This file contains all the content for your portfolio website

export const personalInfo = {
  name: "Prathamesh Vaze",
  title: "Full-Stack Developer",
  taglines: [
    "Laravel Developer",
    "Full-Stack Developer", 
    "Open Source Enthusiast",
    "Community Builder"
  ],
  bio: `I'm a passionate <strong>Laravel Developer</strong> who recently transitioned into <strong>Full-Stack Development</strong>. 
  With a strong foundation in backend development using PHP and Laravel, I've expanded my expertise to include 
  modern frontend technologies. I love building robust, scalable web applications and contributing to the 
  developer community. Always eager to learn and share knowledge through code.`,
  email: "prathameshvaze@gmail.com",
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
  backend: ["PHP", "Laravel", "MySQL", "Redis", "REST APIs"],
  frontend: ["JavaScript", "TypeScript", "React", "Tailwind CSS"],
  devops: ["Docker", "Git", "CI/CD", "Linux", "AWS", "Nginx"],
  tools: [ "Pest", "Rector", "Livewire", "Filament", "Inertia.js"],
};

export const experience = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Freelance",
    type: "Remote",
    duration: "2024 - Present",
    description: [
      "Building full-stack web applications using Laravel and React",
      "Developing REST APIs and integrating third-party services",
      "Implementing modern frontend solutions with TypeScript and Tailwind CSS",
      "Collaborating with clients to deliver scalable, maintainable solutions",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Laravel Developer",
    company: "Previous Company",
    type: "Full-time",
    duration: "2022 - 2024",
    description: [
      "Developed and maintained Laravel applications for enterprise clients",
      "Implemented testing strategies using PestPHP for robust codebases",
      "Optimized database queries and application performance",
      "Mentored junior developers and conducted code reviews",
    ],
    current: false,
  },
  {
    id: 3,
    role: "Junior PHP Developer",
    company: "First Company",
    type: "Full-time",
    duration: "2020 - 2022",
    description: [
      "Built web applications using PHP and Laravel framework",
      "Collaborated with design team to implement responsive UIs",
      "Gained experience with version control and agile methodologies",
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
    degree: "Bachelor of Technology",
    field: "Computer Science / Information Technology",
    institution: "Your University",
    duration: "2016 - 2020",
    achievements: ["Relevant coursework", "Projects", "Achievements"],
  },
];

export const achievements = [
  "Open source contributor",
  "Community meetup organizer",
  "Technical blog writer",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
//   { label: "Talks", href: "#talks" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
