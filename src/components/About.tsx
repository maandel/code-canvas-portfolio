import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9caa052d-5c2d-4319-9d5b-c4b8bc9b3384/profile-pic-01a4430e-1779748577239.webp"
                alt="Backend Developer Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-8 -right-8 bg-background border border-border p-6 rounded-2xl shadow-xl hidden lg:block">
              <span className="block text-4xl font-bold text-primary">8+</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Years in Engineering</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Hello! I'm a Senior Backend Developer specializing in the design and implementation of highly scalable,
                resilient distributed systems.
              </p>
              <p>
                I have a deep passion for architectural patterns like **Clean Architecture**, **DDD**, and **Event Sourcing**.
                I believe that a robust backend is the backbone of any successful digital product, and I strive to write
                code that is not only performant but also maintainable and testable.
              </p>
              <p>
                From implementing complex background tasks and distributed caching to orchestrating CI/CD pipelines
                and cloud-native deployments, I cover the entire spectrum of backend engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button className="gap-2" size="lg">
                <Download className="w-5 h-5" /> Download Resume (PDF)
              </Button>
              <Button variant="outline" className="gap-2" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                   <ExternalLink className="w-5 h-5" /> View My GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}