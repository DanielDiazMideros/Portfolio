import { motion, type MotionProps } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export type ProjectCardProps = MotionProps & { project: Project };

export const ProjectCard = ({ project, ...motionProps }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card"
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      {...motionProps}
    >
      <motion.div
        className="project-image"
        style={{ backgroundImage: `url('${project.imageUrl}')` }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      />

      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
};
