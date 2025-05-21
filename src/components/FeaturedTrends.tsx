
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shirt, Computer, Leaf } from "lucide-react";

const TrendCard: React.FC<{
  image: string;
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ image, category, title, description, icon, delay }) => {
  return (
    <motion.div
      className="trend-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
          {icon}
          <span className="ml-1 text-sm font-medium">{category}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        <Button variant="link" className="text-neon-blue p-0 hover:text-neon-purple">
          Read Analysis →
        </Button>
      </div>
    </motion.div>
  );
};

const FeaturedTrends: React.FC = () => {
  const trends = [
    {
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
      category: "Fashion",
      title: "Sustainable Fabrics Revolution",
      description: "How eco-conscious materials are reshaping the fashion industry landscape.",
      icon: <Shirt size={16} className="text-neon-blue" />,
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      category: "Technology",
      title: "The Rise of Ambient Computing",
      description: "Technology that blends seamlessly into our environment is defining the next era.",
      icon: <Computer size={16} className="text-neon-purple" />,
    },
    {
      image: "https://images.unsplash.com/photo-1520767669568-6e9a710caacc",
      category: "Lifestyle",
      title: "Biophilic Design Movement",
      description: "Bringing nature indoors - the growing trend of nature-inspired living spaces.",
      icon: <Leaf size={16} className="text-neon-pink" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-secondary/30" id="trends">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="text-gradient">Trends</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Discover the latest trends that are shaping industries and cultures globally. Our experts provide in-depth analysis on what's next.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <TrendCard key={index} {...trend} delay={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white px-8 py-6">
            View All Trends
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrends;
