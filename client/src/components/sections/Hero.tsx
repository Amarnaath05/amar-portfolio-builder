import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/3d/HeroScene";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-lg"
            >
              Hi, I'm Amarnaath.
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
              MERN Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                & ML Engineer
              </span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build end-to-end web applications using the MERN stack and apply machine learning and NLP to turn raw data into insights.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all"
            >
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8 text-muted-foreground/50">
            <div className="flex items-center gap-2">
              <Code2 size={20} />
              <span className="text-sm font-mono">Full Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={20} />
              <span className="text-sm font-mono">Data Science</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain size={20} />
              <span className="text-sm font-mono">AI / ML</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block h-[500px]"
        >
          <HeroScene />
          
          {/* Floating cards effect */}
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 -right-10 bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl z-20"
          >
            <Database className="text-primary w-8 h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-20 -left-10 bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl z-20"
          >
            <Brain className="text-secondary w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
