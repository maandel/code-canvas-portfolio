import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A deep dive into the backend technologies and architectural paradigms I use
            to build enterprise-grade systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold border-b border-border pb-2 italic text-primary">{category.title}</h3>
              <div className="grid grid-cols-1 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 rounded-lg bg-background border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold">{skill.name}</span>
                      <span className="ml-auto text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}