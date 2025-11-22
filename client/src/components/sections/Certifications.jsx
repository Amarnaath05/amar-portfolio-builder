import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    id: "1",
    title: "Front-End Development Course",
    issuer: "Udemy",
    date: "2024"
  },
  {
    id: "2",
    title: "Machine Learning & Data Science Bootcamp",
    issuer: "Coursera",
    date: "2023"
  },
  {
    id: "3",
    title: "Hackathon Participation: Smart India Hackathon",
    issuer: "Government of India",
    date: "2023"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Certifications</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="bg-secondary/10 p-3 rounded-full group-hover:bg-secondary/20 transition-colors">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-display group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <div className="hidden sm:flex items-center text-sm text-muted-foreground/70 bg-muted px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3 mr-2" />
                    {cert.date}
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
