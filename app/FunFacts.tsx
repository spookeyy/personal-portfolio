"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MyFunFacts(){
    return (
      <section id="funfacts" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl p-8 md:p-12 border border-slate-700/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Beyond Code, A Glimpse Into My World
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "🧩", label: "Puzzle Solver" },
                // { icon: "♟️", label: "Chess Enthusiast" },
                { icon: "🌍", label: "Travel Lover" },
                { icon: "📚", label: "Book Worm" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 rounded-xl p-4"
                >
                  <span className="text-4xl block mb-2">{item.icon}</span>
                  <p className="text-sm text-slate-300">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or solving Rubik's cubes (my personal
              best is under ___ minutes! Well, We can always find out...).
            </p>

            <Button variant="outline" asChild>
              <a href="#contact" className="border-slate-600">
                Let's Connect Over Coffee ☕
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    );
}