import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Laptop, 
  Database, 
  Wrench,
  LayoutTemplate
} from "lucide-react";

interface SkillProps {
  name: string;
  percentage: number;
}

function SkillBar({ name, percentage }: SkillProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setValue(percentage);
      }, 300);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [isInView, percentage]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="relative w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const programmingSkills = [
    { name: "Python", percentage: 90 },
    { name: "Java", percentage: 85 },
    { name: "C++", percentage: 80 },
    { name: "JavaScript", percentage: 75 },
    { name: "SQL", percentage: 85 }
  ];

  const webSkills = [
    { name: "HTML/CSS", percentage: 85 },
    { name: "JavaScript", percentage: 75 },
    { name: "Bootstrap", percentage: 80 }
  ];

  const dbSkills = [
    { name: "MySQL", percentage: 85 },
    { name: "MongoDB", percentage: 80 },
    { name: "Firebase", percentage: 75 }
  ];

  const tools = [
    { name: "AWS", icon: <Cloud className="text-yellow-500" /> },
    { name: "JIRA", icon: <Trello className="text-blue-500" /> },
    { name: "Spring Boot", icon: <Leaf className="text-green-500" /> },
    { name: "Anaconda", icon: <Box className="text-blue-600" /> },
    { name: "Git", icon: <GitBranch className="text-purple-600" /> },
    { name: "JUnit", icon: <Beaker className="text-red-500" /> },
    { name: "IntelliJ", icon: <Laptop className="text-gray-800" /> },
    { name: "Colab", icon: <Brain className="text-teal-500" /> }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Code className="text-primary mr-2" />
              Programming Languages
            </h3>
            
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <LayoutTemplate className="text-primary mr-2" />
              Web Development
            </h3>
            
            <div className="space-y-4">
              {webSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Database className="text-primary mr-2" />
              Database Management
            </h3>
            
            <div className="space-y-4">
              {dbSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Wrench className="text-primary mr-2" />
              Frameworks & Tools
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="p-3 rounded-lg shadow-sm border border-gray-100">
                    <CardContent className="p-0 flex items-center">
                      {React.cloneElement(tool.icon, { className: "h-5 w-5 mr-2" })}
                      <span>{tool.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Extra icons not included in lucide-react but needed for the component
function Leaf(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="24" height="24">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>
  );
}

function Trello(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="24" height="24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
      <rect width="3" height="9" x="7" y="7"></rect>
      <rect width="3" height="5" x="14" y="7"></rect>
    </svg>
  );
}

function Cloud(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="24" height="24">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
    </svg>
  );
}

function Beaker(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="24" height="24">
      <path d="M4.5 3h15"></path>
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path>
      <path d="M6 14h12"></path>
    </svg>
  );
}

function Box(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="24" height="24">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
      <path d="m3.3 7 8.7 5 8.7-5"></path>
      <path d="M12 22V12"></path>
    </svg>
  );
}

function GitBranch(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="24" height="24">
      <circle cx="18" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <path d="M18 9v1a2 2 0 0 1-2 2H8"></path>
      <path d="M6 15V6"></path>
    </svg>
  );
}

function Brain(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="24" height="24">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"></path>
    </svg>
  );
}
