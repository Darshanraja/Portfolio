import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function HeroSection({ onContactClick, onProjectsClick }: HeroSectionProps) {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 md:pr-12 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Darshan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700">
              Software Engineer & Data Scientist
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Specializing in machine learning, data analysis, and software development with experience
              in building innovative solutions across multiple domains.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={onContactClick} 
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </Button>
              <Button 
                onClick={onProjectsClick} 
                variant="outline" 
                className="px-6 py-3 bg-white text-primary font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors"
              >
                View Projects
              </Button>
              <Button 
                variant="ghost" 
                className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-200 transition-colors flex items-center gap-2"
                onClick={() => window.open("/resume.pdf")}
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-100 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700 opacity-90"></div>
              <span className="relative text-white text-8xl font-bold">D</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
