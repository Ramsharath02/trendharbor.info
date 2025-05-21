
import React from "react";
import { motion } from "framer-motion";
import { MailOpen, BookOpenText, Send, Calendar } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <BookOpenText className="h-8 w-8 text-neon-blue" />,
      title: "Curated Content",
      description: "Carefully selected stories and insights delivered in an easy-to-digest format.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-neon-purple" />,
      title: "Weekly Delivery",
      description: "Fresh perspectives and trends delivered to your inbox every week.",
    },
    {
      icon: <MailOpen className="h-8 w-8 text-neon-pink" />,
      title: "Reader-Focused",
      description: "Content tailored to your interests with a clean, distraction-free reading experience.",
    },
    {
      icon: <Send className="h-8 w-8 text-neon-orange" />,
      title: "Easy Sharing",
      description: "Seamlessly share your favorite articles across social platforms.",
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
              We deliver thoughtfully curated newsletters that keep you informed about emerging trends and innovations. Our team of writers and editors work tirelessly to bring you the most relevant and engaging content.
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
                At TrendHarbor, we're dedicated to delivering valuable, insightful content that keeps our readers informed and inspired. We believe that staying updated shouldn't be overwhelming or time-consuming.
              </p>
              <p className="text-white/70">
                Our talented team of writers and researchers work across different time zones to curate the most relevant stories and package them in a format that respects your time and attention.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-1 w-10 bg-neon-blue mr-4"></div>
                <span className="text-white font-medium">Thoughtful Curation</span>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-10 bg-neon-purple mr-4"></div>
                <span className="text-white font-medium">Insightful Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-10 bg-neon-pink mr-4"></div>
                <span className="text-white font-medium">Reader-Centered Design</span>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-10 bg-neon-orange mr-4"></div>
                <span className="text-white font-medium">Consistent Delivery</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
