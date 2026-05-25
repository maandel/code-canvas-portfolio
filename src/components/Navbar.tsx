import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Testimonials", href: "/#testimonials", id: "testimonials" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home then scroll (handled by browser usually or we can help)
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled || location.pathname !== "/" ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Code2 className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold tracking-tighter">DEV.PORTFOLIO</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" size="sm" asChild>
            <a href="/#contact" onClick={(e) => handleNavClick(e as any, "/#contact")}>Hire Me</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-background z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-2xl font-semibold hover:text-primary"
          >
            {link.name}
          </Link>
        ))}
        <Button size="lg" className="mt-4" asChild onClick={() => setIsOpen(false)}>
          <a href="/#contact" onClick={(e) => handleNavClick(e as any, "/#contact")}>Hire Me</a>
        </Button>
      </div>
    </nav>
  );
}