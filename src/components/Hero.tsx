import { motion } from "framer-motion";
import { ArrowRight, Globe, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
        >
          Building Digital <br />
          <span className="text-primary italic">Masterpieces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl text-muted-foreground"
        >
          I'm a Full-Stack Engineer specializing in high-performance web applications,
          intuitive UI/UX design, and scalable cloud architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full h-14 px-8 text-lg" asChild>
            <a href="#projects">
              View My Work <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full w-14 h-14" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Globe className="w-6 h-6" /></a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-14 h-14" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><User className="w-6 h-6" /></a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-14 h-14" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Share2 className="w-6 h-6" /></a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}