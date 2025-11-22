import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Character3D from "@/components/3d/Character3D";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
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
              className="text-cyan-400 font-mono text-lg tracking-wider"
            >
              Futuristic Developer Portfolio
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-white">
              MERN Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                & ML Engineer
              </span>
            </h1>
          </div>

          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            I craft premium full-stack web applications and deploy cutting-edge machine learning solutions that transform complex data into elegant, production-ready systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 rounded-full px-8 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all"
            >
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-8 text-slate-400">
            <div className="flex items-center gap-2">
              <Code2 size={20} className="text-cyan-400" />
              <span className="text-sm font-mono">Full Stack Dev</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={20} className="text-blue-400" />
              <span className="text-sm font-mono">Data Science</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain size={20} className="text-purple-400" />
              <span className="text-sm font-mono">AI / ML</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Futuristic 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden md:block h-[600px] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none z-20" />
          
          {/* 3D Scene */}
          <Character3D />

          {/* Corner glow accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
