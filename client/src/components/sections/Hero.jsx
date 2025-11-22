import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Database, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Character3D from "@/components/3d/Character3D";
import resumePDF from "@assets/Amarnaath_P_Software_Developer_Resume(3).pdf_1763834741071.pdf";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
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
              onClick={() => {
                // Open in new tab to view
                window.open(resumePDF, '_blank');
                
                // Also trigger download
                setTimeout(() => {
                  const link = document.createElement('a');
                  link.href = resumePDF;
                  link.download = 'Amarnaath_P_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }, 500);
              }}
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

        {/* Right Side - 3D Character with Floating Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block h-[600px]"
        >
          {/* 3D Character Canvas */}
          <Character3D />

          {/* Top Left - React Icon */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-6 top-12 z-20"
          >
            <div className="p-4 bg-background/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-lg hover:border-cyan-500/60 transition-all">
              <Code2 className="w-8 h-8 text-cyan-400" />
            </div>
          </motion.div>

          {/* Top Right - Stack Icon */}
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -right-6 top-20 z-20"
          >
            <div className="p-4 bg-background/60 backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-lg hover:border-green-500/60 transition-all">
              <Zap className="w-8 h-8 text-green-400" />
            </div>
          </motion.div>

          {/* Left Middle - Database Icon */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 12, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-20"
          >
            <div className="p-4 bg-background/60 backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-lg hover:border-green-500/60 transition-all">
              <Database className="w-8 h-8 text-green-400" />
            </div>
          </motion.div>

          {/* Bottom Left - Circle Icon */}
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute -left-4 bottom-16 z-20"
          >
            <div className="p-3 bg-background/60 backdrop-blur-xl border border-cyan-500/30 rounded-full shadow-lg hover:border-cyan-500/60 transition-all">
              <div className="w-6 h-6 rounded-full border-2 border-cyan-400" />
            </div>
          </motion.div>

          {/* Bottom Right - Brain Icon */}
          <motion.div
            animate={{ 
              y: [0, -18, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            className="absolute -right-6 bottom-20 z-20"
          >
            <div className="p-4 bg-background/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-lg hover:border-purple-500/60 transition-all">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
