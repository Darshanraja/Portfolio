import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  BarChart, 
  Cloud, 
  ListChecks, 
  Brain, 
  ShieldCheck 
} from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      title: "Flutter with Dart",
      provider: "Udemy",
      url: "https://www.udemy.com/certificate/UC-fe614479-78db-4dab-bef4-44a9554e7a20/",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      id: 2,
      title: "Fundamentals of Visualization",
      provider: "Coursera",
      url: "https://coursera.org/share/3b5a8b28c2ca63775d7c3a571fa3536d",
      icon: <BarChart className="h-6 w-6 text-primary" />
    },
    {
      id: 3,
      title: "Migrating to AWS Cloud",
      provider: "Coursera",
      url: "https://coursera.org/share/c4eb54fc9bf5a47d87758297713e97ba",
      icon: <Cloud className="h-6 w-6 text-primary" />
    },
    {
      id: 4,
      title: "Agile with Atlassian JIRA",
      provider: "Coursera",
      url: "https://coursera.org/share/161b6e9d68f337598cbe01995abe6f79",
      icon: <ListChecks className="h-6 w-6 text-primary" />
    },
    {
      id: 5,
      title: "Machine Learning with Python",
      provider: "Coursera",
      url: "https://coursera.org/share/b60665ff43d46992241bd50e84acb445",
      icon: <Brain className="h-6 w-6 text-primary" />
    },
    {
      id: 6,
      title: "Software Security",
      provider: "Coursera",
      url: "https://coursera.org/share/e4f5b85115ccb9687521cfb3d0b61791",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-3 mr-4 flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                        <p className="text-gray-600 text-sm">{cert.provider}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
