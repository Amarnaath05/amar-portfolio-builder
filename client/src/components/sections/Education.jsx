import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-foreground">B.Tech. in Information Technology</h3>
                    <div className="flex items-center text-muted-foreground font-medium">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Karpagam College of Engineering, Coimbatore</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium w-fit">
                      <Calendar className="w-3 h-3 mr-2" />
                      2022 – 2026
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
                      <Award className="w-3 h-3 mr-2" />
                      CGPA: 8.02
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground pt-2 leading-relaxed">
                    Focused on full-stack development, data structures, algorithms, and machine learning, with practical experience in MERN projects and AI/NLP applications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
