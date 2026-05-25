import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Web", "Mobile", "AI", "Security"];

export function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold italic tracking-tighter">Selected Works</h2>
            <p className="text-muted-foreground max-w-xl">
              Exploring the intersection of design and functionality through a variety
              of digital products and experiments.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="rounded-full transition-all active:scale-95"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-card shadow-lg"
              >
                <Link to={`/project/${project.id}`}>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
                      <Search className="w-10 h-10 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm line-clamp-2">{project.description}</p>
                      <div className="flex gap-2 mt-4 flex-wrap justify-center">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/20 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}