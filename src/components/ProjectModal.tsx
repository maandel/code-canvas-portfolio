import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Globe, Layers, Server, Zap, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
              <DialogDescription className="mt-2 text-lg">
                {project.category} \u2022 {project.tags.join(", ")}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-inner bg-muted">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2"><Server className="w-5 h-5 text-primary" /> The Challenge</h4>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{project.caseStudy.problem}"
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2"><Layers className="w-5 h-5 text-primary" /> Architecture</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.caseStudy.architecture}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2"><Zap className="w-5 h-5 text-primary" /> Key Backend Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                   {project.caseStudy.backendFeatures.map(feature => (
                     <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                     </li>
                   ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2"><Cpu className="w-5 h-5 text-primary" /> Outcome</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.caseStudy.outcome}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-3 uppercase text-xs tracking-widest text-muted-foreground">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-3">
                <Button className="w-full gap-2">
                  <ExternalLink className="w-4 h-4" /> API Documentation
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Globe className="w-4 h-4" /> GitHub Repository
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}