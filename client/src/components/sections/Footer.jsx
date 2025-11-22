import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          <p>© {currentYear} Amarnaath P. All rights reserved.</p>
          <p className="text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
            Built with React, Vite & Tailwind <Heart size={10} className="text-red-500 fill-red-500" />
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
