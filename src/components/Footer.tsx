import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
	return (
		<footer className='py-8 border-t border-border'>
			<div className='max-w-6xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className='flex flex-col md:flex-row items-center justify-between gap-4'
				>
					<p className='text-sm text-muted-foreground'>
						© {new Date().getFullYear()} Preeti Pal. All rights reserved.
					</p>

					<motion.p
						className='flex items-center gap-1 text-sm text-muted-foreground'
						whileHover={{ scale: 1.05 }}
					>
						Made with
						<motion.span
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ repeat: Infinity, duration: 1.5 }}
						>
							<Heart size={14} className='text-primary fill-primary' />
						</motion.span>
						using React & Framer Motion
					</motion.p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
