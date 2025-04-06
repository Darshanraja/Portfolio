import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  categories: string[];
  publicationUrl?: string;
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Detection of Driver Etiquette for Safe Travel",
      period: "March 2022 - April 2023",
      description: "Mobile application system that addresses safety concerns by providing real-time monitoring of driver behavior and promptly notifying management of any abnormalities. Utilizes voice analysis and facial detection.",
      technologies: ["NLP", "Python", "Firebase", "ML", "CNN", "OpenCV", "Flutter"],
      categories: ["mobile", "ai-ml"],
      publicationUrl: "https://ieeexplore.ieee.org/document/10199231",
    },
    {
      id: 2,
      title: "Heart Rate and Heart Disease Prediction",
      period: "August 2024 - December 2024",
      description: "Developed models to predict heart rates and diagnose heart disease using machine learning techniques. Highlighted the integration of AI with healthcare to enhance diagnostic precision and efficiency.",
      technologies: ["Python", "Machine Learning", "Healthcare", "AI", "Predictive Modeling"],
      categories: ["ai-ml", "healthcare"],
    },
    {
      id: 3,
      title: "Length of Stay Prediction",
      period: "August 2024 - December 2024",
      description: "Created predictive models to estimate hospital stays using real-time datasets, including PhysioNet. Applied interpretability techniques like SHAP, LIME, and Partial Dependence Plots (PDP) for transparency and optimized accuracy and F1 scores.",
      technologies: ["Python", "SHAP", "LIME", "PDP", "PhysioNet", "Healthcare Analytics"],
      categories: ["ai-ml", "healthcare"],
    },
    {
      id: 4,
      title: "Diabetics Detection",
      period: "June 2022 - September 2022",
      description: "Leveraging Logistic Regression for diabetes prediction to determine the likelihood of an individual having diabetes. This specialized Machine Learning algorithm excels in classifying problems through predictive analysis techniques.",
      technologies: ["Python", "Machine Learning", "Supervised Learning", "HTML", "CSS", "JavaScript"],
      categories: ["ai-ml", "web", "healthcare"],
    },
    {
      id: 5,
      title: "Traffic Signals Image Processing",
      period: "December 2021 - March 2023",
      description: "System for monitoring traffic cameras and issuing fines to violators to enhance road safety, deter traffic violations, enforce traffic laws, and provide data for traffic analysis.",
      technologies: ["AI", "CNN", "Deep Learning", "ANPR"],
      categories: ["ai-ml"],
    },
    {
      id: 6,
      title: "Autoparts Management System",
      period: "July 2021 - November 2021",
      description: "An automated system that enables business owners to perform all tasks with the push of a button, minimizing paper use. Features a user-friendly graphical interface with multiple login options.",
      technologies: ["Python", "TKinter", "MongoDB Atlas"],
      categories: ["database"],
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-center mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A showcase of my academic and personal projects demonstrating my technical skills and problem-solving abilities.
        </motion.p>
        
        {/* Project Filters */}
        <motion.div 
          className="mb-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            variant={activeFilter === "all" ? "default" : "outline"} 
            onClick={() => setActiveFilter("all")}
            className={activeFilter === "all" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}
          >
            All
          </Button>
          <Button 
            variant={activeFilter === "ai-ml" ? "default" : "outline"} 
            onClick={() => setActiveFilter("ai-ml")}
            className={activeFilter === "ai-ml" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}
          >
            AI & ML
          </Button>
          <Button 
            variant={activeFilter === "web" ? "default" : "outline"} 
            onClick={() => setActiveFilter("web")}
            className={activeFilter === "web" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}
          >
            Web Development
          </Button>
          <Button 
            variant={activeFilter === "mobile" ? "default" : "outline"} 
            onClick={() => setActiveFilter("mobile")}
            className={activeFilter === "mobile" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}
          >
            Mobile
          </Button>
          <Button 
            variant={activeFilter === "database" ? "default" : "outline"} 
            onClick={() => setActiveFilter("database")}
            className={activeFilter === "database" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}
          >
            Database
          </Button>
          <Button 
            variant={activeFilter === "healthcare" ? "default" : "outline"} 
            onClick={() => setActiveFilter("healthcare")}
            className={activeFilter === "healthcare" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}
          >
            Healthcare
          </Button>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full border border-gray-200 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{project.period}</p>
                      
                      <p className="text-gray-700 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto">
                      {project.publicationUrl ? (
                        <a 
                          href={project.publicationUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 flex items-center"
                        >
                          <span>View Publication</span>
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      ) : (
                        <div></div>
                      )}
                      <Button 
                        variant="secondary"
                        className="px-4 py-2 bg-primary-100 text-primary hover:bg-primary-200"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
