import { motion } from "framer-motion";
import css from "../../../styles/Sidebar.module.css";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen, links }) => {
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.div className={css.links}>
      {links.map((link, index) => (
        <motion.a
          href={link.href}
          key={index} // Use a unique key for each link
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLinkClick}
        >
          {link.text}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
