import { motion } from "framer-motion";
import css from "../../../styles/Sidebar.module.css";

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
