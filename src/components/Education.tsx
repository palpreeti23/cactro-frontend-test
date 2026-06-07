import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id='education' className='py-24 bg-background-secondary' ref={ref}>
			<div className='section-container'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='section-title'>Education</h2>
					<p className='section-subtitle mx-auto'>My academic journey</p>
				</motion.div>

				{/* Timeline */}
				<div className='max-w-3xl mx-auto relative'>
					{/* Timeline line */}
					<motion.div
						initial={{ scaleY: 0 }}
						animate={isInView ? { scaleY: 1 } : {}}
						transition={{ duration: 1, delay: 0.3 }}
						className='absolute left-8 top-0 bottom-0 w-0.5 origin-top'
						style={{
							background:
								"linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
						}}
					/>

					{/* Education item */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.5 }}
						className='relative pl-20'
					>
						{/* Timeline dot */}
						<motion.div
							initial={{ scale: 0 }}
							animate={isInView ? { scale: 1 } : {}}
							transition={{
								type: "spring",
								stiffness: 300,
								delay: 0.7,
							}}
							className='absolute left-6 top-8 w-5 h-5 rounded-full -translate-x-1/2'
							style={{
								background: "var(--gradient-primary)",
								boxShadow:
									"0 0 0 4px hsl(var(--background-secondary)), var(--shadow-md)",
							}}
						/>

						<motion.div
							whileHover={{ scale: 1.02, y: -5 }}
							transition={{ type: "spring", stiffness: 300 }}
							className='depth-card p-8 glow-hover'
						>
							{/* Icon */}
							<motion.div
								initial={{ rotate: -180, opacity: 0 }}
								animate={isInView ? { rotate: 0, opacity: 1 } : {}}
								transition={{ delay: 0.8, type: "spring" }}
								className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6'
								style={{ background: "var(--gradient-primary)" }}
							>
								<GraduationCap className='w-8 h-8 text-primary-foreground' />
							</motion.div>

							{/* Content */}
							<h3 className='font-display text-2xl font-bold text-foreground mb-2'>
								B.Tech Computer Science Engineering
							</h3>

							<p className='text-lg text-muted-foreground mb-4'>
								Chouksey Engineering College
							</p>

							<div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 1 }}
									className='flex items-center gap-2'
								>
									<Calendar size={16} className='text-primary' />
									<span>Graduation: June 2025</span>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 1.1 }}
									className='flex items-center gap-2'
								>
									<MapPin size={16} className='text-primary' />
									<span>India</span>
								</motion.div>
							</div>

							{/* Skills learned */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={isInView ? { opacity: 1 } : {}}
								transition={{ delay: 1.2 }}
								className='mt-6 pt-6 border-t border-border'
							>
								<p className='text-sm text-muted-foreground mb-3'>
									Key Learnings:
								</p>
								<div className='flex flex-wrap gap-2'>
									{[
										"Data Structures",
										"Algorithms",
										"Web Development",
										"Database Management",
									].map((skill) => (
										<span key={skill} className='skill-pill text-xs'>
											{skill}
										</span>
									))}
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Education;
