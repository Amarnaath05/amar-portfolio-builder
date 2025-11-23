import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    emailjs.init("OF9aNqk4iOjSb5XFY");
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await emailjs.send("service_ap0z9tn", "OF9aNqk4iOjSb5XFY", {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "amarnaathamarnaath12@gmail.com",
      });
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm open to full-time roles, internships, and interesting project collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold font-display">Let's Connect</h3>
            <div className="space-y-6">
              <a href="mailto:amarnaathamarnaath12@gmail.com" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group">
                <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium truncate">amarnaathamarnaath12@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+918220321418" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91-8220321418</p>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a href="https://www.linkedin.com/in/amarnaath-pechimuthu-99617426a/" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full gap-2 hover:text-primary hover:border-primary/50">
                    <Linkedin size={18} /> LinkedIn
                  </Button>
                </a>
                <a href="https://github.com/Amarnaath05" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full gap-2 hover:text-primary hover:border-primary/50">
                    <Github size={18} /> GitHub
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-background/50" disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-background/50" disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[120px] bg-background/50" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
