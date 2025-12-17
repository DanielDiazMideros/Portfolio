import { motion } from "framer-motion";

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

const hoverScale = { scale: 1.1 };
const tapScale = { scale: 0.9 };

export const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
    >
      <motion.div
        className="logo"
        whileHover={hoverScale}
        whileTap={tapScale}
      >
        Daniel Diaz Dev
      </motion.div>

      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li variants={fadeInUp} whileHover={hoverScale} whileTap={tapScale}>
          <a href="#home">Home</a>
        </motion.li>
        <motion.li variants={fadeInUp} whileHover={hoverScale} whileTap={tapScale}>
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li variants={fadeInUp} whileHover={hoverScale} whileTap={tapScale}>
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
