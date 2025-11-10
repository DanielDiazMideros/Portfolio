import { motion } from "framer-motion";
import { ProjectCard, type Project } from "./index";

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

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Project One",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing lorem ipsum dolor sit amet consectetur adipisicing lorem ipsum dolor sit amet consectetur adipisicing",
      imageUrl:
        "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
      tech: ["React", "TypeScript", "CSS"],
    },
    {
      title: "Project two",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing lorem ipsum dolor sit amet consectetur adipisicing lorem ipsum dolor sit amet consectetur adipisicingn",
      imageUrl:
        "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
      tech: ["React", "TypeScript", "CSS"],
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
