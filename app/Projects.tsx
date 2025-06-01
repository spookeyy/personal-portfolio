"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MyProjects() {
  const projects = [
    {
      title: "ParcelPoa - Online Delivery System",
      description:
        "Developed a responsive online delivery system using React, improving user experience for Sellers, Agents, and Buyers. Enhanced transparency in the delivery process through seamless integration with backend APIs and real-time parcel tracking.",
      image: "/parcelpoa.png?height=300&width=500",
      // liveUrl: "https://parcelpoa.netlify.app/",
      liveUrl: "https://parcelpoa.marps.co.ke",
      githubUrl: "#",
      tags: [
        "React",
        "API Integration",
        "Real-time Tracking",
        "Responsive Design",
        "Tailwind",
        "JavaScript",
        "Postgres",
        "Flask-Python",
      ],
      featured: true,
    },
    {
      title: "School Management System",
      description:
        "This web app lets you manage various activities of a school, majorly educational and also a Parent Mobile App. You can view the web app by clicking on the icon below.",
      image: "/sms-edu.png?height=300&width=500",
      liveUrl: "https://sms.marps.co.ke/",
      githubUrl: "#",
      tags: [
        "School Management",
        "School Admin Dashboard",
        "Teacher Dashboard",
        "Parents Mobile App",
        "User Experience",
        "React Native",
        "JavaScript",
        "Flask-Python",
        "Postgres",
        "Tailwind",
      ],
      featured: true,
    },
    {
      title: "Modern Weather App(golang)",
      description:
        "This web app lets you check the weather of any city in the world. You can view the web app by clicking on the icon below.",
      image: "/weather-app.png?height=300&width=500",
      liveUrl: "https://pawa-weather-app.netlify.app/",
      githubUrl: "https://github.com/spookeyy/Go-Weather-App",
      tags: [
        "Weather App",
        "Golang",
        "Gin Framework",
        "TypeScript",
        "API Integration",
        "OpenWeatherMap API",
      ],
      featured: false,
    },
    {
      title: "Security Camera Program",
      description:
        "This program detects any motion in front of the camera and alerts using beep sounds when a movement is detected. You can get the full source code on my github.",
      image: "/placeholder.svg?height=300&width=500",
      liveUrl: "#",
      githubUrl: "https://github.com/spookeyy/security-cam-python",
      tags: ["Python", "Computer Vision", "Motion Detection", "Security"],
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in web development, design, and problem-solving.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/30 border-slate-700/50 overflow-hidden group hover:bg-slate-800/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <div className="flex space-x-3">
                          <Button size="sm" variant="secondary" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          {/* <Button size="sm" variant="outline" asChild>
                                      <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Github className="w-4 h-4" />
                                      </a>
                                    </Button> */}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-blue-600/20 text-blue-300 border-blue-600/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/30 border-slate-700/50 overflow-hidden group hover:bg-slate-800/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <Button size="sm" variant="secondary" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-blue-600/20 text-blue-300 border-blue-600/30 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a
                href="https://github.com/spookeyy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
