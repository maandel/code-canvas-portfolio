import { Code2, Globe, User, Share2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold tracking-tighter">DEV.PORTFOLIO</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Globe className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <User className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Share2 className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground border-t border-border pt-8">
          <p>© 2024 Software Developer Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React 19 & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}