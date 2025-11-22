import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "ML & NLP", href: "#ml-nlp" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
          className="flex items-center justify-center w-10 h-10 hover:scale-110 transition-transform duration-300"
          title="Amarnaath Portfolio"
        >
          <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            
            {/* Outer circular ring - Main */}
            <circle cx="50" cy="50" r="44" stroke="url(#aGoldGradient)" strokeWidth="3" fill="none"/>
            
            {/* Inner decorative circle */}
            <circle cx="50" cy="50" r="40" stroke="url(#aGoldGradient)" strokeWidth="1" fill="none" opacity="0.5"/>
            
            {/* Elegant "A" letter - Left diagonal */}
            <line x1="36" y1="68" x2="50" y2="28" stroke="url(#aGoldGradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* Right diagonal */}
            <line x1="50" y1="28" x2="64" y2="68" stroke="url(#aGoldGradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* Horizontal crossbar */}
            <line x1="40" y1="50" x2="60" y2="50" stroke="url(#aGoldGradient)" strokeWidth="3" strokeLinecap="round"/>
            
            {/* Accent flourish - elegant swash */}
            <path d="M 66 72 Q 72 70 76 74" stroke="url(#aGoldGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 md:hidden flex flex-col space-y-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/10"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
