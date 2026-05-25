import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Expertise & Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I've mastered over the years
            to build robust and scalable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-background border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Proficiency</span>
                  <span className="font-bold">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}