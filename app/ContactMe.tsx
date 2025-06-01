"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { toast } from "sonner";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
      const response = await fetch("/api/contact-resend", {
        // using resend for auto replies
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

  return (
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
            Ready to work together? I'd love to hear from you. Send me a message
            and let's discuss your next project.
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
                  <span className="text-white">Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-slate-400 mb-4">Follow me on social media</p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  style={{ backgroundColor: "#181717" }}
                >
                  <a
                    href="https://x.com/Mesh3894"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <X className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  style={{ backgroundColor: "#0077B5" }}
                >
                  <a
                    href="https://www.linkedin.com/in/meshack-kataboi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  style={{ backgroundColor: "#181717" }}
                >
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

            {/* <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button> */}
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
  );
}
