"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Smartphone,
  Cpu,
  Database,
  GitMerge,
  Shield,
} from "lucide-react";

export default function MyServices() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description:
        "I build responsive, high-performance web applications using React, TypeScript, and modern UI frameworks. My solutions feature clean architecture, RESTful APIs, and secure integrations.",
      features: [
        "React & Next.js Development",
        "TypeScript Integration",
        "API Development & Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Specializing in cross-platform mobile apps with React Native, I create performant applications with features like real-time updates, secure transactions, and intuitive UIs.",
      features: [
        "React Native Development",
        "Cross-Platform Solutions",
        "State Management",
        "Native Module Integration",
      ],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Robust backend systems built with Golang and Python. I design scalable, secure architectures with proper authentication, database optimization, and efficient APIs.",
      features: [
        "Go (Golang) Services",
        "Python (Flask) Services",
        // "Spring Boot Applications",
        "RESTful API Design",
        "Microservices Architecture",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description:
        "Good in database design, optimization, and management. I ensure data integrity while improving query performance and implementing proper indexing strategies.",
      features: [
        "SQL Database Querying",
        "Query Optimization",
        "Data Migration",
        "Performance Tuning",
      ],
    },
    {
      icon: <GitMerge className="w-8 h-8" />,
      title: "DevOps & CI/CD",
      description:
        "Implementing modern DevOps practices including containerization, version control, and automated pipelines to ensure reliable and maintainable deployments.",
      features: [
        "Docker Containerization",
        "Git & GitHub Workflows",
        "Jenkins Pipelines",
        // "Azure DevOps Pipelines",
        "Agile Development",
      ],
    },
    // {
    //   icon: <Shield className="w-8 h-8" />,
    //   title: "API Support & Integration",
    //   description:
    //     "Specialized in API troubleshooting, documentation, and integration support. I help partners seamlessly connect with systems and resolve technical challenges.",
    //   features: [
    //     "API Documentation",
    //     "Integration Support",
    //     "Troubleshooting",
    //     "Websocket Implementation",
    //   ],
    // },
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs, from
            frontend interfaces to backend systems and deployment pipelines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-400"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
