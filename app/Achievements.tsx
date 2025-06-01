"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Achievements(){

    const achievements = [
      // {
      //   title: "AWS Certified Developer",
      //   issuer: "Amazon Web Services",
      //   date: "2024",
      //   description:
      //     "Demonstrated ability to develop and maintain AWS applications.",
      // },
      {
        title: "4th Place - PLP Hackathon",
        issuer: "Sheria360 Project",
        date: "2024",
        description:
          "Received a prize for developing a legal tech solution with React and Python.",
      },
      {
        title: "Kubernetes and Cloud Native Associate", // KCNA
        issuer: "Linux Foundation + Andela",
        date: "2025",
        description:
          "Completed the Kubernetes and Cloud Native Associate certification.",
      },
      {
        title: "Best Final Year Project",
        issuer: "Zetech University",
        date: "2023",
        description:
          "Awarded for innovative school management system using React and Flask.",
      },
    ];
    
    return (
        <section id="achievements" className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl font-bold mb-4">Achievements</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                      Certifications and awards that validate my expertise.
                    </p>
                  </motion.div>
        
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {achievements.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="bg-slate-800/30 border-slate-700/50 h-full hover:bg-slate-800/50 transition-all">
                          <CardContent className="p-6">
                            <div className="flex justify-between mb-2">
                              <h3 className="text-lg font-semibold">{item.title}</h3>
                              <Badge
                                variant="secondary"
                                className="bg-blue-600/20 text-blue-300"
                              >
                                {item.date}
                              </Badge>
                            </div>
                            <p className="text-blue-400 text-sm mb-2">{item.issuer}</p>
                            <p className="text-slate-300">{item.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
    )
}