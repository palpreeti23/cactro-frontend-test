import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Layout, Database, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Code;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "C"],
    color: "18 90% 55%",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Tailwind CSS", "HTML", "CSS"],
    color: "200 90% 50%",
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Appwrite"],
    color: "280 70% 55%",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Netlify", "Vite"],
    color: "35 100% 55%",
  },
];

const SkillCard = ({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="depth-card p-6 cursor-pointer relative overflow-hidden"
      style={{
        minHeight: isExpanded ? "auto" : "160px",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 0.1 : 0 }}
        className="absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(circle at center, hsl(${category.color}) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{
              scale: isExpanded ? 1.1 : 1,
              rotate: isExpanded ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, hsl(${category.color}) 0%, hsl(${category.color} / 0.7) 100%)`,
            }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <motion.h3
            layout="position"
            className="font-display text-xl font-bold text-foreground"
          >
            {category.title}
          </motion.h3>
        </div>

        <motion.div layout className="flex flex-wrap gap-2">
          <AnimatePresence mode="popLayout">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: isExpanded ? skillIndex * 0.05 : 0,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={{
                  background: isExpanded
                    ? `hsl(${category.color} / 0.15)`
                    : "hsl(var(--secondary))",
                  color: isExpanded
                    ? `hsl(${category.color})`
                    : "hsl(var(--secondary-foreground))",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-border"
            >
              <p className="text-sm text-muted-foreground">
                {category.skills.length} skill
                {category.skills.length > 1 ? "s" : ""} in this category
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-background-secondary" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
