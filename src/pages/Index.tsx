
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedTrends from "@/components/FeaturedTrends";
import CategoriesSection from "@/components/CategoriesSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  // Animation controls for the loading sequence
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
      });
    };
    
    sequence();
  }, [controls]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Featured Trends Section */}
        <FeaturedTrends />
        
        {/* Categories Section */}
        <CategoriesSection />
        
        {/* Newsletter Section */}
        <NewsletterSection />
      </motion.div>
    </div>
  );
};

export default Index;
