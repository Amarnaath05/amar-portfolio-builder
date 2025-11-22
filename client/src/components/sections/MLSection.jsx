import { motion } from "framer-motion";
import { Bot, BarChart3, GitBranch, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mlProjects = [
  {
    title: "Google Reviews NLP Classifier",
    description: "Analyzes supermarket reviews to classify service quality dimensions (Tangibles, Reliability, Responsiveness). Implemented multi-label classification with high F1 scores.",
    metrics: ["Micro F1 Score", "Cohen's Kappa", "Subset Accuracy"],
    tech: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Pandas"],
    githubLink: "https://github.com/Amarnaath05/ServiceQuality-NLP.git",
    liveLink: "https://example.com"
  },
  {
    title: "Google Maps Supermarket Scraper",
    description: "Automated pipeline to scrape, clean, and structure data from Google Maps across multiple cities for downstream NLP analysis.",
    metrics: ["Data Cleaning", "Web Scraping", "Data Pipeline"],
    tech: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
    githubLink: "https://github.com/Amarnaath05/nlp-google-reviews.git",
    liveLink: "https://example.com"
  },
  {
    title: "Diabetes Prediction System",
    description: "Supervised machine learning pipeline to predict the likelihood of diabetes using patient health indicators, including data preprocessing, feature analysis, model training, and performance evaluation.",
    metrics: ["Classification", "Model Evaluation", "Medical Dataset Analysis", "Feature Engineering & Data Cleaning"],
    tech: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn", "NumPy", "Matplotlib/Seaborn"],
    githubLink: "https://github.com/Amarnaath05/Diabetes-Prediction-System.git",
    liveLink: "https://example.com"
  }
];

export default function MLSection() {
  return (
    <section id="ml-nlp" className="py-20 relative bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Data Science & AI</span>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-display">ML & NLP Projects</h2>
            <ExternalLink className="w-6 h-6 text-secondary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Applying machine learning algorithms and natural language processing to derive meaningful insights from unstructured data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mlProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-md border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    {index === 0 ? <Bot className="w-8 h-8 text-emerald-400" /> : <BarChart3 className="w-8 h-8 text-blue-400" />}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-colors"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Metrics & Focus</div>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-medium border border-primary/10">
                          <GitBranch size={12} />
                          {m}
                        </div>
                      ))}
                    </div>
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
