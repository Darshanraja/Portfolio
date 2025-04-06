import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">University of North Carolina at Charlotte</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">January 2024 - December 2025</span>
                </div>
                <div>
                  <p className="text-lg font-medium mb-2">Masters in Information Technology</p>
                  <p className="mb-2"><span className="font-medium">Concentration:</span> Data Science</p>
                  <p className="mb-4"><span className="font-medium">GPA:</span> 4.0</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Data Mining</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Mobile App Development</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Information Privacy</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Human Centered Design</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">AI in Healthcare</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Database Systems</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Applied Database</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">Kumaraguru College of Technology</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">August 2019 - April 2023</span>
                </div>
                <div>
                  <p className="text-lg font-medium mb-2">Bachelors in Information Science and Engineering</p>
                  <p className="mb-4"><span className="font-medium">GPA:</span> 3.52</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Java</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">DBMS</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">C++</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Computer Systems and Concepts</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Algorithms & Data Structures</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Web Development</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Python Programming</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Artificial Intelligence</Badge>
                      <Badge variant="secondary" className="bg-primary-100 text-primary hover:bg-primary-200">Machine Learning</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
