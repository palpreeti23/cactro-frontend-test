import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
	const name = "Preeti Pal";
	const letters = name.split("");

	const [visibleCount, setVisibleCount] = useState(0);
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		let typingInterval: NodeJS.Timeout;
		let resetTimeout: NodeJS.Timeout;

		typingInterval = setInterval(() => {
			setVisibleCount((prev) => {
				if (prev < letters.length) return prev + 1;
				return prev;
			});
		}, 150);

		if (visibleCount === letters.length) {
			resetTimeout = setTimeout(() => {
				setVisibleCount(0);
			}, 2000);
		}

		return () => {
			clearInterval(typingInterval);
			clearTimeout(resetTimeout);
		};
	}, [visibleCount, letters.length]);

	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		return () => clearInterval(cursorInterval);
	}, []);

	const letterVariants: any = {
		hidden: { opacity: 0, y: 40, rotateX: -90 },
		visible: {
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 120,
			},
		},
	};

	const scrollToProjects = () => {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToContact = () => {
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className='min-h-screen flex items-center justify-center relative overflow-hidden'>
			<div className='section-container text-center relative z-10'>
				{/* Name typing */}
				<h1 className='font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 perspective-1000'>
					{letters.map((letter, index) => (
						<motion.span
							key={index}
							variants={letterVariants}
							initial='hidden'
							animate={index < visibleCount ? "visible" : "hidden"}
							className={`inline-block ${
								letter === " " ? "w-4 md:w-8" : ""
							} ${index >= 7 ? "text-gradient" : ""}`}
							style={{ transformStyle: "preserve-3d" }}
						>
							{letter === " " ? "\u00A0" : letter}
						</motion.span>
					))}

					{/* Cursor */}
					<span
						className={`inline-block ml-2 w-1 h-14 md:h-20 lg:h-24 bg-primary transition-opacity ${
							showCursor ? "opacity-100" : "opacity-0"
						}`}
					/>
				</h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className='text-lg md:text-xl text-muted-foreground mb-12 max-w-lg mx-auto'
				>
					<span className='font-medium text-foreground'>
						Frontend Developer
					</span>
					<span className='mx-3 text-border'>|</span>
					<span>React</span>
					<span className='mx-2 text-border'>•</span>
					<span>Redux</span>
					<span className='mx-2 text-border'>•</span>
					<span>Tailwind</span>
				</motion.p>

				{/* Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.7 }}
					className='flex flex-col sm:flex-row gap-4 justify-center'
				>
					<motion.button
						onClick={scrollToProjects}
						className='btn-primary'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						View Projects
					</motion.button>
					<motion.button
						onClick={scrollToContact}
						className='btn-secondary'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Contact Me
					</motion.button>
				</motion.div>

				{/* Scroll indicator */}
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className='absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground'
				>
					<ArrowDown size={24} />
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
