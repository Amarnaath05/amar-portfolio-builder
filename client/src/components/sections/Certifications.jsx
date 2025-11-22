import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import metaLogo from "@assets/image_1763813755354.png";
import hackerRankLogo from "@assets/image_1763813799198.png";
import ibmLogo from "@assets/image_1763813828440.png";

const certifications = [
  {
    id: "1",
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "2024",
    logo: metaLogo,
    verificationLink: "https://www.coursera.org/account/accomplishments/verify/META"
  },
  {
    id: "2",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2025",
    logo: hackerRankLogo,
    verificationLink: "https://www.hackerrank.com/certificates/verify"
  },
  {
    id: "3",
    title: "Machine Learning with Python",
    issuer: "IBM – Cognitive Class",
    date: "2024",
    logo: ibmLogo,
    verificationLink: "https://cognitiveclass.ai/certificates"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full gap-4">
                  <div className="flex items-start justify-between">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer} 
                      className="h-16 w-auto object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="inline-flex items-center text-xs text-muted-foreground/70 bg-muted px-2 py-1 rounded-full">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </span>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-mono text-primary">{cert.issuer}</p>
                    <h3 className="text-lg font-bold font-display group-hover:text-primary transition-colors leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-2 hover:text-primary hover:border-primary/50 mt-auto"
                    asChild
                  >
                    <a href={cert.verificationLink} target="_blank" rel="noopener noreferrer">
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
