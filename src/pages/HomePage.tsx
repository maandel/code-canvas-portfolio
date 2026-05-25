import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Awards />
      <Testimonials />
      <Contact />
    </motion.div>
  );
}