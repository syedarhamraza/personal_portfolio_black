import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import css from "../../styles/Sidebar.module.css";
import ToggleButton from "./toggleButton/ToggleButton";
import Image from "next/image";

const variants = {
  open: {
    clipPath: "circle(2500px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className={css.sidebar} animate={open ? "open" : "closed"}>
      <motion.div className={css.bg} variants={variants}>
        <Links
          links={[
            { href: "/#home", text: "Home" },
            { href: "/#about", text: "About" },
            { href: "/#projects", text: "Projects" },
            { href: "/#skills", text: "Skills" },
            { href: "/#contact", text: "Contact" },
          ]}
          setOpen={setOpen}
        />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
