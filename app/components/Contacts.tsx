// ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/Textarea";
import { Button } from "@/app/components/ui/Button";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", form);
    // Add integration logic here
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 dark:text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Column 1: Info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold dark:text-gray-300">
            Contact Info
          </h3>
          <p className="text-gray-700 dark:text-gray-400">
            You can reach me anytime via email or through this form. Let’s build
            something together.
          </p>
          <div>
            <p className="text-sm text-black dark:text-gray-300">Email</p>
            <p className="font-medium text-gray-700 dark:text-gray-400">
              edrel610@gmail.com
            </p>
          </div>
          <div>
            <p className="text-sm text-black dark:text-gray-300">Location</p>
            <p className="font-medium text-gray-700 dark:text-gray-400">
              Laguna, Philippines
            </p>
          </div>
        </motion.div>

        {/* Column 2: Spacer for visual balance or quote */}
        <motion.div
          className="hidden md:flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <blockquote className="italic text-muted-foreground max-w-[80%] dark:text-gray-300">
            "Design is not just what it looks like and feels like. Design is how
            it works." – Steve Jobs
          </blockquote>
        </motion.div>

        {/* Column 3: Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
}
