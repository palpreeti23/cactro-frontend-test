import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const contactLinks = [
	{
		icon: Mail,
		label: "Email",
		value: "palpreeti2003@gmail.com",
		href: "mailto:palpreeti2003@gmail.com",
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+91 93435 44033",
		href: "tel:+919343544033",
	},
	{
		icon: Github,
		label: "GitHub",
		value: "github.com/preeti",
		href: "https://github.com/palpreeti23",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "linkedin.com/in/preeti",
		href: "https://www.linkedin.com/in/preeti-pal-dev/",
	},
];

const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id='contact' className='py-24 relative overflow-hidden' ref={ref}>
			<div className='absolute inset-0 pointer-events-none'>
				<div
					className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30'
					style={{
						background:
							"radial-gradient(ellipse, hsl(18 90% 55% / 0.2) 0%, transparent 70%)",
					}}
				/>
			</div>

			<div className='section-container relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='section-title'>Get In Touch</h2>
					<p className='section-subtitle mx-auto'>
						I'd love to hear from you. Let's create something amazing together.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50, scale: 0.95 }}
					animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='max-w-2xl mx-auto glass-card rounded-2xl p-8 md:p-12 glow-hover'
				>
					<div className='grid sm:grid-cols-2 gap-6 mb-8'>
						{contactLinks.map((link, index) => {
							const Icon = link.icon;
							return (
								<motion.a
									key={link.label}
									href={link.href}
									target={
										link.label === "GitHub" || link.label === "LinkedIn"
											? "_blank"
											: undefined
									}
									rel='noopener noreferrer'
									initial={{ opacity: 0, y: 20 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 0.3 + index * 0.1 }}
									whileHover={{ scale: 1.05, y: -5 }}
									whileTap={{ scale: 0.95 }}
									className='flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border-light hover:border-primary/30 transition-all group'
								>
									<motion.div
										whileHover={{ rotate: 10 }}
										className='w-12 h-12 rounded-xl flex items-center justify-center bg-secondary group-hover:bg-primary/10 transition-colors'
									>
										<Icon
											size={22}
											className='text-muted-foreground group-hover:text-primary transition-colors'
										/>
									</motion.div>
									<div>
										<p className='text-sm text-muted-foreground'>
											{link.label}
										</p>
										<p className='font-medium text-foreground'>{link.value}</p>
									</div>
								</motion.a>
							);
						})}
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ delay: 0.7 }}
						className='text-center'
					>
						<motion.a
							href='mailto:preeti@example.com'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='btn-primary inline-flex items-center gap-2'
						>
							<Send size={18} />
							Send Message
						</motion.a>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 1 }}
					className='flex justify-center gap-2 mt-12'
				>
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.5, 1, 0.5],
							}}
							transition={{
								repeat: Infinity,
								duration: 2,
								delay: i * 0.3,
							}}
							className='w-2 h-2 rounded-full bg-primary'
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
