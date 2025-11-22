import { motion } from "framer-motion";
import avatarImage from "@assets/3d_developer_avatar_1763810827756.png";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 relative z-10"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Building bridges between <span className="text-secondary">Data</span> and <span className="text-primary">Experience</span>.
          </h2>
          
          <div className="bg-card/60 backdrop-blur-md border border-white/5 p-6 rounded-2xl space-y-4 text-muted-foreground leading-relaxed shadow-xl">
            <p>
              I'm <strong className="text-foreground">Amarnaath</strong>, a MERN Stack Developer and Machine Learning enthusiast from Coimbatore. I enjoy building complete solutions: frontend interfaces that feel smooth and intuitive, backend APIs that are clean and secure, and ML pipelines that turn unstructured data into actionable insights.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new tools, reading about system design and ML best practices, or refining my existing projects to make them more production-ready.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
            <img 
              src={avatarImage} 
              alt="Developer Avatar" 
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
