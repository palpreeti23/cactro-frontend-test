import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Rocket } from "lucide-react";

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const cardVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring" as const,
				damping: 20,
				stiffness: 100,
			},
		},
	};

	const highlights = [
		{ icon: Code2, text: "Clean Code" },
		{ icon: Sparkles, text: "Modern UI" },
		{ icon: Rocket, text: "Performance" },
	];

	return (
		<section id='about' className='py-24 relative' ref={ref}>
			<div className='section-container'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='section-title'>About Me</h2>
					<p className='section-subtitle mx-auto'>
						Passionate about creating beautiful digital experiences
					</p>
				</motion.div>

				<motion.div
					variants={cardVariants}
					initial='hidden'
					animate={isInView ? "visible" : "hidden"}
					className='depth-card p-8 md:p-12 max-w-4xl mx-auto glow-hover'
				>
					<div className='grid md:grid-cols-3 gap-8 mb-8'>
						{highlights.map((item, index) => (
							<motion.div
								key={item.text}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.3 + index * 0.1 }}
								className='flex flex-col items-center text-center'
							>
								<motion.div
									whileHover={{ scale: 1.1, rotate: 5 }}
									className='w-14 h-14 rounded-xl flex items-center justify-center mb-3'
									style={{ background: "var(--gradient-primary)" }}
								>
									<item.icon className='w-7 h-7 text-primary-foreground' />
								</motion.div>
								<span className='font-display font-semibold text-foreground'>
									{item.text}
								</span>
							</motion.div>
						))}
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ delay: 0.6 }}
						className='text-lg leading-relaxed text-muted-foreground text-center'
					>
						I'm a{" "}
						<span className='text-foreground font-medium'>
							Frontend Developer
						</span>{" "}
						experienced in building{" "}
						<span className='text-foreground font-medium'>
							scalable, responsive web applications
						</span>{" "}
						using React, Redux Toolkit, Tailwind CSS, and Appwrite. I love
						crafting intuitive user interfaces and bringing creative ideas to
						life through code. With a strong foundation in modern web
						technologies, I focus on writing clean, maintainable code that
						delivers exceptional user experiences.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.8 }}
						className='flex flex-wrap justify-center gap-3 mt-8'
					>
						{["React", "Redux", "Tailwind", "JavaScript", "Appwrite"].map(
							(tech) => (
								<span key={tech} className='skill-pill'>
									{tech}
								</span>
							),
						)}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
