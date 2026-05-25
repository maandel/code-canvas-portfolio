import { motion } from "framer-motion";
import { awards } from "@/data/portfolio";
import { Trophy, Star } from "lucide-react";

export function Awards() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Trophy className="w-10 h-10 text-primary" />
          <h2 className="text-4xl font-bold italic tracking-tight">Awards & Recognition</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card hover:border-primary transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Star className="w-6 h-6" />
                </div>
                <span className="text-2xl font-black text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                  {award.year}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-muted-foreground">{award.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}