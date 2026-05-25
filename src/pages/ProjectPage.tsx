import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Globe, Layers, Server, Zap, Cpu } from "lucide-react";

export function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          className="mb-8 group"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Button>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-5xl font-black tracking-tighter mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="text-sm px-3 py-1">
                  {project.category}
                </Badge>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Server className="w-8 h-8 text-primary" />
                  The Challenge
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed italic">
                  "{project.caseStudy.problem}"
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Layers className="w-8 h-8 text-primary" />
                  Architecture & Design
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  <p>{project.caseStudy.architecture}</p>
                  <p className="mt-4">{project.caseStudy.solution}</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  Core Backend Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {project.caseStudy.backendFeatures.map(feature => (
                     <div key={feature} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{feature}</span>
                     </div>
                   ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Cpu className="w-8 h-8 text-primary" />
                  Technical Outcome
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.caseStudy.outcome}
                </p>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-secondary/50 border border-border sticky top-32">
                <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-xs text-muted-foreground">Project Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Backend Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.caseStudy.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-background rounded-full text-sm font-medium border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex flex-col gap-4">
                    <Button className="w-full h-12 text-lg font-bold gap-2 group">
                      API Documentation <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="w-full h-12 text-lg font-bold gap-2">
                      <Globe className="w-5 h-5" /> GitHub Repository
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}