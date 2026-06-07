import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import preetifyProjectThumbnail from "../assets/preetify.png";
import blogProjectThumbnail from "../assets/blog-platform.png";
import feedbackProjectThumbnail from "../assets/cypherTalk.png";

interface Project {
  title: string;
  description: string;
  icon: any;
  features: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "PREETIFY",
    description:
      "A modern e-commerce platform with seamless shopping experience",
    icon: preetifyProjectThumbnail,
    features: [
      "Redux Toolkit state management",
      "Cart & wishlist functionality",
      "Responsive UI design",
      "Product filtering & search",
    ],
    liveUrl: "https://preetify.netlify.app",
    githubUrl: "https://github.com/palpreeti23/e-commerce",
    gradient:
      "linear-gradient(135deg, hsl(18 90% 55%) 0%, hsl(35 100% 55%) 100%)",
  },
  {
    title: "BLOG Platform",
    description: "Full-featured blogging platform with real-time updates",
    icon: blogProjectThumbnail,
    features: [
      "CRUD blog operations",
      "Appwrite authentication",
      "Likes & comments system",
      "Real-time UI updates",
    ],
    liveUrl: "https://preeti-blog.netlify.app",
    githubUrl: "https://github.com/palpreeti23/blog-project",
    gradient:
      "linear-gradient(135deg, hsl(200 90% 50%) 0%, hsl(280 70% 55%) 100%)",
  },
  {
    title: "CypherTalk",
    description:
      "A secure platform for collecting anonymous feedback and messages",
    icon: feedbackProjectThumbnail,
    features: [
      "Anonymous message sharing",
      "User authentication & profiles",
      "Real-time feedback management",
      "Responsive and modern UI",
    ],
    liveUrl: "https://cipher-talk.netlify.app/",
    githubUrl: "https://github.com/palpreeti23/anonymous-feedback-platform",
    gradient:
      "linear-gradient(135deg, hsl(160 85% 45%) 0%, hsl(220 85% 55%) 100%)",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -10 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="depth-card overflow-hidden"
      >
        <div
          className="h-48 relative overflow-hidden"
          style={{ background: project.gradient }}
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              <img src={project.icon} className="block" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute bottom-4 left-6"
          >
            <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg">
              {project.title}
            </h3>
          </motion.div>
        </div>

        <div className="p-6">
          <p className="text-muted-foreground mb-4">{project.description}</p>

          <ul className="space-y-2 mb-6">
            {project.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: project.gradient }}
                />
                {feature}
              </motion.li>
            ))}
          </ul>

          <div className="flex gap-3">
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium text-sm text-primary-foreground"
              style={{ background: project.gradient }}
            >
              <ExternalLink size={16} />
              Live
            </motion.a>
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium text-sm border-2 border-border text-foreground hover:border-foreground transition-colors"
            >
              <Github size={16} />
              GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-4 rounded-2xl blur-xl -z-10"
        style={{ background: project.gradient }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
