
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MailPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Success!",
        description: "You've been subscribed to our weekly trend reports.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/50 to-black" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="h-12 w-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
              <MailPlus className="h-6 w-6 text-neon-blue" />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Ahead of the <span className="text-gradient">Curve</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Subscribe to our weekly trend reports and never miss out on the latest innovations and emerging patterns across industries.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50 h-12"
              />
              <Button 
                type="submit"
                className="bg-neon-blue hover:bg-neon-blue/80 text-white h-12"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>
          
          <div className="mt-8 text-center text-white/50 text-sm">
            By subscribing, you agree to receive TrendHarbor's emails and accept our Privacy Policy.
          </div>
        </motion.div>
        
       
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} TrendHarbor. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
