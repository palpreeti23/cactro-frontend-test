import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Education", href: "#education" },
	{ name: "Contact", href: "#contact" },
];

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Determine active section
			const sections = navItems.map((item) => item.href.slice(1));
			for (const section of sections.reverse()) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 150) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled ? "glass py-4" : "py-6"
				}`}
			>
				<div className='max-w-6xl mx-auto px-6 flex items-center justify-between'>
					<motion.a
						href='#'
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
						className='font-display text-xl font-bold text-foreground'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Preeti<span className='text-gradient'>.</span>
					</motion.a>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center gap-8'>
						{navItems.map((item) => (
							<motion.button
								key={item.name}
								onClick={() => scrollToSection(item.href)}
								className={`relative text-sm font-medium transition-colors ${
									activeSection === item.href.slice(1)
										? "text-primary"
										: "text-muted-foreground hover:text-foreground"
								}`}
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								{item.name}
								{activeSection === item.href.slice(1) && (
									<motion.div
										layoutId='activeNav'
										className='absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full'
									/>
								)}
							</motion.button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<motion.button
						className='md:hidden p-2 text-foreground'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						whileTap={{ scale: 0.9 }}
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</motion.button>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className='fixed inset-x-0 top-[72px] z-40 glass p-6 md:hidden'
					>
						<div className='flex flex-col gap-4'>
							{navItems.map((item, index) => (
								<motion.button
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									onClick={() => scrollToSection(item.href)}
									className={`text-left py-2 text-lg font-medium ${
										activeSection === item.href.slice(1)
											? "text-primary"
											: "text-muted-foreground"
									}`}
								>
									{item.name}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
