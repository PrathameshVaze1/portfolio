import { useState, useEffect } from "react";
import { personalInfo, navLinks, socialLinks } from "@/data/portfolioData";
import {
	Github,
	Linkedin,
	Twitter,
	Mail,
	Menu,
	X,
	FileText,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
	github: <Github className="w-5 h-5" />,
	linkedin: <Linkedin className="w-5 h-5" />,
	twitter: <Twitter className="w-5 h-5" />,
	mail: <Mail className="w-5 h-5" />,
};

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	return (
		<header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-sm py-3"
					: "bg-transparent py-5"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
				{/* Logo */}
				<a
					href="#hero"
					className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 hover:text-black transition-colors"
				>
					{personalInfo.name.split(" ")[0]}
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.slice(0, 4).map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-gray-600 hover:text-primary transition-colors text-sm font-medium tracking-wide"
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Social Actions */}
				<div className="hidden md:flex items-center gap-4">
					<div className="flex gap-2">
						{socialLinks.map((link) => (
							<a
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
							>
								{iconMap[link.icon]}
							</a>
						))}
					</div>
					<div className="w-px h-6 bg-gray-200" />
					<a
						href={personalInfo.resumeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow-md"
					>
						Resume
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
				>
					{mobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 px-6 py-6 shadow-xl animate-in slide-in-from-top-5">
					<div className="flex flex-col gap-6">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMobileMenuOpen(false)}
								className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
							>
								{link.label}
							</a>
						))}
						<div className="h-px bg-gray-100" />
						<a
							href={personalInfo.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-primary"
						>
							<FileText className="w-5 h-5" />
							Resume
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
