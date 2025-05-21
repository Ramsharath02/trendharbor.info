
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TrendHarbor. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Terms</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Cookie Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
