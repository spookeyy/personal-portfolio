"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const testimonials = [
  {
    initials: "OM",
    name: "Owen Maina",
    role: "Software Developer, Britam Holdings PLC ",
    content:
      "Meshack was instrumental in developing our WhatsApp chatbot, bringing fresh ideas and technical expertise. His ability to quickly understand complex requirements and deliver quality code was impressive.",
  },
  {
    initials: "RS",
    name: "Rachael Shitanda",
    role: "Business Owner, ParcelPoa",
    content:
      "The delivery system Meshack built transformed our operations. His attention to detail in implementing real-time tracking reduced disputes by 50%. He's a developer who truly understands business needs.",
  },
  {
    initials: "KK",
    name: "Kelvin Kipchumba",
    role: "Technical Instructor, Moringa School",
    content:
      "Meshack stands out for his problem-solving skills and dedication. During the bootcamp, he consistently delivered projects ahead of schedule while mentoring other students. A true full-stack talent.",
  },
  {
    initials: "JK",
    name: "Joyce Kyengo",
    role: "Product Anlayst, Britam Holdings PLC",
    content:
      "Working with Meshack was a pleasure. His attention to detail and commitment to quality resulted in a product that exceeded our expectations. He's both technically skilled and a great communicator.",
  },
];

export default function TestimonialsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, isInView]);
  
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-black via-slate-900 to-black relative z-10 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-slate-400 mb-2 uppercase tracking-wide text-sm">
            Happy Clients & Trusted by Colleagues
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            What Clients and Colleagues Say about Me
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Don't just take my word for it - here's what colleagues and clients
            I have had pleasure to work with have to say about it.
          </p>
        </div>

        <div className="relative h-64 md:h-80 group">
          {/* Gradient fade effects on sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          {/* Auto-scrolling container */}
          <motion.div
            className="flex absolute top-0 left-0 h-full"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* Duplicate testimonials for seamless looping */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 h-full px-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-800/30 border border-slate-700/40 h-full p-6 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold mr-4 shadow-inner shadow-purple-800/30">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic mb-4 leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
