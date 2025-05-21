
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden" id="home">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-city-at-night-with-traffic-and-buildings-33892-large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Insights Delivered to Your </span>
              <span className="text-gradient">Inbox</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
              TrendHarbor delivers curated newsletters on global trends in fashion, technology, lifestyle, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-neon-blue hover:bg-neon-blue/80 text-white px-8 py-6 text-lg btn-neon-glow"
                size="lg"
              >
                Subscribe to Our Newsletter
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 hover:bg-white/10 text-white px-8 py-6 text-lg"
                size="lg"
              >
                Browse Past Issues
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/60 text-sm mb-2">Scroll Down</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/0 to-white/60"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
