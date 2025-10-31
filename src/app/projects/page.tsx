'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Filter, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'Branding'];

  const projects = [
    {
      id: 1,
      title: 'App Redesign',
      description: 'A complete redesign of a mobile banking app focusing on user experience and accessibility.',
      longDescription: 'Led the complete redesign of a mobile banking application, improving user flows and implementing accessibility standards. The project resulted in a 40% increase in user engagement.',
      role: 'Lead Designer',
      tools: ['Figma', 'Protopie', 'Adobe XD'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      category: 'Mobile',
      year: '2024',
    },
    {
      id: 2,
      title: 'Dashboard Concept',
      description: 'Modern analytics dashboard with data visualization and real-time insights.',
      longDescription: 'Designed a comprehensive analytics dashboard for enterprise clients, featuring real-time data visualization and customizable widgets.',
      role: 'UI/UX Designer',
      tools: ['Figma', 'Sketch', 'Principle'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      category: 'Web',
      year: '2024',
    },
    {
      id: 3,
      title: 'E-commerce UI Revamp',
      description: 'Refreshed e-commerce platform with improved checkout flow and product discovery.',
      longDescription: 'Revamped the entire e-commerce experience, reducing cart abandonment by 35% through improved UX patterns and streamlined checkout.',
      role: 'Product Designer',
      tools: ['Figma', 'Framer', 'After Effects'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'Web',
      year: '2023',
    },
    {
      id: 4,
      title: 'Fitness App UI',
      description: 'Health and fitness tracking app with personalized workout plans.',
      longDescription: 'Created an engaging fitness app interface with gamification elements and social features to keep users motivated.',
      role: 'UI/UX Designer',
      tools: ['Figma', 'Principle', 'Lottie'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      category: 'Mobile',
      year: '2023',
    },
    {
      id: 5,
      title: 'Brand Identity System',
      description: 'Complete brand identity design for a sustainable fashion startup.',
      longDescription: 'Developed a comprehensive brand identity including logo, color palette, typography, and brand guidelines for an eco-friendly fashion brand.',
      role: 'Brand Designer',
      tools: ['Illustrator', 'Photoshop', 'InDesign'],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      category: 'Branding',
      year: '2023',
    },
    {
      id: 6,
      title: 'SaaS Platform Design',
      description: 'Enterprise SaaS platform for project management and collaboration.',
      longDescription: 'Designed a scalable design system and interface for a project management platform used by Fortune 500 companies.',
      role: 'Lead Product Designer',
      tools: ['Figma', 'FigJam', 'Miro'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      category: 'Web',
      year: '2024',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
            A collection of design projects showcasing my approach to solving complex problems
            through thoughtful, user-centered design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-light-textSecondary dark:text-dark-textSecondary">
            <Filter size={20} />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-light-accent dark:bg-dark-accent text-white dark:text-dark-bg shadow-lg'
                  : 'bg-light-accent/10 dark:bg-dark-accent/10 text-light-text dark:text-dark-text hover:bg-light-accent/20 dark:hover:bg-dark-accent/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="neumorphic-card dark:dark-card overflow-hidden h-full transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                  flex items-end justify-center pb-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full 
                                 bg-white dark:bg-dark-bg text-light-text dark:text-dark-text
                                 font-medium text-sm shadow-lg"
                      >
                        View Details
                        <ExternalLink size={16} />
                      </motion.button>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium
                                     bg-white/90 dark:bg-dark-bg/90 text-light-text dark:text-dark-text">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium
                                     bg-light-accent/90 dark:bg-dark-accent/90 text-white dark:text-dark-bg">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-light-text dark:text-dark-text">
                      {project.title}
                    </h3>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-light-accent dark:text-dark-accent mb-2">
                        {project.role}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 text-xs rounded-full
                                     bg-light-accent/10 dark:bg-dark-accent/10
                                     text-light-text dark:text-dark-text"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="neumorphic-card dark:dark-card p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in working together?
            </h2>
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary mb-8">
              I'm always open to discussing new projects and creative ideas.
            </p>
            <motion.a
              href="/about#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-medium text-lg
                         border-2 border-light-accent dark:border-dark-accent
                         text-light-accent dark:text-dark-accent
                         hover:bg-light-accent/10 dark:hover:bg-dark-accent/10
                         transition-all duration-300 "
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
