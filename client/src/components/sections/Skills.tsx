import { motion } from "framer-motion";
import { Code2, Server, Brain, Wrench } from "lucide-react";
import skillsData from "@/data/skills.json";
import { SkillCategory } from "@/types";

const icons = {
  "Frontend & UI": <Code2 className="w-6 h-6 text-primary" />,
  "Backend & Databases": <Server className="w-6 h-6 text-secondary" />,
  "Machine Learning & NLP": <Brain className="w-6 h-6 text-rose-400" />,
  "Tools & DevOps": <Wrench className="w-6 h-6 text-amber-400" />
};

export default function Skills() {
  const skills: SkillCategory[] = skillsData as SkillCategory[];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card/40 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {icons[skill.category as keyof typeof icons] || <Code2 />}
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
