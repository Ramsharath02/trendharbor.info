
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shirt, Computer, Leaf } from "lucide-react";

const CategoryCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}> = ({ title, description, icon, color, delay }) => {
  return (
    <motion.div
      className={`p-8 rounded-xl border border-white/10 relative overflow-hidden group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      style={{ background: `linear-gradient(to bottom right, #111111, ${color}20)` }}
    >
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-transparent to-[color:var(--color)] group-hover:opacity-20 transition-opacity duration-500"
        style={{ '--color': color } as React.CSSProperties}
      ></div>
      
      <div className={`p-3 rounded-lg inline-block mb-4`} style={{ background: `${color}20` }}>
        {React.cloneElement(icon as React.ReactElement, { 
          className: 'h-8 w-8',
          style: { color } 
        })}
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>
      
      <Button variant="outline" className="border-white/20 hover:border-white/40 bg-black/30 hover:bg-black/50">
        Explore {title} Trends
      </Button>
    </motion.div>
  );
};

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      title: "Fashion",
      description: "From sustainable practices to emerging styles, discover what's defining tomorrow's fashion landscape.",
      icon: <Shirt />,
      color: "#33C3F0",
    },
    {
      title: "Technology",
      description: "Stay ahead of the curve with insights on transformative tech trends and digital innovations.",
      icon: <Computer />,
      color: "#8B5CF6",
    },
    {
      title: "Lifestyle",
      description: "Explore evolving societal trends that are reshaping how we live, work, and interact.",
      icon: <Leaf />,
      color: "#D946EF",
    },
  ];

  return (
    <section className="py-24 bg-black" id="categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trend <span className="text-gradient">Categories</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Our trend research spans multiple industries and domains, providing comprehensive insights across various categories.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              color={category.color}
              delay={index}
            />
          ))}
        </div>

        <motion.div 
          className="mt-16 p-8 rounded-xl border border-white/10 bg-secondary/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Looking for custom trend research?</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Our team of experts can provide tailored trend analysis and forecasting services for your specific industry or business needs.
            </p>
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90">
              Contact Our Research Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
