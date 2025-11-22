import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export default function Projects() {
  const projects: Project[] = projectsData as Project[];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-md text-right">
            A selection of web applications built with the MERN stack and modern frontend tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FolderGit2 size={24} />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-primary/10 hover:text-primary" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-primary/10 hover:text-primary" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-base pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tag, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
