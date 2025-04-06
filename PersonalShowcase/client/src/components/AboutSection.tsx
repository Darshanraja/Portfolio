import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/3 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg"
              >
                <img 
                  src="/images/profile.jpeg" 
                  alt="Darshan" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-lg mb-6">
                I am a masters student in Information Technology with a concentration in Data Science at UNC Charlotte. 
                With a solid foundation in software development and data analytics, I am passionate about leveraging technology 
                to create impactful solutions.
              </p>
              <p className="text-lg mb-6">
                My experience as a Software Associate at Indium Software allowed me to develop robust applications and implement 
                machine learning techniques for real-world problems. I'm particularly interested in the intersection of AI, data science, 
                and software engineering.
              </p>
              <p className="text-lg">
                Outside of my professional work, I've been actively involved in leadership roles, including serving as Head of Visual Design for 
                digital marketing and as VP of a Biker Club focused on environmental awareness. These experiences have enhanced my 
                communication and organizational skills.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card className="border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6 px-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                  <p className="text-gray-600">Building efficient, scalable applications with modern technologies</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={item}>
              <Card className="border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6 px-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                  <p className="text-gray-600">Applying advanced algorithms to extract insights from complex data</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={item}>
              <Card className="border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6 px-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                  <p className="text-gray-600">Transforming raw data into actionable business intelligence</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
