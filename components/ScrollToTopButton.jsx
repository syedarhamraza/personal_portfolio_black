import { useEffect, useState } from "react";
import styles from "../styles/scrolltopbutton.module.css";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 350);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`${styles["scroll-to-top"]} ${
        isVisible ? styles.visible : ""
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon className={styles.arrow} />
    </button>
  );
};

export default ScrollToTopButton;
