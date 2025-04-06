import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-gray-200 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">Software Associate</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">February 2023 - November 2023</span>
                </div>
                <p className="text-lg font-medium mb-4">Indium Software Pvt. Ltd., Chennai</p>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Completed "Educational Consultancy Application" - Helping students reduce the hassle of finding universities with fully automated suggestions.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Built automation scripts to integrate ECA with JIRA, emails, and other integration software while working on lifecycle management.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Gained hands-on experience with load-balancers and applied automation techniques.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Applied numerous Machine Learning techniques and algorithms in product development.</span>
                  </li>
                </ul>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Automation</Badge>
                  <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Machine Learning</Badge>
                  <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">JIRA</Badge>
                  <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Load Balancing</Badge>
                  <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Integration</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border border-gray-200 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">Software Developer Intern</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">January 2022 - August 2023</span>
                </div>
                <p className="text-lg font-medium mb-4">Phoreuia Pvt. Ltd.</p>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Developed a neural network model for speech recognition in warehouse operations.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Delivered a model with 96% accuracy for speech recognition tasks.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Ensured smooth request handling for real-time predictions in warehouse environments.</span>
                  </li>
                </ul>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Neural Networks</Badge>
                  <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Speech Recognition</Badge>
                  <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Deep Learning</Badge>
                  <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Real-time Processing</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
