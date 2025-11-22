import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Database, Brain, Zap, Cpu, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import characterImage from "@assets/generated_images/3d_stylized_software_engineer_character.png";

const floatingIcons = [
  { icon: Code2, label: "React", color: "text-cyan-400", delay: 0, duration: 6 },
  { icon: Database, label: "Database", color: "text-green-400", delay: 0.5, duration: 7 },
  { icon: Brain, label: "AI/ML", color: "text-purple-400", delay: 1, duration: 8 },
  { icon: Zap, label: "Performance", color: "text-yellow-400", delay: 1.5, duration: 5.5 },
  { icon: Cpu, label: "Backend", color: "text-blue-400", delay: 0.3, duration: 7.5 },
  { icon: BarChart3, label: "Data", color: "text-pink-400", delay: 0.8, duration: 6.5 },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
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
          className="relative hidden md:flex items-center justify-center h-[600px]"
        >
          {/* Character Image Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            
            {/* Character Image */}
            <img 
              src={characterImage} 
              alt="3D Software Engineer Character" 
              className="relative z-10 h-full w-auto object-contain drop-shadow-2xl"
            />

            {/* Floating Tech Icons */}
            {floatingIcons.map((item, index) => {
              const Icon = item.icon;
              const angle = (index / floatingIcons.length) * Math.PI * 2;
              const radius = 160;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    y: [0, 30, 0],
                    x: [0, Math.sin(angle) * 10, 0]
                  }}
                  transition={{
                    opacity: { delay: item.delay + 0.5 },
                    y: { duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                    x: { duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay }
                  }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`p-4 bg-card/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:border-primary/50 transition-all duration-300 group`}
                  >
                    <Icon className={`w-6 h-6 ${item.color} group-hover:scale-125 transition-transform`} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
