import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm/ContactForm";

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

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.div className="contact-content" variants={staggerContainer}>
        <ContactForm />
      </motion.div>
    </motion.section>
  );
};
