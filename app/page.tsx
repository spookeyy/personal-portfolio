"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import {
  Code2,
  Palette,
  Smartphone,
  ExternalLink,
  Github,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Download,
  Menu,
  X,
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  GraduationCap,
  Send,
} from "lucide-react";

export default function MeshackPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Animation variants for the Rubik's cube
  const cubeVariants = {
    twistTop: {
      rotateX: 90,
      transition: { duration: 1 },
    },
    twistRight: {
      rotateY: 90,
      transition: { duration: 1 },
    },
    twistBottom: {
      rotateX: -90,
      transition: { duration: 1 },
    },
    twistLeft: {
      rotateY: -90,
      transition: { duration: 1 },
    },
    initial: {
      rotateX: 0,
      rotateY: 0,
      transition: { duration: 1 },
    },
  };

  const [cubeAnimation, setCubeAnimation] = useState("initial");

  useEffect(() => {
    // Sequence of cube rotations
    const sequence = [
      "twistTop",
      "twistRight",
      "twistBottom",
      "twistLeft",
      "initial",
    ];

    let currentIndex = 0;

    const interval = setInterval(() => {
      setCubeAnimation(sequence[currentIndex]);
      currentIndex = (currentIndex + 1) % sequence.length;
    }, 2000); // Change animation every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact-resend", { // using resend for auto replies
        // const response = await fetch("/api/contact", {  //using gmail for auto replies and sending emails
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          description: "✅ Thank you for reaching out.",
        });
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        toast.error("Failed to send message", {
          description: "❌ Please try again or contact me directly.",
        });
        setSubmitStatus("error");
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error occurred", {
        description: "❌ Please check your connection and try again.",
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "ParcelPoa - Online Delivery System",
      description:
        "Developed a responsive online delivery system using React, improving user experience for Sellers, Agents, and Buyers. Enhanced transparency in the delivery process through seamless integration with backend APIs and real-time parcel tracking.",
      image: "/placeholder.svg?height=300&width=500",
      liveUrl: "https://parcelpoa.netlify.app/",
      githubUrl: "#",
      tags: [
        "React",
        "API Integration",
        "Real-time Tracking",
        "Responsive Design",
      ],
      featured: true,
    },
    {
      title: "Hetelogix",
      description:
        "This is a comprehensive web application built for managing hotel accommodations while providing seamless user experiences for customers and efficient management tools for administrators.",
      image: "/placeholder.svg?height=300&width=500",
      liveUrl: "https://stay-manager-mg.netlify.app/",
      githubUrl: "https://github.com/spookeyy/stayManager",
      tags: ["Hotel Management", "Admin Dashboard", "User Experience"],
      featured: true,
    },
    {
      title: "Product Manager App",
      description:
        "This web app lets you manage variety of products. You can view the web app by clicking on the icon below.",
      image: "/placeholder.svg?height=300&width=500",
      liveUrl: "https://gina-product-mg.netlify.app/",
      githubUrl: "https://github.com/spookeyy/product_manager",
      tags: ["Product Management", "CRUD Operations", "React"],
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

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Website and Web App Development",
      description:
        "I am at the outset of my web development journey, additionally am enthusiastic about acquiring the essential skills and experience required to craft engaging and functional websites.",
      features: [
        "Responsive Design",
        "Modern Frameworks",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "I'm at the dawn of my UI/UX design career, excited to cultivate the skills and insights necessary to shape exceptional user experiences, fostering a strong connection between products and their audience.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Design",
      description:
        "I am currently in the planning stages of venturing into app design and development, eager to embark on this exciting journey as I gradually build the skills and knowledge needed for creating innovative and user-friendly applications.",
      features: [
        "Mobile First",
        "Cross Platform",
        "User Interface",
        "App Architecture",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Toaster />
      {/* Complete 3x3x3 Rubik's Cube with Carbon Fiber Look */}
      

      {/* Rest of your existing code remains exactly the same */}
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Meshack
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "portfolio", label: "Portfolio" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-slate-800"
            >
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "portfolio", label: "Portfolio" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10 pt-20"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <Star className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Meshack
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-4">
                UI/UX Designer / Full Stack Developer
              </p>

              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                A passionate Full Stack Developer crafting digital experiences
                with modern technologies and creative solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollToSection("portfolio")}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-700 hover:bg-slate-800 hover:text-white px-8"
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                    In this early stage of my career, I am excited to be part of
                    a dynamic team, where I can contribute my skills and soak up
                    knowledge like a sponge.
                  </p>
                  <p>
                    My days are filled with lines of code, problem-solving, and
                    collaboration with more experienced developers who
                    generously share their expertise. I'm often working on tasks
                    that challenge me, which is exactly what I signed up for.
                  </p>
                  <p>
                    As an employer, you can count on me to inject fresh energy,
                    innovative thinking, and a tireless work ethic into your
                    development team. My dedication to excellence and my
                    unwavering commitment to making a difference make me a
                    compelling asset to any software development endeavor.
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
                          <Palette className="w-4 h-4 mr-2" />
                          UI/UX Design
                        </h4>
                        <p className="text-slate-300 text-sm">
                          I work as a UI/UX designer, seamlessly merging
                          aesthetics and functionality to create user
                          experiences that flow effortlessly.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                        <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                          <Code2 className="w-4 h-4 mr-2" />
                          Web Development
                        </h4>
                        <p className="text-slate-300 text-sm">
                          I'm a web developer, coding digital experiences one
                          line at a time, and I thrive on turning ideas into
                          interactive realities.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                        <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                          <Smartphone className="w-4 h-4 mr-2" />
                          App Development
                        </h4>
                        <p className="text-slate-300 text-sm">
                          I'm an app developer, crafting digital solutions that
                          enhance user experiences, while diligently optimizing
                          every detail.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="experience" className="mt-6 space-y-4">
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
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        Aug 2021 to Dec 2021
                      </div>
                      <h4 className="text-white font-medium mb-2">
                        Cyber Cafe Manager
                      </h4>
                      <p className="text-slate-300 text-sm">
                        As a cyber cafe manager, I oversee the daily operations
                        of our establishment, ensuring a secure and
                        user-friendly environment for customers. My
                        responsibilities include managing computer systems and
                        providing technical support.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="education" className="mt-6 space-y-4">
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        2024 to present
                      </div>
                      <p className="text-slate-300 text-sm">
                        Software Engineering Crash Course at Moringa School
                        (SD-FT09 COHORT)
                      </p>
                    </div>
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        2022 to 2023
                      </div>
                      <p className="text-slate-300 text-sm">
                        Higher Diploma Graduate in Software Engineering at
                        Zetech University with Distinction accompanied by a GPA
                        of{" "}
                        <span className="text-blue-400 font-semibold">
                          3.72 out of 4.00
                        </span>
                        .
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Meshack"
                    className="relative rounded-2xl shadow-2xl border border-slate-700/50"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              I offer a range of services to help bring your digital ideas to
              life with modern technologies and best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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

      {/* Portfolio Section */}
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
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ready to work together? I'd love to hear from you. Send me a
              message and let's discuss your next project.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a
                      href="mailto:pangasmeshack@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      pangasmeshack@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <span className="text-white">+254 793057720</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <span className="text-white">Kenya</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-slate-400 mb-4">Follow me on social media</p>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://twitter.com/Mesh3894"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com/in/meshack-kataboi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://github.com/spookeyy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows={6}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/50 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            Copyright © Meshack. <Code2 className="inline w-4 h-4 mx-1" />{" "}
            Software Engineer
          </p>
        </div>
      </footer>
    </div>
  );
}
