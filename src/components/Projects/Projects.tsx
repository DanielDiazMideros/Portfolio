import { motion } from "framer-motion";
import { ProjectCard, type Project } from "./ProjectCard/ProjectCard";

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

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Credit card App",
      description:
        "A credit card payment UI built with React, featuring form validation, state management, and automated tests. Designed to simulate a real checkout flow with a clean, responsive interface.",
      imageUrl: `${baseUrl}cc.png`,
      tech: [
        "React",
        "Javascript",
        "Vite",
        "Jest",
        "react-testing-library",
        "react-redux",
        "material-UI",
        "Firebase",
      ],
      url: "https://github.com/DnlAlejandro/CreditCardPayment",
    },
    {
      title: "Video game App",
      description:
        "A browser-based game built with vanilla JavaScript, focused on game mechanics, user interaction, and responsive layout. A fun project to practice DOM manipulation and core front-end fundamentals.",
      imageUrl: `${baseUrl}game.jpg`,
      tech: ["HTML", "Javascript", "CSS"],
      url: "https://github.com/DnlAlejandro/VideoGame",
    },
    {
      title: "Journal App",
      description:
        "A personal journal app to create, edit, and organize notes with a simple and modern UI. Built with TypeScript and React, including state management and testing to ensure reliability.",
      imageUrl: `${baseUrl}journal.png`,
      tech: [
        "React",
        "TypeScript",
        "CSS",
        "Vite",
        "Jest",
        "Redux",
        "Material-UI",
      ],
      url: "https://github.com/DnlAlejandro/JournalApp",
    },
    {
      title: "Students App",
      description:
        "A student management app to register and manage student data using forms and validations. Built with React and TypeScript, featuring a structured UI and predictable state handling.",
      imageUrl: `${baseUrl}students.png`,
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Redux",
        "react-hook-form",
        "material-UI",
      ],
      url: "https://github.com/DnlAlejandro/StudentApp",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </motion.div>
    </motion.section>
  );
};
