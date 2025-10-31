'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, Send, CheckCircle } from 'lucide-react';
import { FaBehance } from "react-icons/fa";

const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const skills = [
    { name: 'Figma', level: 95 },
    { name: 'Adobe XD', level: 90 },
    { name: 'Sketch', level: 85 },
    { name: 'Protopie', level: 80 },
    { name: 'After Effects', level: 75 },
    { name: 'Framer', level: 85 },
    { name: 'User Research', level: 90 },
    { name: 'Wireframing', level: 95 },
  ];

  const experience = [
    {
      title: 'Senior UI/UX Designer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading design initiatives for enterprise SaaS products',
    },
    {
      title: 'Product Designer',
      company: 'Creative Studio',
      period: '2020 - 2022',
      description: 'Designed mobile and web applications for various clients',
    },
    {
      title: 'Junior Designer',
      company: 'Design Agency',
      period: '2018 - 2020',
      description: 'Worked on branding and UI design projects',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to send');
      }
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="neumorphic-card dark:dark-card p-8">
                <h2 className="text-3xl font-bold mb-4 text-light-text dark:text-dark-text">
                  Hi, I'm Gayatri Chatterjee
                </h2>
                <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary mb-4 leading-relaxed">
                  A passionate UI/UX designer creating human-centered digital experiences. 
                  With over 6 years of experience in the design industry, I specialize in 
                  crafting intuitive interfaces that solve real problems and delight users.
                </p>
                <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary mb-6 leading-relaxed">
                  I believe great design is invisible – it just works. My approach combines 
                  user research, data-driven insights, and creative problem-solving to deliver 
                  exceptional digital products.
                </p>
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 w-fit mx-auto shadow-lg"
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="neumorphic-card dark:dark-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">
                  Skills & Tools
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-light-text dark:text-dark-text">
                          {skill.name}
                        </span>
                        <span className="text-light-accent dark:text-dark-accent font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                          className="h-full bg-gradient-to-r from-light-accent to-light-accentHover 
                                   dark:from-dark-accent dark:to-dark-accentHover rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="neumorphic-card dark:dark-card p-6"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-light-accent dark:text-dark-accent font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mt-1">
                    {exp.period}
                  </p>
                </div>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="neumorphic-card dark:dark-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">
                  Send a Message
                </h3>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <CheckCircle size={64} className="text-green-500 mb-4" />
                    <p className="text-xl font-semibold text-light-text dark:text-dark-text">
                      Message Sent!
                    </p>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary mt-2">
                      I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="text-red-600 dark:text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-light-text dark:text-dark-text mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300
                                 focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-light-text dark:text-dark-text mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300
                                 focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-light-text dark:text-dark-text mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300
                                 focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full flex items-center justify-center gap-2
                         border-2 border-light-accent dark:border-dark-accent
                         text-light-accent dark:text-dark-accent
                         bg-light-accent/10 dark:bg-dark-accent/10
                         transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      <Send size={20} />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="neumorphic-card dark:dark-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 
                                  flex items-center justify-center">
                      <Mail className="text-light-accent dark:text-dark-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                        Email
                      </p>
                      <a
                        href="mailto:gayatrichatterjee2604@gmail.com"
                        className="text-light-text dark:text-dark-text hover:text-light-accent 
                                 dark:hover:text-dark-accent transition-colors"
                      >
                        gayatrichatterjee2604@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="neumorphic-card dark:dark-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gayatri-chatterjee-13803421a/' },
                    { icon: FaBehance, label: 'Behance', href: 'https://www.behance.net/gayatrichatter2' },
                    { icon: Mail, label: 'Email', href: 'mailto:gayatrichatterjee2604@gmail.com' },
                    { icon: Github, label: 'Github', href: 'https://github.com/gayatrichatterjee2604' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-3 p-6 rounded-xl
                               bg-light-accent/10 dark:bg-dark-accent/10
                               hover:bg-light-accent/20 dark:hover:bg-dark-accent/20
                               transition-all duration-300 glow-on-hover"
                    >
                      <social.icon
                        size={32}
                        className="text-light-accent dark:text-dark-accent"
                      />
                      <span className="text-sm font-medium text-light-text dark:text-dark-text">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
