"use client";

import {
  SiReact,
  SiTypescript,
  SiGo,
  SiPython,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiMysql,
  SiFramer,
} from "react-icons/si";
import { FaMobileAlt, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SkillsAndTechnologies() {
  const skills = [
    { name: "React", icon: <SiReact />, level: "90%" },
    { name: "TypeScript", icon: <SiTypescript />, level: "85%" },
    { name: "Golang", icon: <SiGo />, level: "80%" },
    { name: "Python", icon: <SiPython />, level: "75%" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "85%" },
    { name: "React Native", icon: <FaMobileAlt />, level: "80%" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "90%" },
    { name: "Docker", icon: <SiDocker />, level: "70%" },
    { name: "Git", icon: <SiGit />, level: "95%" },
    { name: "RESTful APIs", icon: <FaLink />, level: "85%" },
    { name: "Framer Motion", icon: <SiFramer />, level: "90%" },
    { name: "MySQL", icon: <SiMysql />, level: "85%" },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div
          className="overflow-hidden group relative"
          onMouseDown={(e) => {
            const container = e.currentTarget.querySelector(
              ".scroll-inner"
            ) as HTMLElement | null;
            if (!container) return;

            let isDown = true;
            const startX = e.pageX - container.offsetLeft;
            const scrollLeft = container.scrollLeft;

            const onMouseMove = (e: MouseEvent) => {
              if (!isDown) return;
              const x = e.pageX - container.offsetLeft;
              const walk = (x - startX) * 1.5;
              container.scrollLeft = scrollLeft - walk;
            };

            const onMouseUp = () => {
              isDown = false;
              window.removeEventListener("mousemove", onMouseMove);
              window.removeEventListener("mouseup", onMouseUp);
            };

            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
          }}
        >
          <div className="scroll-inner flex w-max animate-scroll-x group-hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index % skills.length) * 0.1,
                }}
                viewport={{ once: true }}
                className="min-w-[180px] mx-2 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center hover:bg-slate-800/50 transition-all"
              >
                <span className="text-4xl text-cyan-400 mb-2 block">
                  {skill.icon}
                </span>
                <h3 className="font-medium text-slate-200 mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
