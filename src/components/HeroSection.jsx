// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Siphokazi Halala Cele
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        💻 Frontend Developer | ✨ UI/UX Enthusiast
      </motion.p>
      <motion.p
        className="max-w-xl text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        I build beautiful, functional web apps using modern tools like React and Tailwind. Always learning, always coding.
      </motion.p>
    </section>
  );
};

export default HeroSection;

