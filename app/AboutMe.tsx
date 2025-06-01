"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Smartphone,
  Calendar,
  GraduationCap,
  Cpu,
} from "lucide-react";

export default function AboutMe(){
    return (
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I’m Kataboi Meshack, a passionate Software Developer based
                    in Nairobi, Kenya, with a strong focus on building scalable
                    and user-friendly web and mobile applications. My stack
                    includes React, React Native, TypeScript, Golang, and
                    PostgreSQL, and I enjoy solving real-world problems through
                    clean, maintainable code.
                  </p>
                  <p>
                    I’ve had the opportunity to work on impactful projects —
                    from streamlining delivery logistics with ParcelPoa to
                    improving customer engagement at Britam through chatbot
                    automation and travel insurance platforms. I also lead the
                    development of a youth-focused savings app, integrating
                    real-time features and secure saving mechanisms.
                  </p>
                  <p>
                    My workflow blends frontend precision with backend
                    efficiency, supported by tools like Git, Docker, and Agile
                    practices. I take pride in contributing to collaborative
                    teams and always strive to deliver work that’s both
                    functional and elegant.
                  </p>
                  <p>
                    I'm currently open to exciting opportunities where I can
                    continue to grow, innovate, and build technology that makes
                    a difference.
                  </p>
                </div>

                <Tabs defaultValue="skills" className="mt-8">
                  <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
                    <TabsTrigger
                      value="skills"
                      className="data-[state=active]:bg-blue-600"
                    >
                      Skills
                    </TabsTrigger>
                    <TabsTrigger
                      value="experience"
                      className="data-[state=active]:bg-blue-600"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger
                      value="education"
                      className="data-[state=active]:bg-blue-600"
                    >
                      Education
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="skills" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                        <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                          <Code2 className="w-4 h-4 mr-2" />
                          Web Development
                        </h4>
                        <p className="text-slate-300 text-sm">
                          Full-stack developer specializing in React,
                          TypeScript, Python and Go. I build responsive web
                          applications with seamless API integration, focusing
                          on performance and user experience.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                        <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                          <Smartphone className="w-4 h-4 mr-2" />
                          App Development
                        </h4>
                        <p className="text-slate-300 text-sm">
                          React Native developer creating cross-platform mobile
                          applications with features like real-time tracking and
                          secure transactions, optimized for performance.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                        <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                          <Cpu className="w-4 h-4 mr-2" />
                          Backend Development
                        </h4>
                        <p className="text-slate-300 text-sm">
                          Experienced in building robust backend systems with
                          Go (Gin), Python (Flask), and Node.js, designing RESTful APIs,
                          and optimizing database performance.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="experience" className="mt-6 space-y-4">
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        Nov 2024 to Jan 2025
                      </div>
                      <h4 className="text-white font-medium mb-2">
                        Software Developer Intern - Britam Holdings PLC
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Developed a WhatsApp chatbot that improved agent
                        operations by 55% and contributed to a travel insurance
                        platform. Conducted regression testing and API
                        troubleshooting while collaborating with designers to
                        enhance UI/UX.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        Jul 2024 to Nov 2024
                      </div>
                      <h4 className="text-white font-medium mb-2">
                        Full Stack Developer - ParcelPoa
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Led development of a delivery system using React, with
                        analytics display and improving user experience by 15%
                        and transparency by 50% through real-time tracking.
                        Resolved 100+ bugs and ensured a secure platform.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        Sep 2023 to Nov 2023
                      </div>
                      <h4 className="text-white font-medium mb-2">
                        Digital Marketing (Intern)
                      </h4>
                      <p className="text-slate-300 text-sm">
                        I did manage our online presence across different
                        channels, making sure our campaigns are running smoothly
                        and reaching the right people. Data is my best friend
                        too – I analyze results to see what's working and what's
                        not.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="education" className="mt-6 space-y-4">
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Sep 2024 to Aug 2026
                      </div>
                      <p className="text-slate-300 text-sm">
                        Bachelor of Science in Software Engineering at Zetech
                        University
                      </p>
                    </div>
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Feb 2024 to Aug 2024
                      </div>
                      <p className="text-slate-300 text-sm">
                        Professional Certification in Software Development at
                        Moringa School
                      </p>
                    </div>
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Jan 2022 to Nov 2023
                      </div>
                      <p className="text-slate-300 text-sm">
                        Higher Diploma in Software Engineering at Zetech
                        University (GPA: 3.72/4.00)
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                  <img
                    // src="/PassportPhoto.jpeg?height=600&width=500"
                    src="/myAiPhoto.png?height=600&width=500"
                    alt="Meshack"
                    className="relative rounded-2xl shadow-2xl border border-slate-700/50"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
}