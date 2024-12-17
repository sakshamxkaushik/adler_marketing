'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedTitle = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.1 
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  }

  const highlightedWordVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  }

  return (
    <motion.h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
      variants={titleVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={highlightedWordVariants} className="inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse">
          Explore
        </span>
      </motion.span>{" "}
      <motion.span variants={wordVariants}>and</motion.span>{" "}
      <motion.span variants={highlightedWordVariants} className="inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
          Create
        </span>
      </motion.span>{" "}
      <motion.span variants={wordVariants}>your</motion.span>{" "}
      <motion.span variants={wordVariants}>own</motion.span>{" "}
      <motion.span variants={wordVariants}>3D</motion.span>{" "}
      <motion.span variants={wordVariants}>World</motion.span>
    </motion.h1>
  )
}

export default AnimatedTitle
