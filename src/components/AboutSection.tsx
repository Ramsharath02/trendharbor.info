
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Info, Users, Building } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-neon-blue" />,
      title: "Trend Forecasting",
      description: "Advanced analytics and AI to predict emerging trends before they hit the mainstream.",
    },
    {
      icon: <Info className="h-8 w-8 text-neon-purple" />,
      title: "Expert Insights",
      description: "Deep dives from industry experts across fashion, technology, and lifestyle sectors.",
    },
    {
      icon: <Users className="h-8 w-8 text-neon-pink" />,
      title: "Community Driven",
      description: "Powered by a global community of trend spotters and cultural observers.",
    },
    {
      icon: <Building className="h-8 w-8 text-neon-orange" />,
      title: "Industry Partnerships",
      description: "Collaborations with leading brands to deliver exclusive trend insights.",
    },
  ];

  return (
    <section className="py-24 bg-black" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">TrendHarbor</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              We are at the forefront of trend forecasting, identifying and analyzing patterns across industries before they become mainstream. Our experts work tirelessly to provide you with the most accurate and insightful trend analysis.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-xl border border-white/5 hover:border-neon-blue/30 transition-all"
            >
              <div className="mb-4 bg-black/40 p-3 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 p-8 bg-gradient-to-br from-secondary to-black border border-white/10 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/70 mb-4">
                At TrendHarbor, we're dedicated to providing our audience with cutting-edge insights into emerging global trends. We believe that understanding trends is key to innovation and staying ahead in today's fast-paced world.
              </p>
              <p className="text-white/70">
                Our team of experts spans across continents, constantly monitoring and analyzing cultural shifts, technological advancements, and evolving consumer preferences to deliver the most relevant and timely trend insights.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-1 w-10 bg-neon-blue mr-4"></div>
                <span className="text-white font-medium">Global Coverage</span>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-10 bg-neon-purple mr-4"></div>
                <span className="text-white font-medium">Research-Backed Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-10 bg-neon-pink mr-4"></div>
                <span className="text-white font-medium">Predictive Insights</span>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-10 bg-neon-orange mr-4"></div>
                <span className="text-white font-medium">Industry Expertise</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
