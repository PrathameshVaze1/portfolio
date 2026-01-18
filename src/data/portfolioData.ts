// Portfolio Data - Update this with your actual information
// This file contains all the content for your portfolio website

export const personalInfo = {
	name: "Prathamesh Vaze",
	title: "Laravel Backend Developer",
	taglines: [
		"Laravel Backend Developer",
		"API Specialist",
		"Open Source Contributor",
		"Community Builder",
	],
	bio: `I'm a <strong>Laravel Backend Developer</strong> with 3+ years of experience building secure, scalable applications and APIs. 
  I specialize in performance tuning, codebase modernization, and seamless third-party integrations. 
  Active contributor to Laravel open-source projects and community events like Laracon and Laravel Mumbai. 
  Familiar with AI-powered development tools and automation workflows, actively exploring applications of AI in backend development and API security.`,
	email: "prathameshvaze@gmail.com",
	phone: "+91 9403329930",
	location: "India",
	resumeUrl:
		"https://pub-b90e26930c594e45a2ab4ae2d9976c3b.r2.dev/docs/Prathamesh%20Vaze%20Resume.pdf",
	sourceUrl: "https://github.com/PrathameshVaze1/portfolio",
};

export const socialLinks = [
	{ name: "GitHub", url: "https://github.com/PrathameshVaze1", icon: "github" },
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/prathameshvaze",
		icon: "linkedin",
	},
	{ name: "Twitter/X", url: "https://x.com/PrathameshVaze", icon: "twitter" },
	{ name: "Email", url: "mailto:prathameshvaze@gmail.com", icon: "mail" },
];

export const skills = {
	"Languages & Frameworks": ["PHP", "Laravel", "MySQL", "ReactJS"],
	"AI & Tools": ["ChatGPT", "GitHub Copilot", "OpenAI API", "Claude"],
	"Development Tools": [
		"VS Code",
		"PHPStorm",
		"Cursor",
		"Git",
		"GitHub",
		"GitLab",
		"Postman",
		"Telescope",
		"Debugbar",
	],
	"Database Tools": ["TablePlus", "MySQL Workbench", "phpMyAdmin"],
	Deployment: ["Laravel Forge", "GitHub Actions", "Laravel Cloud"],
	"Cloud/Remote": ["Azure", "DigitalOcean", "AWS", "VPN", "Citrix"],
};

export const experience = [
	{
		id: 1,
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
		role: "PHP - Laravel Developer",
		company: "Rapsys Technologies Pte Ltd",
		type: "Full-time",
		duration: "Oct 2025 - Present",
		description: [
			"Worked with internal stakeholders to develop a Job Portal for the company",
			"Worked on internal tools to manage the company's operations and resources",
			// "Worked on the company's website to improve the user experience and SEO",
			"Introduced AI Workflows to automate the company's operations and improve the efficiency of the team",
		],
		current: true,
	},
];

export const projects = [
	{
		id: 1,
		title: "Banjara Virasat Museum - Ticket Booking and Box office",
		description:
			"A ticket booking and box office management system for Banjara Virasat Museum along with slot locking. Also includes VIP Rooms and Conference Room Bookings",
		image:
			"https://pub-b90e26930c594e45a2ab4ae2d9976c3b.r2.dev/img/nagara-mueseum.png",
		techStack: [
			"Laravel",
			"ReactJS",
			"MySQL",
			"EaseBuzz Payment Gateway",
			"Redis",
		],
		liveUrl: "https://online.nagaramuseum.com/",
		githubUrl: "#",
	},
	{
		id: 2,
		title: "UPL",
		description:
			"A full-featured e-commerce platform built with Laravel and React, featuring payment integration, inventory management, and real-time notifications.",
		image: "https://pub-b90e26930c594e45a2ab4ae2d9976c3b.r2.dev/img/upl.png",
		techStack: [
			"Laravel",
			"Bootstrap",
			"MySQL",
			"Server Management",
			"AWS",
			"Azure",
		],
		liveUrl: "https://upl-ltd.com",
		githubUrl: "#",
	},
	{
		id: 3,
		title: "CSMVS",
		description: "",
		image: "",
		techStack: [
			"Laravel",
			"Bootstrap",
			"MySQL",
			"Server Management",
			"AWS",
			"Azure",
		],
		liveUrl: "https://booking.csmvs.in/",
		githubUrl: "#",
	},
	{
		id: 4,
		title: "Pharma Now",
		description: "",
		image: "",
		techStack: [
			"Laravel",
			"Bootstrap",
			"MySQL",
			"Server Management",
			"AWS",
			"Azure",
		],
		liveUrl: "https://www.pharmanow.live",
		githubUrl: "#",
	},
	{
		id: 5,
		title: "Swimming Pool",
		description: "",
		image: "",
		techStack: [
			"Laravel",
			"Bootstrap",
			"MySQL",
			"Server Management",
			"AWS",
			"Azure",
		],
		liveUrl: "https://swimmingpool.mcgm.gov.in",
		githubUrl: "#",
	},
];

export const education = [
	{
		id: 1,
		degree: "SSC",
		field: "Secondary School Certificate",
		institution: "A. S. D. Topiwalla High School",
		duration: "Completed",
		achievements: ["78.6%"],
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
		degree: "Bachelor of Science",
		field: "Computer Science",
		institution: "S. R. M. College Kudal",
		duration: "Completed",
		achievements: ["CGPA: 9.83"],
	},
];

export const achievements = [
	"Active contributor at Laravel Mumbai Community",
	"Event volunteer at Laracon IN 2025",
	"Laravel open-source contributor",
];

export const languages = ["English", "Hindi", "Marathi"];

export const interests = ["Chess", "Cooking", "Reading"];

export const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Education", href: "#education" },
	{ label: "Contact", href: "#contact" },
];
