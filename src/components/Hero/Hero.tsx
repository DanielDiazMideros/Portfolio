import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Tippy from "@tippyjs/react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const baseUrl = import.meta.env.BASE_URL;

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>👋 Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Daniel Diaz
          </motion.h1>
          <motion.h2 className="hero-subtitle">
            Creative Frontend Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Passionate about crafting engaging web experiences with modern
            technologies.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View my work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              Contact me
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <Tippy
              content="Github Profile"
              animation="shift-away"
              delay={[150, 0]}
            >
              <motion.a target="_blank" href="https://github.com/DnlAlejandro">
                <i className="fab fa-github"></i>
              </motion.a>
            </Tippy>
            <Tippy
              content="LinkedIn Profile"
              animation="shift-away"
              delay={[150, 0]}
            >
              <motion.a
                target="_blank"
                href="https://www.linkedin.com/in/daniel-alejandro-diaz-mideros/"
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
            </Tippy>

            <Tippy
              content="Download CV"
              animation="shift-away"
              delay={[150, 0]}
            >
              <span style={{ display: "inline-flex" }}>
                <motion.a
                  href={`${baseUrl}DanielDiazCV.pdf`}
                  download="DanielDiazCV.pdf"
                  aria-label="Download CV"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-file-pdf"></i>
                </motion.a>
              </span>
            </Tippy>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              style={vscDarkPlus}
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: "50",
              }}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "DanielDiazDev",
  origin: "Bogotá, Colombia ☕",
  role: "Frontend Web Sorcerer",
  stack: {
    languages: ["JavaScript", "TypeScript", "Python", "SQL"],
    frameworks: ["React", "Vue", "Next.js", "TailwindCSS"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
